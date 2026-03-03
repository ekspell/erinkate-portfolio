"use client";

import { useState, useEffect } from "react";

type FloatingShapeProps = {
  top: string;
  left: string;
  size: string;
  color: string;
  delay: number;
  shape?: "circle" | "rounded" | "square";
};

export function FloatingShape({
  top,
  left,
  size,
  color,
  delay,
  shape = "circle",
}: FloatingShapeProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frame: number;
    let t = delay * 1000;

    const animate = () => {
      t += 16;
      setOffset({
        x: Math.sin(t / 3000) * 15,
        y: Math.cos(t / 2500) * 12,
      });
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [delay]);

  const borderRadius =
    shape === "circle" ? "50%" : shape === "rounded" ? "30%" : "0";

  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        borderRadius,
        background: color,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        filter: "blur(0.5px)",
        opacity: 0.5,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
