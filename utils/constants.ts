export const socialLinks = {
  linkedin: "https://linkedin.com/in/abubakar-sohail-090b0015a",
  github: "https://github.com/AbubakarSohail83",
  gmail: "mailto:abubakarsohail83@gmail.com",
};

export interface Project {
  title: string;
  description: string;
  impact: string;
  details: string[];
  technologies: string[];
  link?: string;
  type: "Client Project" | "Personal Project" | "Open Source";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "TrueCar",
    description:
      "A multi-tenant automotive marketplace platform delivering real-time pricing and inventory from local dealerships through a distributed microservices architecture.",
    impact: "Serving millions of car buyers with upfront, transparent pricing",
    details: [
      "Built frontend with React and Next.js (SSR) for optimal performance and SEO",
      "Designed GraphQL endpoints using resolver patterns for efficient data querying across microservices",
      "Optimized backend services to handle high traffic volumes across multiple tenants",
      "Implemented caching strategies to reduce database load and improve response times",
    ],
    technologies: ["React", "Next.js", "Ruby on Rails", "GraphQL", "PostgreSQL", "Redis"],
    link: "https://truecar.com",
    type: "Client Project",
    featured: true,
  },
  {
    title: "Talivity",
    description:
      "A scalable marketplace platform for recruitment software solutions with CRM integrations and advanced campaign management.",
    impact: "Unified recruitment tools ecosystem with seamless data synchronization",
    details: [
      "Developed using Node.js, Express.js, and React with TypeScript for type safety",
      "Integrated HubSpot and Beehiiv CRMs for enhanced marketing workflows",
      "Implemented data synchronization processes for real-time campaign updates",
      "Built flexible plugin architecture supporting various recruitment software tools",
    ],
    technologies: ["Node.js", "Express.js", "React", "TypeScript", "PostgreSQL", "HubSpot API", "Beehiiv"],
    link: "https://www.talivity.com",
    type: "Client Project",
    featured: true,
  },
  {
    title: "Employer Reputation Navigator",
    description:
      "An LLM-powered analytics service that processes unstructured data from multiple sources to generate actionable market insights for recruitment vendors.",
    impact: "Enabled real-time vendor reputation tracking across the recruitment marketplace",
    details: [
      "Designed and built an LLM-powered analytics service using FastAPI, deployed serverless on AWS Lambda for on-demand data processing",
      "Integrated OpenAI and Gemini APIs for sentiment analysis, theme extraction, summarization, and metric generation",
      "Processed unstructured data from Glassdoor, Indeed, HubSpot, and Zuora into normalized insights",
      "Architected data pipeline pushing processed insights to Snowflake for Google Looker Studio dashboards",
    ],
    technologies: ["FastAPI", "Python", "AWS Lambda", "OpenAI", "Gemini", "Snowflake", "Ruby on Rails", "PostgreSQL", "Looker Studio"],
    type: "Client Project",
    featured: true,
  },
  {
    title: "MapleHR",
    description:
      "A comprehensive multi-tenant HR management platform handling employee management, organizational hierarchies, claims, tickets, and leave requests.",
    impact: "Streamlined HR operations for enterprises with complex organizational structures",
    details: [
      "Architected microservice communication patterns for high-volume request handling",
      "Implemented service decoupling for improved maintainability and scalability",
      "Built robust role-based access control for multi-tenant data isolation",
      "Designed efficient database schemas for complex organizational hierarchies",
    ],
    technologies: ["Ruby on Rails", "React", "PostgreSQL", "Redis", "Microservices"],
    link: "https://maplehr.io",
    type: "Client Project",
    featured: true,
  },
  {
    title: "LetsRemotify",
    description:
      "A platform connecting businesses with pre-vetted, US-based tech talent using AI-driven matching across 100+ technologies.",
    impact: "Reduced hiring time through intelligent talent matching",
    details: [
      "Built core backend services with Ruby on Rails for reliability and rapid development",
      "Developed microservices using the MERN stack for specific feature domains",
      "Implemented AI-powered talent matching algorithm to improve hiring precision",
      "Designed scalable architecture supporting a global talent pool",
    ],
    technologies: ["Ruby on Rails", "MongoDB", "Express", "React", "Node.js", "AI/ML"],
    link: "https://letsremotify.com",
    type: "Client Project",
  },
  {
    title: "Dooz",
    description:
      "A Middle Eastern car marketplace with AI-powered and in-person vehicle inspections for trustworthy car buying experiences.",
    impact: "Brought transparency to the used car market through verified inspections",
    details: [
      "Built responsive frontend with Angular and Bootstrap for seamless UX",
      "Developed RESTful APIs with .NET Core for efficient backend operations",
      "Designed MySQL schemas for vehicle listings, inspections, and transactions",
      "Implemented hybrid inspection system combining AI assessments with manual reviews",
    ],
    technologies: [".NET Core", "C#", "Angular", "MySQL", "Bootstrap"],
    link: "https://dooz.com",
    type: "Client Project",
  },
  {
    title: "Roboscout",
    description:
      "A research platform for discovering academic publications and identifying relevant researchers across vast datasets.",
    impact: "Accelerated academic research discovery with intelligent search",
    details: [
      "Built backend with Ruby on Rails and background processing with Sidekiq",
      "Integrated OpenAlex API for processing large-scale academic datasets",
      "Implemented React Query for real-time data fetching and caching",
      "Designed intuitive search interface with advanced filtering capabilities",
    ],
    technologies: ["Ruby on Rails", "React", "TypeScript", "Redis", "SQLite", "OpenAlex API"],
    type: "Personal Project",
  },
  {
    title: "Connectly",
    description:
      "An in-house real-time communication platform for team collaboration, messaging, and information sharing.",
    impact: "Enhanced team productivity with instant, organized communication",
    details: [
      "Implemented WebSocket-based messaging using ActionCable for real-time updates",
      "Built notification system for mentions, replies, and channel activity",
      "Designed responsive UI optimized for both desktop and mobile devices",
      "Implemented file sharing and message threading for organized conversations",
    ],
    technologies: ["Ruby on Rails", "React", "ActionCable", "WebSockets", "PostgreSQL"],
    type: "Personal Project",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
