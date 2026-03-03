import { FadeIn } from "./fade-in";

export function About() {
  return (
    <section className="section" style={{ padding: "40px 48px 80px" }}>
      <FadeIn>
        <div className="section-header">
          <h2 className="section-title">About</h2>
        </div>
        <div className="section-rule" style={{ marginBottom: "48px" }} />
      </FadeIn>

      <div className="about-grid">
        <FadeIn>
          <blockquote className="about-quote">
            I have an innate curiosity for how things work.{" "}
            <em>Design naturally evolved into development.</em>
          </blockquote>
        </FadeIn>

        <div className="about-body">
          <FadeIn>
            <p>
              Currently a Senior UX Designer building products for an American
              tech company from Cascais, Portugal. On the side, I&apos;m
              building Fijord — an AI-powered product discovery tool for
              startup teams.
            </p>
            <p>
              I believe the best interfaces come from people who understand both
              the pixel and the function call. I use AI tools daily to ship
              faster — not as a shortcut, but as a multiplier.
            </p>
            <p>
              Before tech, I taught yoga and pilates and ran therapeutic
              horseback riding programs. I still think about design the way I
              think about movement — every small adjustment changes the whole
              experience.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
