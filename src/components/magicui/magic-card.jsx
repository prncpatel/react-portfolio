"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientFrom = "#9E7AFF",
  gradientTo = "#FE8BBB",
  borderColor = "gray-500", // Default border color
}) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative rounded-[5px] flex flex-col gap-6 border border-gray-300 bg-white py-6 px-2 shadow-2xl shadow-blue-100 transition-all duration-300",
        className
      )}
      data-aos="fade-up"
    >
      {/* Interactive Border */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] border-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          borderImageSource: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, 
            ${gradientFrom}, transparent 70%)`,
          borderImageSlice: 1,
        }}
      />
      
      {/* Card Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
