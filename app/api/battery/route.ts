import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const value = await kv.get<string>("battery");
  if (value === null) {
    return NextResponse.json({ battery: 0 });
  }
  return NextResponse.json({ battery: value });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (body.battery === undefined) {
    return NextResponse.json({ error: "battery is required" }, { status: 400 });
  }
  if (body.password !== process.env.PASSWORD) {
    return NextResponse.json({ error: "invalid password" }, { status: 401 });
  }
  await kv.set("battery", body.battery);
  return NextResponse.json({ battery: body.battery });
}
