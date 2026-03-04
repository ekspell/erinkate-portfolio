export function CaseStudyQuote({
  quote,
  attribution,
}: {
  quote: string;
  attribution?: string;
}) {
  return (
    <blockquote className="cs-quote">
      <p>{quote}</p>
      {attribution && <p className="cs-quote-attr">— {attribution}</p>}
    </blockquote>
  );
}
