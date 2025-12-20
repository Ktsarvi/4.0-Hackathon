"use client";

import { useState, useRef, useEffect } from "react";
import { Loading } from "@/components/loading";

export default function ImagePlayer() {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      const handleLoad = () => setIsLoading(false);
      const handleError = () => setIsLoading(false);

      img.addEventListener("load", handleLoad);
      img.addEventListener("error", handleError);

      return () => {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleError);
      };
    }
  }, []);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <Loading />
        </div>
      )}
      <img
        ref={imgRef}
        src="/api/video" // Consider renaming the API endpoint to match the image context
        alt="Video will appear here"
        width={800}
        height={500}
        className={`rounded-lg shadow-lg ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoadStart={() => setIsLoading(true)}
      />
    </div>
  );
}
