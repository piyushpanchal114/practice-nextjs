import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Jenny" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Harry" },
  ]);
}
