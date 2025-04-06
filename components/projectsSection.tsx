import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaGlobe } from 'react-icons/fa';

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 2;
  
  const projects = [
    {
      title: "TrueCar",
      description: "A multi-tenant platform for new and used car buyers delivering local vehicle pricing from a network of microservices.",
      details: [
        "Developed using React, Next.js (SSR), Ruby on Rails, and GraphQL.",
        "Designed and implemented GraphQL endpoints with resolver pattern for efficient data querying.",
        "Optimized backend services for high traffic and data-intensive operations."
      ],
      technologies: ["React", "Next.js", "Ruby on Rails", "GraphQL"],
      link: "https://truecar.com",
      type: "Client Project"
    },
    {
    title: "MapleHR",
    description: "A comprehensive HR management platform handling people management, organizational hierarchies, claims, tickets, and leave requests.",
    details: [
        "Developed using Ruby on Rails and React.",
        "Applied microservice communication patterns to optimize high-volume request handling.",
        "Achieved service decoupling for better maintainability and scalability."
    ],
    technologies: ["Ruby on Rails", "React", "Microservices", "Redis"],
    link: "https://maplehr.io",
    type: "Client Project"
    },
    {
      title: "Recruitment Marketing",
      description: "A scalable marketplace platform for recruitment software for robust data management and seamless client-server interaction.",
      details: [
        "Developed using Node.js, Express.js, React with TypeScript, and PostgreSQL.",
        "Integrated CRMs like HubSpot and Beehiiv to streamline marketing processes.",
        "Enhanced data synchronization and improved campaign management systems."
      ],
      technologies: ["Node.js", "Express.js", "React", "TypeScript", "PostgreSQL", "HubSpot"],
      type: "Client Project"
    },
    {
        title: "LetsRemotify",
        description: "A platform connecting businesses with pre-vetted, US-based tech talent across 100+ technologies.",
        details: [
          "Built using Ruby on Rails for core backend services.",
          "Implemented the MERN stack (MongoDB, Express, React, Node.js) for microservices and frontend modules.",
          "Created a scalable talent matching algorithm to optimize hiring processes."
        ],
        technologies: ["Ruby on Rails", "MongoDB", "Express", "React", "Node.js"],
        link: "https://letsremotify.com",
        type: "Client Project"
      },
      {
        title: "Dooz",
        description: "A middle eastern car marketplace connecting car buyers to the vendors and offer services like car inspection both via AI and in person",
        link: "https://dooz.com",
        details:[""],
        type: "Client Project",
        technologies: [".Net", "C#", "Angular", "Bootstrap", "MySql"]
      },
    {
      title: "Roboscout",
      description: "A research platform to search academic publications and identify relevant researchers.",
      details: [
        "Developed using Ruby on Rails, React, and TypeScript.",
        "Implemented backend methods and Sidekiq jobs with Redis and SQLite to handle search queries.",
        "Processed large datasets from the OpenAlex API with React Query for real-time updates."
      ],
      technologies: ["Ruby on Rails", "React", "TypeScript", "Redis", "SQLite", "React Query"],
      type: "Personal Project"
    },
    {
      title: "Connectly",
      description: "An in-house communication platform similar to Slack for real-time team collaboration.",
      details: [
        "Built the backend using Rails and React.",
        "Implemented ActionCable Channels enabling WebSocket-based communication.",
        "Designed for seamless team collaboration and information sharing."
      ],
      technologies: ["Ruby on Rails", "React", "ActionCable", "WebSockets"],
      type: "Personal Project"
    },
  ];
  
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentProjects = projects.slice(
    currentPage * projectsPerPage, 
    (currentPage + 1) * projectsPerPage
  );
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const goToPage = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <section className="min-h-screen min-w-screen bg-[#f0ece2] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#252422] mb-16 text-center">Some Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-[#ccc5b9] p-6">
                <h3 className="text-2xl font-bold text-[#252422]">{project.title}</h3>
                <p className="text-[#403d39] mt-2 italic">{project.type}</p>
              </div>
              
              <div className="p-6">
                <p className="text-[#403d39] font-medium mb-4">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-[#252422] font-semibold mb-2">Key Contributions:</h4>
                  <ul className="list-disc pl-5 text-[#403d39] space-y-1">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-[#e6e1d6] text-[#403d39] text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#eb5e28] hover:text-[#e63946] transition-colors"
                  >
                    <FaGlobe className="mr-1" /> Visit Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-center mt-12 space-x-2">
          <button 
            onClick={prevPage}
            className="p-2 rounded-full bg-[#ccc5b9] text-[#252422] hover:bg-[#eb5e28] hover:text-white transition-colors"
            aria-label="Previous page"
          >
            <FaArrowLeft />
          </button>
          
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${
                currentPage === index 
                  ? 'bg-[#eb5e28] text-white' 
                  : 'bg-[#ccc5b9] text-[#252422] hover:bg-[#eb5e28] hover:text-white'
              }`}
            >
              {index + 1}
            </button>
          ))}
          
          <button 
            onClick={nextPage}
            className="p-2 rounded-full bg-[#ccc5b9] text-[#252422] hover:bg-[#eb5e28] hover:text-white transition-colors"
            aria-label="Next page"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;