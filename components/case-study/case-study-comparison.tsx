import Image from "next/image";

export function CaseStudyComparison({
  before,
  after,
}: {
  before: { src: string; alt: string; label?: string };
  after: { src: string; alt: string; label?: string };
}) {
  return (
    <div className="cs-comparison">
      <div className="cs-comparison-side">
        <p className="cs-comparison-label">{before.label ?? "Before"}</p>
        <Image
          src={before.src}
          alt={before.alt}
          width={600}
          height={400}
          className="cs-comparison-image"
        />
      </div>
      <div className="cs-comparison-side">
        <p className="cs-comparison-label">{after.label ?? "After"}</p>
        <Image
          src={after.src}
          alt={after.alt}
          width={600}
          height={400}
          className="cs-comparison-image"
        />
      </div>
    </div>
  );
}
