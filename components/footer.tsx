import { LINKS } from "@/lib/data";
import { FadeIn } from "./fade-in";

export function Footer() {
  return (
    <section
      className="section footer-section"
      style={{ padding: "0 48px 64px" }}
    >
      <FadeIn>
        <div className="footer-inner">
          <div>
            <h2 className="footer-headline">
              Let&apos;s work together
              <em>.</em>
            </h2>
            <p className="footer-body">
              I&apos;m exploring design engineering roles where I can ship real
              products with a small, focused team.
            </p>
            <div className="footer-links">
              {LINKS.map((link) => {
                const isExternal = link.url.startsWith("http");
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    className="footer-link"
                    {...(isExternal && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="footer-colophon">
            Made with care
            <br />
            &amp; Claude © 2026
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
