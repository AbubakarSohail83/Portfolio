import { MoveToNewSection } from '@/widgets/moveToNewSection';
import React, { useState } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, 
  FaDocker, FaAws, FaDatabase, 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, 
  SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiKubernetes, SiRedis, SiMysql,
  SiRubyonrails, SiBootstrap, SiJquery, SiRedux,
  SiJest, SiCypress, SiGithubactions, SiDatadog,
  SiSqlite
} from 'react-icons/si';
import { TbBrandRust } from 'react-icons/tb';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('languages');
  
  const categories = [
    { id: 'languages', label: 'Languages & Frameworks' },
    { id: 'database', label: 'Database' },
    { id: 'devops', label: 'DevOps & Cloud' },
    { id: 'testing', label: 'Testing & QA' }
  ];
  
  const skills = {
    languages: [
      { name: 'JavaScript (ES6+)', icon: <SiJavascript size={48} /> },
      { name: 'TypeScript', icon: <SiTypescript size={48} /> },
      { name: 'Node.js', icon: <FaNodeJs size={48} /> },
      { name: 'Express.js', icon: <SiExpress size={48} /> },
      { name: 'Next.js', icon: <SiNextdotjs size={48} /> },
      { name: 'React.js', icon: <FaReact size={48} /> },
      { name: 'GraphQL', icon: <SiGraphql size={48} /> },
      { name: 'RESTful', icon: <FaDatabase size={48} /> },
      { name: 'Redis', icon: <SiRedis size={48} /> },
      { name: 'Ruby on Rails', icon: <SiRubyonrails size={48} /> },
      { name: 'Tailwind', icon: <SiTailwindcss size={48} /> },
      { name: 'Bootstrap', icon: <SiBootstrap size={48} /> },
      { name: 'Redux', icon: <SiRedux size={48} /> },
      { name: 'jQuery', icon: <SiJquery size={48} /> },
      { name: 'HTML5', icon: <FaHtml5 size={48} /> },
      { name: 'CSS3', icon: <FaCss3Alt size={48} /> }
    ],
    database: [
      { name: 'MongoDB', icon: <SiMongodb size={48} /> },
      { name: 'MySQL', icon: <SiMysql size={48} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={48} /> },
      { name: 'SQLite', icon: <SiSqlite size={48} /> },
      { name: 'SQL', icon: <FaDatabase size={48} /> },
      { name: 'NoSQL', icon: <SiMongodb size={48} /> }
    ],
    devops: [
      { name: 'Git', icon: <FaGitAlt size={48} /> },
      { name: 'CI/CD', icon: <SiGithubactions size={48} /> },
      { name: 'Docker', icon: <FaDocker size={48} /> },
      { name: 'Kubernetes', icon: <SiKubernetes size={48} /> },
      { name: 'Datadog', icon: <SiDatadog size={48} /> },
      { name: 'AWS', icon: <FaAws size={48} /> }
    ],
    testing: [
      { name: 'Rspec', icon: <TbBrandRust size={48} /> },
      { name: 'Cypress', icon: <SiCypress size={48} /> },
      { name: 'Jest', icon: <SiJest size={48} /> }
    ]
  };

  return (
    <section className="py-16 bg-[#f5f5f0] min-h-screen min-w-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">SKILLS</h2>
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#d4c8a1] text-[#333] shadow-md transform scale-105'
                  : 'bg-white text-[#666] hover:bg-[#e9e5d4]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {skills[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-[#d4c8a1] mb-4">{skill.icon}</div>
              <h3 className="font-medium text-lg text-center text-[#333]">{skill.name}</h3>
            </div>
          ))}
        </div>
        <MoveToNewSection />

      </div>
      
    </section>
  );
};

export default SkillsSection;