export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  team: string;
  platform?: string;
  heroImage: string;
  heroImageAlt: string;
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  fijord: {
    slug: "fijord",
    title: "Fijord: From Meeting Chaos to Shipped Tickets",
    subtitle:
      "Designing an AI-powered product management tool that transforms discovery calls into evidence-backed work items.",
    role: "Product Designer & Design Engineer",
    timeline: "February 2026",
    team: "Solo",
    heroImage: "/work/fijord/img-01-scope.png",
    heroImageAlt:
      "Fijord scope view showing evidence, problems, and tickets",
  },
  publix: {
    slug: "publix",
    title: "Redesigning prescription refills for 2M+ users",
    subtitle:
      "Taking the Publix Pharmacy app from 2.4 to 4.9 stars by rebuilding the entire refill experience.",
    role: "Solo Product Designer",
    timeline: "2024",
    team: "Solo",
    platform: "iOS & Android",
    heroImage: "/work/publix/screen-home.jpg",
    heroImageAlt: "Publix Pharmacy redesigned home screen",
  },
  cirrusmd: {
    slug: "cirrusmd",
    title: "The Digital Stacking Method",
    subtitle:
      "Bringing real-world medical workflows into async telemedicine – so providers could practice digitally the way they practice in person.",
    role: "Senior Product Designer (Solo)",
    timeline: "2023",
    team: "Solo",
    platform: "Web app (Provider-facing)",
    heroImage: "/work/cirrusmd/after.png",
    heroImageAlt:
      "CirrusMD provider platform with Active Encounters and Incomplete Charts sections",
  },
};
