import crypto from 'crypto';

// HMACを計算する関数
export async function SafeEncodeServer_calculateHmac(content: string, key: string): Promise<string> {
    return crypto.createHmac('sha256', key).update(content).digest('hex');
}