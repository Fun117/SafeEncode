// /src/app/api/decryption/route.ts

import { NextResponse } from "next/server";
import { decrypt } from "..";

export async function GET(request: Request) {
    const queryParams = new URL(request.url).searchParams;
    const key = queryParams.get('key');
    const content = queryParams.get('content');

    // key が null の場合、エラーレスポンスを返す
    if (key === null) {
        return NextResponse.json(
            {
                error: "Key is missing",
                content: "Error"
            },
            {
                status: 400
            }
        );
    }

    // 暗号化するKeyが1文字以下の場合、エラーレスポンスを返す
    if (key.length < 1) {
        return NextResponse.json(
            {
                error: "Key must be longer than 0 characters",
                content: "Error"
            },
            {
                status: 400
            }
        );
    }

    // content が null の場合、エラーレスポンスを返す
    if (content === null) {
        return NextResponse.json(
            {
                error: "Content is missing",
                content: "Error"
            },
            {
                status: 400
            }
        );
    }

    // ここで復号化の処理を実装する
    const decryptedContent = await decrypt(content, key);

    if(decryptedContent){
        // 復号化された内容を JSON 形式で返す
        return NextResponse.json(
            {
                content: decryptedContent,
            },
            {
                status: 200
            }
        );
    }
    return NextResponse.json(
        {
            error: "Key is incorrect",
            content: "Error"
        },
        {
            status: 400
        }
    );
}