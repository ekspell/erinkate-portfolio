import type { Metadata } from "next";
import Image from "next/image";
import { CASE_STUDIES } from "@/lib/case-studies";
import {
  CaseStudyHero,
  CaseStudySection,
  CaseStudyImage,
  CaseStudyMetrics,
  CaseStudyReviews,
} from "@/components/case-study";

const study = CASE_STUDIES.publix;

export const metadata: Metadata = {
  title: "Publix Pharmacy Redesign – Case Study | Erin Kate",
  description: study.subtitle,
  openGraph: {
    title: "Publix Pharmacy Redesign – Case Study | Erin Kate",
    description: study.subtitle,
    url: "https://erinkate.design/work/publix",
    type: "article",
  },
};

const SCREENS = [
  { src: "/work/publix/screen-home.jpg", alt: "Home" },
  { src: "/work/publix/screen-refill.jpg", alt: "Refill options" },
  {
    src: "/work/publix/screen-prescriptions.jpg",
    alt: "Choose prescriptions",
  },
  { src: "/work/publix/screen-location.jpg", alt: "Choose location" },
  { src: "/work/publix/screen-pharmacy.jpg", alt: "Pharmacy details" },
  { src: "/work/publix/screen-pickup-date.jpg", alt: "Pickup date" },
  {
    src: "/work/publix/screen-pickup-details.jpg",
    alt: "Pickup details",
  },
  { src: "/work/publix/screen-review.jpg", alt: "Review and confirm" },
  { src: "/work/publix/screen-success.jpg", alt: "Success" },
];

const REVIEWS = [
  {
    stars: 5,
    title: "Awesome job!",
    text: "Finally, the pharmacy app we\u2019ve all been waiting for! I kept saying, \u2018You need to change developers!\u2019 And guess what? You did it! Now it\u2019s smooth, reliable, and <strong>makes getting my meds a breeze</strong>.",
    author: "Steven J. McAvoy",
    date: "Oct 2024",
  },
  {
    stars: 5,
    title: "A Game-Changer!",
    text: "The Publix pharmacy app has truly made managing my prescriptions <strong>so much easier and hassle-free</strong>. From quick refills to tracking my medication history, the app simplifies everything.",
    author: "theAbeCaster",
    date: "Nov 2024",
  },
  {
    stars: 5,
    title: "Best Pharmacy App Out There",
    text: "The <strong>new design upgrade is a fantastic improvement</strong>. It\u2019s perfect for staying on top of my medications and keeping everything organized.",
    author: "motom11",
    date: "Oct 2024",
  },
];

export default function PublixPage() {
  return (
    <div className="cs-page">
      <CaseStudyHero study={study} video="/work/publix/refill-demo.mp4" imageClassName="cs-hero-image-mobile" />

      <CaseStudySection title="The Problem">
        <p>
          Users were abandoning refills and calling the pharmacy instead. The
          prescription refill flow had a low completion rate and high call-in
          rate to pharmacists. App store reviews reflected deep frustration —
          users couldn&apos;t figure out how to refill their medications.
        </p>
        <p>
          For a user base that skews older (40+), the existing UX was failing at
          the most basic task the app was supposed to solve.
        </p>

        <div className="cs-problem-cards">
          <div className="cs-problem-card">
            <h4 className="cs-problem-card-title">Unclear Step Sequence</h4>
            <p className="cs-problem-card-desc">
              Users had to complete steps A, B, C sequentially, but the UI
              didn&apos;t communicate this. Many hit disabled buttons and
              bounced.
            </p>
          </div>
          <div className="cs-problem-card">
            <h4 className="cs-problem-card-title">
              Frustrating Touch Targets
            </h4>
            <p className="cs-problem-card-desc">
              Tiny checkboxes that immediately removed prescriptions. For users
              with reduced dexterity, accidental deletions were common.
            </p>
          </div>
          <div className="cs-problem-card">
            <h4 className="cs-problem-card-title">No Visual Context</h4>
            <p className="cs-problem-card-desc">
              The location picker was a flat text list — no map, no hours, no
              way to identify your regular pharmacy.
            </p>
          </div>
          <div className="cs-problem-card">
            <h4 className="cs-problem-card-title">Disabled Buttons</h4>
            <p className="cs-problem-card-desc">
              The submit button stayed disabled with no explanation. Users stared
              at a grayed-out button with no path forward.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Before">
        <p>
          A cramped, confusing flow that packed everything onto disconnected
          screens with no clear guidance.
        </p>
        <div className="cs-carousel-wrap">
          <span className="cs-carousel-arrow cs-carousel-arrow-left">‹</span>
          <div className="cs-screen-carousel">
            <Image
              src="/work/publix/before.jpg"
              alt="Original Publix Pharmacy refill flow"
              width={1920}
              height={480}
              style={{ height: 480, width: "auto" }}
            />
          </div>
          <span className="cs-carousel-arrow cs-carousel-arrow-right">›</span>
        </div>
        <p className="cs-image-caption">The original refill experience</p>
      </CaseStudySection>

      <CaseStudySection title="The Solution">
        <p>
          I broke the monolithic screen into a step-by-step flow. Each step has
          one job. The redesign prioritized effortless navigation, WCAG-compliant
          touch targets, and a collaborative process with engineering to
          understand backend constraints.
        </p>

        <div className="cs-carousel-wrap">
          <span className="cs-carousel-arrow cs-carousel-arrow-left">‹</span>
          <div className="cs-screen-carousel">
            {SCREENS.map((screen) => (
              <Image
                key={screen.alt}
                src={screen.src}
                alt={screen.alt}
                width={280}
                height={480}
              />
            ))}
          </div>
          <span className="cs-carousel-arrow cs-carousel-arrow-right">›</span>
        </div>
        <p className="cs-image-caption">The redesigned refill experience</p>
      </CaseStudySection>

      <CaseStudySection title="Results">
        <CaseStudyMetrics
          metrics={[
            { value: "2.4 → 4.9", label: "App Store rating" },
            { value: "4.9 ★", label: "23K+ ratings" },
            { value: "4.8 ★", label: "Google Play · 5.3K+ reviews" },
          ]}
        />
        <CaseStudyReviews reviews={REVIEWS} />
      </CaseStudySection>

      <CaseStudySection title="What I Learned">
        <div className="cs-learnings">
          <div className="cs-learning">
            <h4 className="cs-learning-title">Constraints breed creativity</h4>
            <p className="cs-learning-desc">
              Working within backend limitations forced smarter UX solutions. The
              date picker came from deep collaboration with engineering.
            </p>
          </div>
          <div className="cs-learning">
            <h4 className="cs-learning-title">App reviews are research</h4>
            <p className="cs-learning-desc">
              Without robust analytics, app store reviews became my primary
              signal for validating pain points and prioritizing fixes.
            </p>
          </div>
          <div className="cs-learning">
            <h4 className="cs-learning-title">
              Accessibility is the baseline
            </h4>
            <p className="cs-learning-desc">
              Designing for our 40+ demographic meant larger touch targets and
              clearer sequences — which benefited everyone.
            </p>
          </div>
        </div>
      </CaseStudySection>
    </div>
  );
}
