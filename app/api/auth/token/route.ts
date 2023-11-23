import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Never use this code on production

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });
  return NextResponse.json(token);
}
