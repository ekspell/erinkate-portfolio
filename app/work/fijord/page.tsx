import type { Metadata } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";
import {
  CaseStudyHero,
  CaseStudySection,
  CaseStudyImage,
  CaseStudyMetrics,
  CaseStudyQuote,
  CaseStudyComparison,
  CaseStudyProcessFlow,
} from "@/components/case-study";

const study = CASE_STUDIES.fijord;

export const metadata: Metadata = {
  title: "Fijord – Case Study | Erin Kate",
  description: study.subtitle,
  openGraph: {
    title: "Fijord – Case Study | Erin Kate",
    description: study.subtitle,
    url: "https://erinkate.design/work/fijord",
    type: "article",
  },
};

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Process a Transcript",
    description:
      "Users paste a transcript or connect Fireflies.ai to import directly. The input is intentionally simple: one text area, one button.",
    image: "/work/fijord/img-06-process.png",
    imageAlt: "Fijord transcript input interface",
  },
  {
    num: "02",
    title: "Evidence, Problems, and Tickets",
    description:
      "AI processes the transcript in 14 seconds and extracts 12 quotes, 3 problems, and 19 suggested tickets. The three-column layout lets users see the full chain from evidence to action.",
    image: "/work/fijord/img-01-scope.png",
    imageAlt: "Three-column layout showing quotes, problems, and tickets",
  },
  {
    num: "03",
    title: "Trace Back to Source",
    description:
      "Click any quote to open the transcript drawer with the highlighted context. The transcript is accessible when needed for verification, but doesn\u2019t dominate the interface.",
    image: "/work/fijord/img-02-transcript.png",
    imageAlt: "Transcript drawer with highlighted quote",
  },
  {
    num: "04",
    title: "Select and Stage",
    description:
      "Users explicitly select which tickets to keep. This intentional friction ensures PMs review AI suggestions rather than blindly exporting everything.",
    image: "/work/fijord/img-03-select.png",
    imageAlt: "Ticket selection with checkboxes",
  },
  {
    num: "05",
    title: "Organize Before Export",
    description:
      "A simple kanban staging area for prioritization and editing before exporting to Linear or Jira.",
    image: "/work/fijord/img-04-staging.png",
    imageAlt: "Staging kanban board",
  },
  {
    num: "06",
    title: "Full Evidence Trail",
    description:
      "Each exported ticket preserves its lineage: problem statement, supporting quotes, acceptance criteria, and a shareable backlink to Fijord. When engineering asks \u201Cwhy are we building this?\u201D, the PM can point to the source.",
    image: "/work/fijord/img-05-ticket.png",
    imageAlt: "Ticket detail with problem statement and quotes",
  },
];

export default function FijordPage() {
  return (
    <div className="cs-page">
      <CaseStudyHero study={study}>
        <a
          href="https://fijord.app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ marginBottom: 32 }}
        >
          Explore the live product ↗
        </a>
      </CaseStudyHero>

      <CaseStudySection title="The Problem">
        <CaseStudyQuote
          quote={"\u201CWhen I wasn\u2019t in that meeting, I didn\u2019t have full context on why we\u2019re even doing this.\u201D"}
          attribution="Product Manager, Amazon"
        />
        <CaseStudyMetrics
          metrics={[
            { value: "6", label: "PM interviews" },
            { value: "14s", label: "transcript \u2192 tickets" },
            { value: "12\u21923", label: "quotes \u2192 problems" },
          ]}
        />
        <p>
          Product managers spend hours after every user interview doing tedious
          work: re-watching recordings, copying quotes into documents,
          synthesizing findings, and writing tickets manually. The real cost is
          that the evidence trail disappears. By the time a ticket reaches
          engineering, the original user quote is gone.
        </p>
      </CaseStudySection>

      <CaseStudySection title="The Solution">
        <p>
          Fijord processes meeting transcripts and extracts problems backed by
          evidence, then generates tickets that can be exported directly to
          Linear or Jira. Every ticket maintains a link back to its source
          quotes.
        </p>
        <CaseStudyProcessFlow steps={PROCESS_STEPS} />
      </CaseStudySection>

      <CaseStudySection title="Design Process">
        <p>
          Early versions showed tickets first. But user testing revealed that PMs
          didn&apos;t trust AI-generated tickets without seeing the source. By
          leading with evidence — the actual user quotes — users can verify the
          AI&apos;s reasoning before accepting its suggestions.
        </p>
        <p>
          The three-column layout mirrors the thinking process:{" "}
          <strong>What did users say?</strong> →{" "}
          <strong>What problems does that reveal?</strong> →{" "}
          <strong>What should we build?</strong>
        </p>
        <CaseStudyImage
          src="/work/fijord/img-01-scope.png"
          alt="Evidence-first layout showing quotes, problems, and tickets"
          caption="The evidence-first layout: quotes → problems → tickets"
        />
      </CaseStudySection>

      <CaseStudySection title="Outcomes">
        <p>
          <strong>Designed &amp; in development.</strong> Full
          transcript-to-tickets flow, Linear/Jira integrations, backlinks, and
          Signals system.
        </p>
        <CaseStudyQuote
          quote={"\u201CThat full lineage from messy call data to the ticket, that\u2019s what speaks to me.\u201D"}
          attribution="Amazon PM"
        />
        <div className="cs-learnings">
          <div className="cs-learning">
            <h4 className="cs-learning-title">Evidence before action</h4>
            <p className="cs-learning-desc">
              Users don&apos;t trust AI outputs without seeing the source. Show
              the quotes first.
            </p>
          </div>
          <div className="cs-learning">
            <h4 className="cs-learning-title">Backlinks are the moat</h4>
            <p className="cs-learning-desc">
              Anyone can extract text from a transcript. Preserving the evidence
              trail is what makes this valuable long-term.
            </p>
          </div>
          <div className="cs-learning">
            <h4 className="cs-learning-title">Design engineer velocity</h4>
            <p className="cs-learning-desc">
              Being able to implement my own designs cut iteration cycles from
              days to hours.
            </p>
          </div>
        </div>
      </CaseStudySection>
    </div>
  );
}
