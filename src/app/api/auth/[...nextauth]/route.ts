import { NextResponse } from "next/server";

// Placeholder for NextAuth.js configuration
// TODO: Configure NextAuth with your providers

export async function GET() {
  return NextResponse.json({ message: "Auth endpoint" });
}

export async function POST() {
  return NextResponse.json({ message: "Auth endpoint" });
}
