"use client";

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
  SiMysql,
  SiRubyonrails,
  SiBootstrap,
  SiJquery,
  SiRedux,
  SiJest,
  SiGithubactions,
  SiDatadog,
  SiSqlite,
  SiPython,
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
    { id: "languages", label: "Languages & Frameworks", icon: "🚀" },
    { id: "database", label: "Database", icon: "🗄️" },
    { id: "devops", label: "DevOps & Cloud", icon: "☁️" },
    { id: "testing", label: "Testing & QA", icon: "🧪" },
  ];

  const isValidCategory = (categoryId: string): categoryId is keyof Skills => {
    return ['languages', 'database', 'devops', 'testing'].includes(categoryId);
  };

  const skills: Skills = {
    languages: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript size={48} /> },
      { name: "TypeScript", icon: <SiTypescript size={48} /> },
      { name: "React.js", icon: <FaReact size={48} /> },
      { name: "Next.js", icon: <SiNextdotjs size={48} /> },
      { name: "Node.js", icon: <FaNodeJs size={48} /> },
      { name: "Express.js", icon: <SiExpress size={48} /> },
      { name: "Ruby on Rails", icon: <SiRubyonrails size={48} /> },
      { name: "Python", icon: <SiPython size={48} /> },
      { name: "GraphQL", icon: <SiGraphql size={48} /> },
      { name: "Redux", icon: <SiRedux size={48} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={48} /> },
      { name: "Bootstrap", icon: <SiBootstrap size={48} /> },
      { name: "HTML5", icon: <FaHtml5 size={48} /> },
      { name: "CSS3", icon: <FaCss3Alt size={48} /> },
      { name: "jQuery", icon: <SiJquery size={48} /> },
      { name: "RESTful APIs", icon: <FaDatabase size={48} /> },
    ],
    database: [
      { name: "MongoDB", icon: <SiMongodb size={48} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={48} /> },
      { name: "MySQL", icon: <SiMysql size={48} /> },
      { name: "SQLite", icon: <SiSqlite size={48} /> },
    ],
    devops: [
      { name: "AWS", icon: <FaAws size={48} /> },
      { name: "Docker", icon: <FaDocker size={48} /> },
      { name: "Kubernetes", icon: <SiKubernetes size={48} /> },
      { name: "CI/CD", icon: <SiGithubactions size={48} /> },
      { name: "Datadog", icon: <SiDatadog size={48} /> }
    ],
    testing: [
      { name: "Jest", icon: <SiJest size={48} /> },
      { name: "RSpec", icon: <TbBrandRust size={48} /> }
    ],
  };

  return (
    <section className="py-16 sm:py-20 min-h-screen relative overflow-hidden">
      {/* Modern gradient background */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--skills-bg)' }}
      />
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full filter blur-3xl opacity-20 animate-float"
           style={{ background: 'linear-gradient(45deg, #4facfe, #00f2fe)' }}></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full filter blur-3xl opacity-20 animate-float"
           style={{ background: 'linear-gradient(45deg, #43e97b, #38f9d7)', animationDelay: '3s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header - mobile responsive */}
        <div className="text-center mb-12 sm:mb-16 px-2">
          <div
            className="inline-flex items-center px-6 py-3 rounded-full mb-8 glass"
            style={{ 
              background: 'var(--skills-badge-bg)',
              border: '1px solid var(--skills-badge-border)',
              color: 'var(--skills-badge-text)'
            }}
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
            Expertise
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
              style={{ color: 'var(--skills-heading-text)' }}>
            My <span className="bg-gradient-to-r from-neutral-600 to-neutral-800 bg-clip-text text-transparent">Skills</span>
          </h2>

          <p className="text-sm sm:text-base max-w-2xl mx-auto opacity-90 px-2"
             style={{ color: 'var(--skills-heading-text)' }}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Enhanced category buttons - mobile responsive */}
        <div className="flex flex-wrap justify-center mb-12 sm:mb-16 gap-3 sm:gap-4 px-2">
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
              className={`group px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 btn-modern text-sm sm:text-base ${
                activeCategory === category.id
                  ? "shadow-modern-lg transform scale-105"
                  : "hover:scale-105"
              }`}
              style={{
                background: activeCategory === category.id 
                  ? 'var(--skills-btn-active)' 
                  : 'var(--skills-btn-bg)',
                color: activeCategory === category.id 
                  ? 'var(--skills-btn-active-text)' 
                  : 'var(--skills-btn-text)',
                border: '1px solid var(--skills-card-border)'
              }}
            >
              <span className="flex items-center">
                <span className="mr-1 sm:mr-2 text-base sm:text-lg">{category.icon}</span>
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.label.split(' ')[0]}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Enhanced skills grid - mobile responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {skills[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="group glass rounded-3xl p-4 sm:p-6 shadow-modern hover:shadow-modern-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              style={{ 
                background: 'var(--skills-card-bg)',
                border: '1px solid var(--skills-card-border)'
              }}
            >
              {/* Skill icon with glow effect - mobile responsive */}
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <div className="text-blue-500 group-hover:text-purple-500 transition-colors duration-300 [&>svg]:w-8 [&>svg]:h-8 sm:[&>svg]:w-12 sm:[&>svg]:h-12">
                    {skill.icon}
                  </div>
                </div>
              </div>

              {/* Skill name - mobile responsive */}
              <h3 className="font-semibold text-xs sm:text-sm lg:text-base text-center"
                  style={{ color: 'var(--skills-text)' }}>
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Stats section - mobile responsive */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-2">
          {[
            { number: "16+", label: "Technologies", icon: "⚡" },
            { number: "3+", label: "Years Experience", icon: "🚀" },
            { number: "7+", label: "Major Projects", icon: "💼" },
            { number: "100%", label: "Passion", icon: "❤️" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 glass rounded-2xl shadow-modern hover:shadow-modern-lg transition-all duration-300 animate-float"
              style={{ 
                background: 'var(--skills-card-bg)',
                border: '1px solid var(--skills-card-border)',
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{stat.icon}</div>
              <div className="text-lg sm:text-2xl font-bold mb-1 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm opacity-70" style={{ color: 'var(--skills-text)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
