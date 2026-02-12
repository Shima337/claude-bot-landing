import { NextRequest, NextResponse } from "next/server";
import { addLead, getLeads } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim() : null;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }
    const lead = addLead(email);
    return NextResponse.json(lead, { status: 201 });
  } catch (e) {
    console.error("POST /api/leads", e);
    return NextResponse.json(
      { error: "Failed to save lead" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.LEADS_API_KEY;
    if (apiKey) {
      const headerKey = request.headers.get("x-api-key");
      if (headerKey !== apiKey) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }
    const leads = getLeads();
    return NextResponse.json(leads);
  } catch (e) {
    console.error("GET /api/leads", e);
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}
