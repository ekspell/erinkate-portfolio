import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";
import { FadeIn } from "../fade-in";

export function CaseStudyHero({ study, children, imageClassName, video }: { study: CaseStudy; children?: React.ReactNode; imageClassName?: string; video?: string }) {
  return (
    <div className="cs-hero">
      <FadeIn>
        <p className="cs-hero-label">Case Study</p>
        <h1 className="cs-hero-title">{study.title}</h1>
        <p className="cs-hero-subtitle">{study.subtitle}</p>
      </FadeIn>

      <FadeIn>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <span className="cs-meta-label">Role</span>
            <span className="cs-meta-value">{study.role}</span>
          </div>
          <div className="cs-meta-item">
            <span className="cs-meta-label">Timeline</span>
            <span className="cs-meta-value">{study.timeline}</span>
          </div>
          {study.team && (
            <div className="cs-meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">{study.team}</span>
            </div>
          )}
          {study.platform && (
            <div className="cs-meta-item">
              <span className="cs-meta-label">Platform</span>
              <span className="cs-meta-value">{study.platform}</span>
            </div>
          )}
        </div>
      </FadeIn>

      {children && <FadeIn>{children}</FadeIn>}

      <FadeIn>
        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className={imageClassName ?? "cs-hero-image"}
          />
        ) : (
          <Image
            src={study.heroImage}
            alt={study.heroImageAlt}
            width={1200}
            height={675}
            className={imageClassName ?? "cs-hero-image"}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        )}
      </FadeIn>
    </div>
  );
}
