import type { ReactNode } from "react";
import { FadeIn } from "../fade-in";

export function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <FadeIn>
      <section className="cs-section">
        <div className="cs-section-header">
          <h2 className="cs-section-title">{title}</h2>
        </div>
        <div className="cs-section-rule" />
        <div className="cs-section-body">{children}</div>
      </section>
    </FadeIn>
  );
}
