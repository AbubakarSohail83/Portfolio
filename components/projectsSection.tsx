"use client";

import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaGlobe } from "react-icons/fa";
import { MoveToNewSection } from "@/widgets/moveToNewSection";
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
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--projects-bg-start)] to-[var(--projects-bg-end)]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center text-[var(--projects-heading-text)]">
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--projects-subheading-badge-bg)] text-[var(--projects-subheading-badge-text)] font-medium text-sm mb-4">
            Portfolio
          </span>
          <br />
          My Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--projects-card-bg)] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-[var(--projects-card-top-bg)] p-6">
                <h3 className="text-2xl font-bold text-[var(--projects-card-title)]">
                  {project.title}
                </h3>
                <p className="text-[var(--projects-card-type)] mt-2 italic">
                  {project.type}
                </p>
              </div>

              <div className="p-6">
                <p className="text-[var(--projects-card-text)] font-medium mb-4">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-[var(--projects-card-title)] font-semibold mb-2">
                    Key Contributions:
                  </h4>
                  <ul className="list-disc pl-5 text-[var(--projects-card-text)] space-y-1">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[var(--projects-chip-bg)] text-[var(--projects-chip-text)] text-sm rounded-full"
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
                    className="inline-flex items-center text-[var(--projects-link)] hover:text-[var(--projects-link-hover)] transition-colors"
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
            className="p-2 rounded-full bg-[var(--projects-pagination-bg)] text-[var(--projects-pagination-text)] hover:bg-[var(--projects-pagination-active-bg)] hover:text-[var(--projects-pagination-active-text)] transition-colors"
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
                  ? "bg-[var(--projects-pagination-active-bg)] text-[var(--projects-pagination-active-text)]"
                  : "bg-[var(--projects-pagination-bg)] text-[var(--projects-pagination-text)] hover:bg-[var(--projects-pagination-active-bg)] hover:text-[var(--projects-pagination-active-text)]"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={nextPage}
            className="p-2 rounded-full bg-[var(--projects-pagination-bg)] text-[var(--projects-pagination-text)] hover:bg-[var(--projects-pagination-active-bg)] hover:text-[var(--projects-pagination-active-text)] transition-colors"
            aria-label="Next page"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <MoveToNewSection />
    </section>
  );
};

export default ProjectsSection;
