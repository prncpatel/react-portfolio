"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const MeteorsBackground = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const styles = new Array(number).fill(null).map(() => ({
      "--angle": `${angle}deg`,
      top: `${Math.random() * screenHeight}px`, // Random Y position
      left: `${Math.random() * screenWidth}px`, // Random X position
      animationDelay: `${Math.random() * (maxDelay - minDelay) + minDelay}s`,
      animationDuration: `${
        Math.random() * (maxDuration - minDuration) + minDuration
      }s`,
    }));

    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[-1]">
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            "absolute size-0.5 rotate-[var(--angle)] bg-white shadow-[0_0_4px_#ffffff50]",
            "animate-[meteor-fall_linear_infinite]",
            className
          )}
        >
          {/* Meteor Tail */}
          <div className="absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-white to-transparent" />
        </span>
      ))}
    </div>
  );
};
