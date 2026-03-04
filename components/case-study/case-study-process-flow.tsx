import Image from "next/image";

interface Step {
  num: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export function CaseStudyProcessFlow({ steps }: { steps: Step[] }) {
  return (
    <div className="cs-process-flow">
      {steps.map((step) => (
        <div key={step.num} className="cs-process-step">
          <span className="cs-process-num">{step.num}</span>
          <div>
            <h3 className="cs-process-title">{step.title}</h3>
            <p className="cs-process-desc">{step.description}</p>
            {step.image && (
              <Image
                src={step.image}
                alt={step.imageAlt ?? step.title}
                width={1200}
                height={675}
                className="cs-process-image"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
