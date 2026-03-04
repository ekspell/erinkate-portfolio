import Image from "next/image";

export function CaseStudyImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <div className="cs-image-wrap">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="cs-image"
      />
      {caption && <p className="cs-image-caption">{caption}</p>}
    </div>
  );
}
