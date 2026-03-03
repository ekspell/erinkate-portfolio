import { Nav, Hero, Marquee, Projects, About, Footer } from "@/components";

export default function Home() {
  return (
    <>
      {/* White Border Frame */}
      <div className="frame">
        <div className="frame-inner" />
      </div>

      <div className="page">
        <Nav />
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Footer />
      </div>
    </>
  );
}
