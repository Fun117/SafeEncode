import crypto from 'crypto';

// IV の取得
const ivString = process.env.IV ? process.env.IV : "";
const ivBuffer = Buffer.from(JSON.parse(ivString).data); // JSON 形式の文字列をパースして Buffer に変換

// キーを適切な長さに拡張する関数
function extendKey(key: string, length: number): Buffer {
    const keyBuffer = Buffer.from(key, 'utf8');
    const extendedKey = Buffer.alloc(length);
    for (let i = 0; i < length; i++) {
        extendedKey[i] = keyBuffer[i % keyBuffer.length];
    }
    return extendedKey;
}

// 暗号化関数
export function encrypt(content: string, key: string): string {
    const extendedKey = extendKey(key, 32); // 256ビット（32バイト）のキーに拡張
    const cipher = crypto.createCipheriv(`${process.env.ENCRYPTION_ALGORITHM}`, extendedKey, ivBuffer); // 初期化ベクトルを指定して暗号化
    let encryptedContent = cipher.update(content, 'utf8', 'hex');
    encryptedContent += cipher.final('hex');
    return encryptedContent;
}

// 復号化関数
export function decrypt(content: string, key: string): string {
    const extendedKey = extendKey(key, 32); // 256ビット（32バイト）のキーに拡張
    const decipher = crypto.createDecipheriv(`${process.env.ENCRYPTION_ALGORITHM}`, extendedKey, ivBuffer); // 初期化ベクトルを指定して復号化
    let decryptedContent = decipher.update(content, 'hex', 'utf8');
    decryptedContent += decipher.final('utf8');
    return decryptedContent;
}