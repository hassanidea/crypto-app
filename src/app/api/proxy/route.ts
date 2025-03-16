import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const response = await fetch("http://127.0.0.1:8000");

  const data = await response.json();
  console.log(data);
  return NextResponse.json(data);
}
