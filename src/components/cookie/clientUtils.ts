import { v4 as uuidv4 } from 'uuid';
import { SafeEncodeServer_calculateHmac } from './serverUtils';

// セッションIDを生成する関数
export function SafeEncodeClient_generateSessionId(): string {
    return uuidv4(); // ランダムなセッションIDを生成
}

// 文字列を返す関数
export async function SafeEncodeClient_setEncryptedData( content: string, key: string ) {
    const hmac = await SafeEncodeServer_calculateHmac( content, key ); // データに対してHMACを計算
    const encryptedValue = SafeEncodeClient_encrypt(content + '|' + hmac); // データとHMACを結合し、暗号化
    return encryptedValue;
}

// 文字列を暗号化する関数
export function SafeEncodeClient_encrypt(text: string): string {
    // ここに暗号化の処理を追加（例：Base64エンコーディング）
    return Buffer.from(text).toString('base64');
}

// 文字列を復号化する関数
export function SafeEncodeClient_decrypt(text: string): string {
    // ここに復号化の処理を追加（例：Base64デコーディング）
    return Buffer.from(text, 'base64').toString();
}

// 文字列からセッションIDを取得し、検証してから復号化する関数
export async function SafeEncodeClient_getDecryptedSessionId( content: string, key: string ): Promise<string | null> {
    const encryptedValue = content; // 復号する文字列
    if (encryptedValue) {
        const [sessionId, hmac] = SafeEncodeClient_decrypt(encryptedValue).split('|'); // セッションIDとHMACに分割
        const calculatedHmac = await SafeEncodeServer_calculateHmac( sessionId, key ); // HMACを再計算
        if (calculatedHmac === hmac) { // HMACを再計算して検証
            return sessionId; // 検証が成功した場合はセッションIDを返す
        } else {
            return null
        }
    }
    return null;
}

// セッションIDを生成し、HMACを付加してから暗号化して文字列を返す関数
export async function SafeEncodeClient_setEncryptedSessionId( content: string, key: string ) {
    const sessionId = SafeEncodeClient_generateSessionId(); // セッションIDを生成
    const hmac = await SafeEncodeServer_calculateHmac( sessionId, key ); // HMACを計算
    const sessionData = sessionId + '|' + hmac; // セッションIDとHMACを結合
    const encryptedValue = SafeEncodeClient_encrypt(sessionData); // セッションIDとHMACを暗号化
    return encryptedValue
}