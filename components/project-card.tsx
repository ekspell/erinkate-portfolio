"use client";

import { useState } from "react";
import { FadeIn } from "./fade-in";
import { fonts } from "@/lib/fonts";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.1}>
      <a
        href={project.url}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "block",
          textDecoration: "none",
          color: "inherit",
          borderRadius: "20px",
          overflow: "hidden",
          background: hovered ? project.gradient : "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.06)",
          padding: "36px",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 20px 60px -15px rgba(0,0,0,0.1)"
            : "0 2px 8px rgba(0,0,0,0.04)",
          cursor: "pointer",
        }}
      >
        {/* Header: emoji + metric */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              lineHeight: 1,
              transition:
                "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: hovered
                ? "rotate(90deg) scale(1.2)"
                : "rotate(0deg)",
              color: project.accentColor,
            }}
          >
            {project.emoji}
          </div>
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: "12px",
              fontWeight: 600,
              color: project.accentColor,
              padding: "5px 12px",
              borderRadius: "100px",
              backgroundColor: `${project.accentColor}12`,
              letterSpacing: "0.03em",
            }}
          >
            {project.metric}
          </div>
        </div>

        {/* Role label */}
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: "11px",
            fontWeight: 600,
            color: hovered ? project.accentColor : "rgba(0,0,0,0.35)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "8px",
            transition: "color 0.3s ease",
          }}
        >
          {project.role}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: fonts.serif,
            fontSize: "28px",
            fontWeight: 400,
            color: "#1A1A1A",
            marginBottom: "12px",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          {project.title}
          <span
            style={{
              display: "inline-block",
              marginLeft: "8px",
              fontSize: "18px",
              transition: "all 0.3s ease",
              transform: hovered
                ? "translate(3px, -3px)"
                : "translate(0,0)",
              opacity: hovered ? 0.8 : 0,
            }}
          >
            ↗
          </span>
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: fonts.sans,
            fontSize: "14px",
            lineHeight: 1.65,
            color: "rgba(0,0,0,0.45)",
            marginBottom: "20px",
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: fonts.sans,
                fontSize: "11px",
                fontWeight: 500,
                color: "rgba(0,0,0,0.3)",
                padding: "4px 10px",
                borderRadius: "6px",
                backgroundColor: "rgba(0,0,0,0.03)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </FadeIn>
  );
}
