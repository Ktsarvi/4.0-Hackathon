"use client";

import { useState } from "react";
import { Loading } from "@/components/loading";

export default function VideoPlayer() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <Loading />
        </div>
      )}
      <img
        src="/api/video"
        alt="YOLO Live Stream"
        width={800}
        height={600}
        className={`rounded-lg shadow-lg ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  );
}
