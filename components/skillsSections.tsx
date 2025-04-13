"use client";

import { MoveToNewSection } from "@/widgets/moveToNewSection";
import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiKubernetes,
  SiRedis,
  SiMysql,
  SiRubyonrails,
  SiBootstrap,
  SiJquery,
  SiRedux,
  SiJest,
  SiCypress,
  SiGithubactions,
  SiDatadog,
  SiSqlite,
} from "react-icons/si";
import { TbBrandRust } from "react-icons/tb";

const SkillsSection = () => {
  type Skill = {
    name: string;
    icon: React.ReactNode;
  };

  type Skills = {
    languages: Skill[];
    database: Skill[];
    devops: Skill[];
    testing: Skill[];
  };

  type Category = keyof Skills;

  const [activeCategory, setActiveCategory] = useState<Category>('languages'); 
  
  const categories = [
    { id: "languages", label: "Languages & Frameworks" },
    { id: "database", label: "Database" },
    { id: "devops", label: "DevOps & Cloud" },
    { id: "testing", label: "Testing & QA" },
  ];

  const isValidCategory = (categoryId: string): categoryId is keyof Skills => {
    return ['languages', 'database', 'devops', 'testing'].includes(categoryId);
  };

  const skills: Skills = {
    languages: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript size={48} /> },
      { name: "TypeScript", icon: <SiTypescript size={48} /> },
      { name: "Node.js", icon: <FaNodeJs size={48} /> },
      { name: "Express.js", icon: <SiExpress size={48} /> },
      { name: "Next.js", icon: <SiNextdotjs size={48} /> },
      { name: "React.js", icon: <FaReact size={48} /> },
      { name: "GraphQL", icon: <SiGraphql size={48} /> },
      { name: "RESTful", icon: <FaDatabase size={48} /> },
      { name: "Redis", icon: <SiRedis size={48} /> },
      { name: "Ruby on Rails", icon: <SiRubyonrails size={48} /> },
      { name: "Tailwind", icon: <SiTailwindcss size={48} /> },
      { name: "Bootstrap", icon: <SiBootstrap size={48} /> },
      { name: "Redux", icon: <SiRedux size={48} /> },
      { name: "jQuery", icon: <SiJquery size={48} /> },
      { name: "HTML5", icon: <FaHtml5 size={48} /> },
      { name: "CSS3", icon: <FaCss3Alt size={48} /> },
    ],
    database: [
      { name: "MongoDB", icon: <SiMongodb size={48} /> },
      { name: "MySQL", icon: <SiMysql size={48} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={48} /> },
      { name: "SQLite", icon: <SiSqlite size={48} /> },
    ],
    devops: [
      { name: "CI/CD", icon: <SiGithubactions size={48} /> },
      { name: "Docker", icon: <FaDocker size={48} /> },
      { name: "Kubernetes", icon: <SiKubernetes size={48} /> },
      { name: "Datadog", icon: <SiDatadog size={48} /> },
      { name: "AWS", icon: <FaAws size={48} /> }
    ],
    testing: [
      { name: "Rspec", icon: <TbBrandRust size={48} /> },
      { name: "Cypress", icon: <SiCypress size={48} /> },
      { name: "Jest", icon: <SiJest size={48} /> },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--skills-bg-start)] to-[var(--skills-bg-end)] min-h-screen min-w-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 text-[var(--skills-heading-text)]">
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--skills-badge-bg)] text-[var(--skills-badge-text)] font-medium text-sm mb-4">
            Expertise
          </span>
          <br />
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center mb-12 gap-3 mt-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                if (isValidCategory(category.id)) {
                  setActiveCategory(category.id);
                } else {
                  console.error("Invalid category:", category.id);
                }
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[var(--accent)] text-white shadow-[var(--skills-shadow-light)] dark:shadow-[var(--skills-shadow-dark)] transform scale-105"
                  : "bg-[var(--skills-btn-bg)] text-[var(--skills-btn-text)] hover:bg-[var(--skills-btn-hover)]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {skills[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-[var(--skills-card-bg)] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-[var(--accent)] mb-4">{skill.icon}</div>
              <h3 className="font-medium text-lg text-center text-[var(--skills-text)]">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        <MoveToNewSection />
      </div>
    </section>
  );
};

export default SkillsSection;
