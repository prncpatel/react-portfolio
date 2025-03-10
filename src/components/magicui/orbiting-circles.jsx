import { cn } from "@/lib/utils";
import React from "react";

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 10,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;

  return (
    <div className="absolute size-[400px] flex items-center justify-center top-60  right-40">
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-full pointer-events-none"
        >
          <circle
            className="stroke-gray-300 dark:stroke-gray-700"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        const delay = (calculatedDuration / React.Children.count(children)) * index;

        return (
          <div
            style={{
              "--duration": `${calculatedDuration}s`,
              "--radius": `${radius}px`,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
              "--delay": `${delay}s`,
              animationDirection: reverse ? "reverse" : "normal",
              transform: `translate(
                calc(var(--radius) * cos(var(--angle) * 1deg)),
                calc(var(--radius) * sin(var(--angle) * 1deg))
              )`,
            }}
            className={cn(
              "absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full",
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
