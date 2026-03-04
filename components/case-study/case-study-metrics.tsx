export function CaseStudyMetrics({
  metrics,
}: {
  metrics: { value: string; label: string }[];
}) {
  return (
    <div className="cs-metrics">
      {metrics.map((m) => (
        <div key={m.label} className="cs-metric-card">
          <div className="cs-metric-value">{m.value}</div>
          <div className="cs-metric-label">{m.label}</div>
        </div>
      ))}
    </div>
  );
}
