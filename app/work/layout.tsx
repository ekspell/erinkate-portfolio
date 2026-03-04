import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CaseStudyBackLink } from "@/components/case-study";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="frame">
        <div className="frame-inner" />
      </div>
      <div className="page">
        <Nav />
        <CaseStudyBackLink />
        {children}
        <Footer />
      </div>
    </>
  );
}
