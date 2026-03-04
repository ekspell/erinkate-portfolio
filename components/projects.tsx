import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { FadeIn } from "./fade-in";

function ProjectRow({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) {
  const isExternal = project.url.startsWith("http");
  const isComingSoon = project.url === "#";
  const isInternal = !isExternal && !isComingSoon;

  const content = (
    <>
      <div className="project-num">{project.num}</div>
      <div>
        <div className="project-top">
          <h3 className="project-title">
            {project.title}
            {isComingSoon ? (
              <span className="project-coming-soon">Coming Soon</span>
            ) : (
              <span className={isInternal ? "project-arrow project-arrow-internal" : "project-arrow"}>{isInternal ? "→" : "↗"}</span>
            )}
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "16px",
            }}
          >
            <span className="project-role">{project.role}</span>
            <span className="project-year">{project.year}</span>
          </div>
        </div>
        <p className="project-desc">{project.description}</p>
        <div className="project-meta">
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          {project.metric && (
            <div>
              <span className="metric-value">{project.metric.value}</span>{" "}
              <span className="metric-label">{project.metric.label}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );

  if (isComingSoon) {
    return (
      <FadeIn>
        <div className="project-row" style={{ cursor: "default" }}>
          {content}
        </div>
      </FadeIn>
    );
  }

  if (isInternal) {
    return (
      <FadeIn>
        <Link href={project.url} className="project-row">
          {content}
        </Link>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <a
        href={project.url}
        className="project-row"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    </FadeIn>
  );
}

export function Projects() {
  return (
    <section id="work" className="section" style={{ padding: "80px 48px" }}>
      <FadeIn>
        <div className="section-header">
          <h2 className="section-title">Selected Work</h2>
          <span className="section-meta">2023 – Present</span>
        </div>
        <div className="section-rule" />
      </FadeIn>

      {PROJECTS.map((project) => (
        <ProjectRow key={project.title} project={project} />
      ))}
    </section>
  );
}
