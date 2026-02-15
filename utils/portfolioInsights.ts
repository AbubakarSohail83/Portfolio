/** Creative portfolio ideas & senior dev standards — searchable in the globe panel */

export interface PortfolioInsight {
  id: string;
  title: string;
  category: "design" | "content" | "tech" | "ux" | "senior";
  body: string;
  tags: string[];
}

export const portfolioInsights: PortfolioInsight[] = [
  {
    id: "1",
    title: "Lead with outcomes, not tasks",
    category: "senior",
    body: "Describe impact (e.g. 'Reduced API latency by 30%') rather than duties. Senior portfolios show business and technical outcomes.",
    tags: ["senior", "outcomes", "impact", "metrics"],
  },
  {
    id: "2",
    title: "One clear narrative above the fold",
    category: "content",
    body: "Hero should state who you are, what you do, and one differentiator in under 10 seconds. Avoid long intros.",
    tags: ["hero", "narrative", "clarity", "above-the-fold"],
  },
  {
    id: "3",
    title: "System design & architecture thinking",
    category: "senior",
    body: "Include diagrams, tech choices, and trade-offs. Senior engineers are expected to show architectural judgment.",
    tags: ["architecture", "system-design", "diagrams", "trade-offs"],
  },
  {
    id: "4",
    title: "Accessibility and performance by default",
    category: "tech",
    body: "Semantic HTML, focus states, reduced motion, and Core Web Vitals signal production-grade front-end craft.",
    tags: ["a11y", "performance", "core-web-vitals", "semantic"],
  },
  {
    id: "5",
    title: "Restraint in animation",
    category: "design",
    body: "Use motion to guide attention and confirm state. Avoid decorative motion that doesn't serve clarity or feedback.",
    tags: ["animation", "motion", "restraint", "ux"],
  },
  {
    id: "6",
    title: "Proof over buzzwords",
    category: "content",
    body: "Link to live work, repos, or case studies. 'Built with X' is weak; 'Shipped Y using X' with evidence is strong.",
    tags: ["proof", "case-studies", "repos", "evidence"],
  },
  {
    id: "7",
    title: "Mobile-first and responsive",
    category: "ux",
    body: "Portfolios are often first opened on a phone. Ensure layout, touch targets, and typography scale work on small screens.",
    tags: ["responsive", "mobile", "touch", "typography"],
  },
  {
    id: "8",
    title: "Clear CTAs",
    category: "ux",
    body: "One primary action per section (e.g. 'View work', 'Get in touch'). 'Let\'s talk' or 'Start a conversation' reads more senior than 'Hire me'.",
    tags: ["cta", "conversion", "copy", "senior"],
  },
  {
    id: "9",
    title: "Dark/light and reduced motion",
    category: "design",
    body: "Respect system theme and prefers-reduced-motion. Shows attention to inclusive design and production habits.",
    tags: ["dark-mode", "reduced-motion", "inclusive", "theme"],
  },
  {
    id: "10",
    title: "SEO and discoverability",
    category: "tech",
    body: "Structured data, meta tags, and semantic headings help recruiters and hiring managers find you via search.",
    tags: ["seo", "meta", "schema", "discoverability"],
  },
];

export function searchInsights(query: string): PortfolioInsight[] {
  const q = query.trim().toLowerCase();
  if (!q) return portfolioInsights;
  return portfolioInsights.filter(
    (i) =>
      i.title.toLowerCase().includes(q) ||
      i.body.toLowerCase().includes(q) ||
      i.tags.some((t) => t.toLowerCase().includes(q)) ||
      i.category.toLowerCase().includes(q)
  );
}
