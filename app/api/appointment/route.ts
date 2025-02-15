import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    // Parse the JSON payload from the request
    const { name, email, phoneNo, workDetails } = await req.json();

    // Basic validation to ensure required fields are present
    if (!name || !email || !phoneNo || !workDetails) {
      return NextResponse.json(
        { error: "All fields (name, email, phoneNo, workDetails) are required." },
        { status: 400 }
      );
    }

    // Handle the data (e.g., save to database or further processing)
    // For now, respond with a success message
    return NextResponse.json({ message: "Data received successfully"});
    }