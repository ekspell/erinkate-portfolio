"use client";

import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Lisbon",
          hour12: true,
        }).format(new Date())
      );
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="nav">
      <div className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">Erin Kate</div>
        <div className="nav-details">
          <span>Cascais, PT</span>
          <span style={{ fontVariantNumeric: "tabular-nums" }}>{time}</span>
          <a href="mailto:helloerinkate@gmail.com" className="nav-cta">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
