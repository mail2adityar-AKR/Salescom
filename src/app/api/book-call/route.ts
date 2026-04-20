import { NextResponse } from "next/server";
import { leadsStore } from "../leads/route";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Push to our in-memory store
    leadsStore.push({
      ...data,
      timestamp: new Date().toISOString(),
    });

    console.log("New Strategy Call Application Received and Saved:", data);

    // GOOGLE SHEETS WEBHOOK INTEGRATION
    const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (WEBHOOK_URL) {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: "Salescom Booking Funnel"
        }),
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Failed to process application" }, { status: 500 });
  }
}
