export const socialLinks = {
  linkedin: "https://linkedin.com/in/abubakar-sohail-090b0015a",
  github: "https://github.com/AbubakarSohail83",
  gmail: "mailto:abubakarsohail83@gmail.com",
};

export const projects = [
  {
    title: "TrueCar",
    description:
      "A multi-tenant platform for buying and selling cars, offering real-time pricing and inventory from local dealerships through a robust microservices architecture.",
    details: [
      "Built with React and Next.js (SSR) on the frontend, and Ruby on Rails with GraphQL on the backend.",
      "Implemented scalable GraphQL endpoints using resolver patterns for efficient data access.",
      "Optimized backend services to handle high traffic and complex data across multiple tenants.",
    ],
    technologies: ["React", "Next.js", "Ruby on Rails", "GraphQL"],
    link: "https://truecar.com",
    type: "Client Project",
  },
  {
    title: "MapleHR",
    description:
      "A comprehensive HR management platform that streamlines employee management, organizational structures, claims, tickets, and leave requests through an intuitive interface.",
    details: [
      "Built using Ruby on Rails for the backend and React for the frontend.",
      "Implemented microservice communication patterns to efficiently handle high-volume requests.",
      "Decoupled services for improved maintainability, scalability, and future growth.",
    ],
    technologies: ["Ruby on Rails", "React", "Microservices", "Redis"],
    link: "https://maplehr.io",
    type: "Client Project",
  },  
  {
    title: "LetsRemotify",
    description:
      "A platform connecting businesses with pre-vetted, US-based tech talent across 100+ technologies, using AI-driven matching to streamline the hiring process for top-tier developers.",
    details: [
      "Built with Ruby on Rails for core backend services.",
      "Leveraged the MERN stack (MongoDB, Express, React, Node.js) to create microservices and frontend modules.",
      "Developed an AI-powered talent matching algorithm to improve hiring efficiency and precision.",
      "Enabled a global talent pool, focusing on remote work opportunities for businesses and tech professionals alike.",
    ],
    technologies: ["Ruby on Rails", "MongoDB", "Express", "React", "Node.js", "AI"],
    link: "https://letsremotify.com",
    type: "Client Project",
  },  
  {
    title: "Dooz",
    description:
      "A Middle Eastern car marketplace connecting buyers to vendors, offering services like comprehensive car inspections, both AI-powered and in-person, for a trustworthy car-buying experience.",
    link: "https://dooz.com",
    details: [
      "Developed a responsive frontend using Angular and Bootstrap for a seamless user experience.",
      "Built RESTful APIs with .NET Core for efficient backend communication and data handling.",
      "Designed and optimized MySQL database schemas to support vehicle listings, inspections, and transactions.",
      "Implemented advanced vehicle inspection processes, combining AI-driven assessments with in-person evaluations to ensure vehicle quality.",
    ],
    technologies: [".NET", "C#", "Angular", "Bootstrap", "MySQL"],
    type: "Client Project",
  },  
  {
    title: "Roboscout",
    description:
      "A research platform designed to search academic publications and identify relevant researchers, streamlining the process of discovering academic insights.",
    details: [
      "Developed with Ruby on Rails for backend services, React, and TypeScript for the frontend.",
      "Implemented efficient backend methods and Sidekiq jobs with Redis and SQLite to manage large-scale search queries and tasks.",
      "Utilized the OpenAlex API to process vast datasets and integrated React Query for real-time data fetching and updates.",
      "Created an intuitive UI to display search results and researchers' information in an accessible format.",
    ],
    technologies: [
      "Ruby on Rails",
      "React",
      "TypeScript",
      "Redis",
      "SQLite",
      "React Query",
      "OpenAlex API"
    ],
    type: "Personal Project",
  },  
  {
    title: "Connectly",
    description:
      "An in-house communication platform similar to Slack, designed for real-time team collaboration, messaging, and information sharing.",
    details: [
      "Developed the backend using Ruby on Rails, with React for the frontend to provide an interactive user experience.",
      "Implemented WebSocket-based communication using ActionCable Channels for real-time messaging and notifications.",
      "Focused on seamless team collaboration, allowing users to send messages, share files, and stay updated in real-time.",
      "Optimized for both web and mobile responsiveness to enhance team productivity across devices.",
    ],
    technologies: ["Ruby on Rails", "React", "ActionCable", "WebSockets"],
    type: "Personal Project",
  },  
  {
    title: "Recruitment Marketing",
    description:
      "A scalable marketplace platform for recruitment software solutions, enabling robust data management and seamless client-server interactions to optimize recruitment processes.",
    details: [
      "Developed using Node.js, Express.js, React with TypeScript for the frontend, and PostgreSQL for data storage.",
      "Integrated CRM systems like HubSpot and Beehiiv to enhance marketing workflows and client engagement.",
      "Improved data synchronization processes and optimized campaign management systems for better efficiency and effectiveness.",
      "Focused on building a flexible platform that supports a wide range of recruitment software tools for various client needs.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "HubSpot",
      "Beehiiv"
    ],
    type: "Client Project",
  }  
];
