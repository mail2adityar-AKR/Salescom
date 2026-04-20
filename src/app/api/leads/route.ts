import { NextResponse } from "next/server";

// Simple in-memory store for demo purposes
// In a real app, this would be a database
export const leadsStore: any[] = [
  {
    name: "Aditya Sharma",
    email: "aditya@sales.com",
    phone: "+91 99887 76655",
    topic: "b2b",
    role: "Sales Manager",
    timestamp: new Date().toISOString(),
  },
  {
    name: "Priya Singh",
    email: "priya@closers.in",
    phone: "+91 88776 65544",
    topic: "branding",
    role: "Founder",
    timestamp: new Date().toISOString(),
  }
];

export async function GET() {
  return NextResponse.json(leadsStore, { status: 200 });
}
