import { cn } from "@/lib/utils";
import React from "react";

export function BackgroundDots({ className }: { className?: string }) {
  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full opacity-[0.5]",
          className
        )}
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full opacity-[0.5]",
          className
        )}
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '10px 10px'
        }}
      />
    </>
  );
}