"use client";

import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaGlobe, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { projects } from "@/utils/constants";

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 2;

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

  const goToPage = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Modern gradient background */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--projects-bg)' }}
      />
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full filter blur-3xl opacity-20 animate-float"
           style={{ background: 'linear-gradient(45deg, #a8edea, #fed6e3)' }}></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full filter blur-3xl opacity-20 animate-float"
           style={{ background: 'linear-gradient(45deg, #ffecd2, #fcb69f)', animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center px-6 py-3 rounded-full mb-8 glass"
            style={{ 
              background: 'var(--projects-badge-bg)',
              border: '1px solid var(--projects-badge-border)',
              color: 'var(--projects-badge-text)'
            }}
          >
            <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
            Portfolio
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: 'var(--projects-heading-text)' }}>
            My <span className="bg-gradient-to-r from-neutral-600 to-neutral-800 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="text-base max-w-3xl mx-auto opacity-90"
             style={{ color: 'var(--projects-heading-text)' }}>
            A showcase of solutions I&apos;ve built, from concept to deployment
          </p>
        </div>

        {/* Enhanced projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-3xl overflow-hidden shadow-modern hover:shadow-modern-lg transition-all duration-500 transform hover:-translate-y-2"
              style={{ 
                background: 'var(--projects-card-bg)',
                border: '1px solid var(--projects-card-border)'
              }}
            >
              {/* Enhanced project header */}
              <div 
                className="p-8 relative overflow-hidden"
                style={{ background: 'var(--projects-card-top-bg)' }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full filter blur-2xl opacity-30"
                     style={{ background: 'rgba(255, 255, 255, 0.2)' }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2"
                          style={{ color: 'var(--projects-card-title)' }}>
                        {project.title}
                      </h3>
                      <div className="flex items-center">
                        <FaCode className="w-4 h-4 mr-2 opacity-80" 
                               style={{ color: 'var(--projects-card-type)' }} />
                        <p className="font-medium"
                           style={{ color: 'var(--projects-card-type)' }}>
                          {project.type}
                        </p>
                      </div>
                    </div>
                    
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass rounded-2xl hover:scale-110 transition-all duration-300 group"
                        style={{ color: 'var(--projects-card-title)' }}
                      >
                        <FaExternalLinkAlt className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Enhanced project content */}
              <div className="p-8">
                <p className="text-base font-medium mb-6 leading-relaxed"
                   style={{ color: 'var(--projects-card-text)' }}>
                  {project.description}
                </p>

                {/* Enhanced key contributions */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-4 flex items-center"
                      style={{ color: 'var(--projects-card-title)' }}>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                    Key Contributions
                  </h4>
                  <ul className="space-y-3">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="leading-relaxed" style={{ color: 'var(--projects-card-text)' }}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced technology stack */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-4 flex items-center"
                      style={{ color: 'var(--projects-card-title)' }}>
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 glass rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 animate-float"
                        style={{ 
                          background: 'var(--projects-chip-bg)',
                          color: 'var(--projects-chip-text)',
                          border: '1px solid var(--projects-chip-border)',
                          animationDelay: `${i * 0.1}s`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-2xl hover:from-teal-600 hover:to-green-600 transition-all shadow-modern hover:shadow-modern-lg font-semibold btn-modern"
                    >
                      <FaGlobe className="mr-2 group-hover:rotate-12 transition-transform" />
                      Visit Website
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced pagination */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={prevPage}
            className="group p-4 glass rounded-2xl transition-all hover:scale-110 btn-modern"
            style={{ 
              background: 'var(--projects-pagination-bg)',
              color: 'var(--projects-pagination-text)',
              border: '1px solid var(--projects-card-border)'
            }}
            aria-label="Previous page"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center font-semibold transition-all btn-modern ${
                  currentPage === index ? "shadow-modern-lg transform scale-110" : "hover:scale-105"
                }`}
                style={{
                  background: currentPage === index 
                    ? 'var(--projects-pagination-active-bg)' 
                    : 'var(--projects-pagination-bg)',
                  color: currentPage === index 
                    ? 'var(--projects-pagination-active-text)' 
                    : 'var(--projects-pagination-text)',
                  border: '1px solid var(--projects-card-border)'
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={nextPage}
            className="group p-4 glass rounded-2xl transition-all hover:scale-110 btn-modern"
            style={{ 
              background: 'var(--projects-pagination-bg)',
              color: 'var(--projects-pagination-text)',
              border: '1px solid var(--projects-card-border)'
            }}
            aria-label="Next page"
          >
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Project stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: projects.length.toString(), label: "Projects Completed", icon: "🚀" },
            { number: "7+", label: "Technologies Used", icon: "⚡" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" },
            { number: "3+", label: "Years Experience", icon: "🎯" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 glass rounded-2xl shadow-modern hover:shadow-modern-lg transition-all duration-300 animate-float"
              style={{ 
                background: 'var(--projects-card-bg)',
                border: '1px solid var(--projects-card-border)',
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm opacity-70" style={{ color: 'var(--projects-card-text)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
