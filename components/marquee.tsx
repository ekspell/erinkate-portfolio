import { CLIENTS } from "@/lib/data";
import { FadeIn } from "./fade-in";

export function Marquee() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <FadeIn>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {doubled.map((client, i) => (
            <span key={i} className="marquee-item">
              {client} <span className="marquee-dot">◆</span>
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
