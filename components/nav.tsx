"use client";

import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav">
      <div className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
        <a
          href="/"
          className="nav-logo"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Erin Kate
        </a>
        <div className="nav-details">
          <a
            href="/#work"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              fontWeight: 500,
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
          >
            Work
          </a>
          <a href="mailto:helloerinkate@gmail.com" className="nav-cta">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
