"use client";

import { useState, useRef, useEffect } from "react";
import { Loading } from "@/components/loading";

export default function VideoPlayer() {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    let isMounted = true;
    let reader: ReadableStreamDefaultReader<Uint8Array> | null = null;
    let animationFrameId: number;

    const updateFrame = async () => {
      try {
        const response = await fetch("/api/video");
        reader = response.body?.getReader();

        if (!reader) {
          throw new Error("Could not get reader from response");
        }

        let buffer = new Uint8Array();
        let boundary = "--frame\r\n";
        const boundaryBytes = new TextEncoder().encode(boundary);
        const headerEnd = new Uint8Array([0x0d, 0x0a, 0x0d, 0x0a]); // \r\n\r\n

        while (isMounted) {
          const { done, value } = await reader.read();
          if (done) break;

          // Add new chunk to buffer
          const newBuffer = new Uint8Array(buffer.length + value.length);
          newBuffer.set(buffer);
          newBuffer.set(value, buffer.length);
          buffer = newBuffer;

          // Process frames
          while (true) {
            const boundaryPos = findSequence(buffer, boundaryBytes);
            if (boundaryPos === -1) break;

            const headersEnd = findSequence(buffer, headerEnd, boundaryPos);
            if (headersEnd === -1) break;

            const imageStart = headersEnd + 4;
            const nextBoundaryPos = findSequence(
              buffer,
              boundaryBytes,
              imageStart
            );
            if (nextBoundaryPos === -1) break;

            const imageData = buffer.slice(imageStart, nextBoundaryPos - 2); // Remove \r\n
            const blob = new Blob([imageData], { type: "image/jpeg" });
            const url = URL.createObjectURL(blob);

            if (isMounted) {
              setImgSrc(url);
              setIsLoading(false);
              // Revoke previous URL to prevent memory leaks
              if (imgRef.current?.src) {
                URL.revokeObjectURL(imgRef.current.src);
              }
            }

            buffer = buffer.slice(nextBoundaryPos);
          }

          // Small delay to prevent UI freeze
          await new Promise((resolve) => setTimeout(resolve, 0));
        }
      } catch (error) {
        console.error("Error in video stream:", error);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    updateFrame();

    return () => {
      isMounted = false;
      if (reader) {
        reader.cancel().catch(console.error);
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (imgRef.current?.src) {
        URL.revokeObjectURL(imgRef.current.src);
      }
    };
  }, []);

  const findSequence = (
    buffer: Uint8Array,
    sequence: Uint8Array,
    start = 0
  ) => {
    for (let i = start; i <= buffer.length - sequence.length; i++) {
      let match = true;
      for (let j = 0; j < sequence.length; j++) {
        if (buffer[i + j] !== sequence[j]) {
          match = false;
          break;
        }
      }
      if (match) return i;
    }
    return -1;
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <Loading />
        </div>
      )}
      <img
        ref={imgRef}
        src={imgSrc}
        alt="Video feed"
        className={`w-full h-full object-contain rounded-lg shadow-lg ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
