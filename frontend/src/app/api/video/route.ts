// app/api/video/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Fetch the image stream from the FastAPI server
    const response = await fetch("http://127.0.0.1:8000/video_feed");

    if (!response.ok) {
      throw new Error(
        `Python server responded with status: ${response.status}`
      );
    }

    // Get the readable stream from the response
    const stream = response.body;

    // Return a new response with the stream and appropriate headers
    return new Response(stream, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("Error fetching video:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch video" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
