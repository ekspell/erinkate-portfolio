import type { Metadata } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";
import {
  CaseStudyHero,
  CaseStudySection,
  CaseStudyImage,
  CaseStudyMetrics,
  CaseStudyQuote,
} from "@/components/case-study";

const study = CASE_STUDIES.cirrusmd;

export const metadata: Metadata = {
  title: "The Digital Stacking Method – Case Study | Erin Kate",
  description: study.subtitle,
  openGraph: {
    title: "The Digital Stacking Method – Case Study | Erin Kate",
    description: study.subtitle,
    url: "https://erinkate.design/work/cirrusmd",
    type: "article",
  },
};

const INSIGHTS = [
  "The problem wasn\u2019t the progress note panel\u2019s efficiency \u2013 it was that the platform forced a workflow that doesn\u2019t exist in real life",
  "70% of providers complete patient notes after their shift ends, not at the end of each individual visit",
  "Most providers were handling 25+ simultaneous encounters during peak hours, with no way to distinguish active conversations from closed encounters awaiting notes",
  "The patient list was sorted by time of first encounter and never reordered \u2013 recent activity didn\u2019t surface patients to the top",
  "The patient info shown in the panel (plan type, pronouns, age) wasn\u2019t what providers needed when triaging; they needed wait time, status, and recency",
  "Providers wanted to reorganize and prioritize patients within their panel \u2013 the same spatial control they have with physical charts",
  "Patients were stuck in limbo \u2013 their visit was over, but the system hadn\u2019t closed it, so satisfaction surveys arrived too late or not at all",
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Shadow & observe",
    desc: "Ran mock encounter sessions with providers and my product owner (HIPAA-compliant) to observe how they navigated the platform under realistic conditions.",
  },
  {
    num: "02",
    title: "Workshop sessions",
    desc: "Facilitated discussions with the 10-provider advisory board, asking questions and mocking up concepts in Figma in real time as they described pain points.",
  },
  {
    num: "03",
    title: "Reframe the problem",
    desc: "Shifted from \u201Cfix the notes panel\u201D to \u201Clet providers practice digitally the way they practice in person.\u201D",
  },
  {
    num: "04",
    title: "Design & iterate",
    desc: "Designed the Incomplete Charts concept with reorganized encounter zones, iterated with provider feedback, and added shift-end alerts.",
  },
];

