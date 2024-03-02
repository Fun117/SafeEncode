import { NextResponse } from "next/server";

// ユーザーリストを取得するAPI
export function GET() {
    return NextResponse.json([
        {
            creator: "Fun117",
        }
    ]);
}