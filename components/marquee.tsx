import { CLIENTS } from "@/lib/data";
import { FadeIn } from "./fade-in";

export function Marquee() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <FadeIn>
      <div className="marquee-wrap">
        <p className="marquee-eyebrow">Proud to have worked with</p>
        <div className="marquee-track">
          {doubled.map((client, i) => (
            <span key={i} className="marquee-item">
              <img
                src={client.logo}
                alt={client.name}
                className={`marquee-logo${client.large ? " marquee-logo-lg" : ""}${client.small ? " marquee-logo-sm" : ""}`}
                height={client.large ? 26 : client.small ? 20 : 22}
              />
              <span className="marquee-dot">◆</span>
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
