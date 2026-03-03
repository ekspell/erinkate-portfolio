export interface Project {
  title: string;
  role: string;
  year: string;
  description: string;
  tags: string[];
  metric: { value: string; label: string } | null;
  url: string;
  num: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Publix Pharmacy",
    role: "Solo Product Designer",
    year: "2024",
    description:
      "Redesigning the prescription refill flow for 2M+ Publix Pharmacy app users. The existing flow had tiny touch targets, a disabled submit button with no explanation, and no clear step sequence — users were abandoning refills and calling pharmacists instead. I rebuilt the entire flow, fixing step sequencing, touch targets, and the pharmacy location picker.",
    tags: ["Mobile", "UX Research", "iOS", "Android"],
    metric: { value: "2.6 → 4.9", label: "App Store rating" },
    url: "https://ekspell.github.io/publix-case-study/",
    num: "01",
  },
  {
    title: "Fijord",
    role: "Design & Engineering",
    year: "2026",
    description:
      'Designing and building an AI-powered product discovery tool that transforms meeting transcripts into evidence-backed tickets. Every ticket maintains a traceable link from user quote to problem to Jira — so when engineering asks "why are we building this?", the PM can point to the source. Built in under two weeks with Next.js and React.',
    tags: ["Next.js", "React", "TypeScript", "AI"],
    metric: { value: "14s", label: "transcript → tickets" },
    url: "https://ekspell.github.io/fijord-case-study/",
    num: "02",
  },
  {
    title: "CirrusMD Chart Basket",
    role: "Solo Product Designer",
    year: "2023",
    description:
      'Bringing real-world medical workflows into async telemedicine. Providers were juggling multiple patient charts with no system to manage the queue — leading to cognitive overload and slow onboarding. I designed a "chart basket" feature modeled on the physical stacking method doctors already use, reducing patient onboarding time by nearly 30%.',
    tags: ["Telehealth", "UX Research", "Provider Tools", "B2B"],
    metric: { value: "70s → 50s", label: "patient onboarding" },
    url: "#",
    num: "03",
  },
];

export const CLIENTS = [
  "Johnson & Johnson",
  "Publix",
  "Verizon",
  "CirrusMD",
  "Panasonic",
  "DaVita",
  "Budget",
];

export const LINKS = [
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/erin-kate-spellman-ba3225198",
  },
  { label: "GitHub", url: "https://github.com/ekspell" },
  { label: "Fijord", url: "https://fijord.app" },
  { label: "Email", url: "mailto:helloerinkate@gmail.com" },
];
