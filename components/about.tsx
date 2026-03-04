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
              Currently a Senior UX Designer at Harpin AI, working with
              Marriott. On the side, I&apos;m building Fijord, an AI-powered
              product discovery tool for product teams.
            </p>
            <p>
              I believe the best interfaces come from people who understand both
              the pixel and the function call. I use AI tools daily to ship
              faster – not as a shortcut, but as a multiplier.
            </p>
            <p>
              Before tech, I taught yoga and Pilates and ran therapeutic
              horseback riding programs. I still think about design the way I
              think about movement – every small adjustment influences the whole
              experience.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
