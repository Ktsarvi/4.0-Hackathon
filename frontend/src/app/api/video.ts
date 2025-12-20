import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Update the URL to match your Python server's endpoint
    const response = await fetch("http://localhost:8000/video_feed");

    if (!response.ok) {
      throw new Error(
        `Python server responded with status: ${response.status}`
      );
    }

    // Set the correct content type for multipart stream
    res.setHeader("Content-Type", "multipart/x-mixed-replace; boundary=frame");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    // Stream the response body directly to the client
    const reader = response.body?.getReader();

    if (!reader) {
      throw new Error("No response body");
    }

    // Pipe the stream to the response
    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      res.write(value);
    }

    res.end();
  } catch (error) {
    console.error("Error fetching video:", error);
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "Failed to fetch video stream",
    });
  }
}