export default function CirrusMDPage() {
  return (
    <div className="cs-page">
      <CaseStudyHero study={study} />

      {/* ── The Problem ── */}
      <CaseStudySection title="The Problem">
        <p>
          CirrusMD is an async telemedicine platform where providers manage
          multiple patient conversations simultaneously through a text-based
          interface. During peak shifts, most providers were handling 25+ active
          encounters at once.
        </p>
        <p>
          The platform&apos;s left-hand panel showed a single flat list labeled
          &ldquo;Active Encounters&rdquo; &ndash; every patient in one
          undifferentiated column. The list was sorted by time of first encounter
          and never reordered, so even if a provider had just sent a message to
          someone, that patient stayed buried in the same position. There were no
          status indicators showing how long a patient had been waiting, no
          distinction between active conversations and closed encounters awaiting
          notes, and no way to reorganize.
        </p>
        <p>
          On top of this, the workflow required providers to complete all
          progress notes on a patient before they could effectively move on.
          Think of it like an ER that can&apos;t clear a bed until the chart is
          filled &ndash; patients stack up, not because the doctor is still
          treating them, but because the paperwork isn&apos;t done.
        </p>
        <p>
          The original ticket was framed as &ldquo;fix the progress notes to
          make them more efficient for providers.&rdquo; That turned out to be
          wrong.
        </p>

        <CaseStudyImage
          src="/work/cirrusmd/before.png"
          alt="Before: A single flat list of Active Encounters with no status indicators"
          caption="Before: A single flat list labeled &lsquo;Active Encounters&rsquo; with no status indicators, no wait-time visibility, and no way to reorganize. The list was sorted by time of first encounter &ndash; not recent activity."
        />
      </CaseStudySection>

      {/* ── Research ── */}
      <CaseStudySection title="Research">
        <p>
          I facilitated workshops with the 10 providers who sat on
          CirrusMD&apos;s provider advisory board &ndash; a mixed group spanning
          psychiatry, family medicine, and internal medicine. Due to HIPAA, I
          couldn&apos;t observe real patient sessions, so I arranged mock
          encounter sessions with a few providers and my product owner, watching
          how they navigated the platform and managed their queue in simulated
          conditions.
        </p>
        <p>
          What I discovered surprised me. The progress note panel wasn&apos;t
          the bottleneck. 70% of providers&apos; in-person workflows involved
          simply setting aside patient files to finish notes later &ndash; before
          lunch, at the end of a shift, during a lull. It&apos;s how medicine
          has always worked: you see the patient, you stack their chart, you move
          on.
        </p>
        <p>
          But the platform didn&apos;t allow this. There was no concept of
          &ldquo;done with the visit but still need to write notes.&rdquo; Every
          patient stayed in the active list until everything was complete, which
          meant the provider&apos;s list grew and grew with no way to organize
          it. New patients were harder to find. The provider&apos;s acceptance
          rate for new patients slowed down &ndash; not because they were busy,
          but because their workspace was a mess.
        </p>

        <CaseStudyQuote
          quote={"\u201CI need a way to stack my patients\u2019 files in the corner of my desk when their visit is over. This way, when I have some downtime \u2013 or my workflow is to finish notes right before clocking out \u2013 I can complete their patient notes.\u201D"}
          attribution="Provider discovery note, CirrusMD advisory board workshop"
        />
      </CaseStudySection>

      {/* ── Key Insights ── */}
      <CaseStudySection title="Key Insights">
        <div className="cs-insights">
          {INSIGHTS.map((insight, i) => (
            <div key={i} className="cs-insight">
              <span className="cs-insight-num">{i + 1}</span>
              <p className="cs-insight-text">{insight}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* ── Process ── */}
      <CaseStudySection title="Process">
        <div className="cs-process-horizontal">
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="cs-process-h-step">
              <div className="cs-process-h-num">{step.num}</div>
              <h4 className="cs-process-h-title">{step.title}</h4>
              <p className="cs-process-h-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* ── The Solution ── */}
      <CaseStudySection title="The Solution">
        <p>
          <strong>
            A digital chart basket modeled on how doctors actually work.
          </strong>
        </p>
        <p>
          The solution reorganized the left-hand encounter panel from a single
          flat list into distinct sections that match the natural lifecycle of a
          patient encounter:
        </p>
        <p>
          <strong>Active Encounters</strong> &ndash; patients currently in
          conversation, with a count displayed. Each patient card now shows
          &ldquo;Sent at [time]&rdquo; instead of the old plan/pronouns/age
          info, giving providers the temporal context they actually need when
          triaging.
        </p>
        <p>
          <strong>Incomplete Charts</strong> &ndash; the digital chart basket.
          Encounters that are clinically complete but need progress notes.
          Providers move patients here and come back on their own schedule.
        </p>
        <p>
          <strong>Grabber handles</strong> for manual reordering &ndash; every
          provider had their own distinct workflow for prioritizing patients, so
          rather than imposing an automatic sort, I gave them full control.
        </p>
        <p>
          <strong>Pulsing red indicators</strong> on patients waiting 60+
          seconds for a response, so providers could spot who needed attention at
          a glance.
        </p>
        <p>
          <strong>Color-coded profile strokes</strong> &ndash; green for active
          encounters, yellow for incomplete charts. Designed for peripheral
          vision: a provider glancing between the chat and their panel could
          instantly register a patient&apos;s status without reading text.
        </p>
        <p>
          The critical design boundary was separating &ldquo;clinically
          done&rdquo; from &ldquo;administratively done.&rdquo; When a provider
          moves a patient to Incomplete Charts, the encounter ends for the
          patient &ndash; they receive their satisfaction survey immediately. But
          the provider retains access to finish their notes on their own
          schedule.
        </p>

        <CaseStudyImage
          src="/work/cirrusmd/after.png"
          alt="After: Encounter panel with Active Encounters and Incomplete Charts sections"
          caption="After: The encounter panel reorganized into &lsquo;Active Encounters&rsquo; and &lsquo;Incomplete Charts&rsquo; with counts, expand/collapse chevrons, grabber handles, color-coded profile strokes, and pulsing red indicators for patients waiting 60+ seconds."
        />

        <div className="cs-two-col-images">
          <CaseStudyImage
            src="/work/cirrusmd/after.png"
            alt="Add to Incomplete Charts button at the top of the progress note panel"
            caption="The &lsquo;Add to Incomplete Charts&rsquo; button placed at the top of the progress note panel &ndash; prominent by design, because 70% of providers wanted to hit it without thinking"
          />
          <CaseStudyImage
            src="/work/cirrusmd/after-shift.png"
            alt="End-of-shift alert showing shift end time and incomplete encounter warning"
            caption="End-of-shift alert showing shift end time, total duration, and a warning for incomplete encounters"
          />
        </div>
      </CaseStudySection>

      {/* ── Outcome (dark section) ── */}
      <div className="cs-dark">
        <CaseStudySection title="Outcome">
          <p>
            <strong>
              Providers could finally practice the way they practice in person.
            </strong>
          </p>
          <p>
            Incomplete Charts shipped and saw immediate adoption. Providers no
            longer had to fight the platform&apos;s workflow to do their job.
            They could see a patient, move the chart to Incomplete, and bring in
            the next person &ndash; just like they&apos;d always done with
            physical charts on their desk.
          </p>
          <CaseStudyMetrics
            metrics={[
              { value: "70s \u2192 50s", label: "Patient onboarding time" },
              { value: "80%", label: "Provider adoption rate" },
              { value: "25+", label: "Simultaneous encounters supported" },
            ]}
          />
        </CaseStudySection>
      </div>

      {/* ── Reflection ── */}
      <CaseStudySection title="Reflection">
        <p>
          <strong>
            The most important design decision was not designing a better notes
            panel.
          </strong>
        </p>
        <p>
          This project taught me something I think about on every project since:
          the stated problem is rarely the actual problem. We went in assuming
          the progress notes UI needed to be more efficient. If I&apos;d just
          redesigned the notes panel, we would have shipped a marginally better
          form and called it done.
        </p>
        <p>
          Instead, the workshops and mock sessions revealed that the core issue
          was about workflow &ndash; the platform was imposing a sequence that
          didn&apos;t exist in the real world. The providers didn&apos;t need a
          faster way to write notes. They needed the ability to not write notes
          yet and keep working.
        </p>
        <p>
          The solution came from their language, their metaphors, their daily
          habits. I just gave it a digital shape.
        </p>
      </CaseStudySection>
    </div>
  );
}
