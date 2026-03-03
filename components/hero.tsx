import Image from "next/image";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div>
          <p className="hero-label">Product Designer → Design Engineer</p>
          <h1 className="hero-headline">
            I design products.
            <br />
            <em>Then I write the code.</em>
          </h1>
          <p className="hero-body">
            Senior product designer with 7+ years turning ambiguous problems
            into shipped software. Now I write the code too — from research and
            Figma to production code.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn-outline">
              View Work
            </a>
            <a
              href="https://fijord.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Live Product ↗
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <Image
            src="/erin-kate.png"
            alt="Erin Kate, Design Engineer"
            className="hero-photo"
            width={340}
            height={420}
            priority
          />
        </div>
      </div>
    </section>
  );
}
