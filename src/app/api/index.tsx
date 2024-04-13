import { SafeEncodeClient_getDecryptedSessionId, SafeEncodeClient_setEncryptedData, SafeEncodeClient_setEncryptedSessionId } from '@/components/cookie/clientUtils';

// 暗号化関数
export async function encrypt(content: string, key: string) {
    const value = await SafeEncodeClient_setEncryptedData( content, key );
    return value;
}

// 復号化関数
export async function decrypt(content: string, key: string) {
    const value = await SafeEncodeClient_getDecryptedSessionId( content, key );
    return value;
}