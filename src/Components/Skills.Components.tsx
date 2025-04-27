'use client'
import React, { JSX, useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiAws, DiDjango, DiJava, DiJavascript, DiMongodb, DiPhp, DiPostgresql, DiPython } from "react-icons/di";
import { FaCss3, FaReact, FaNode, FaDocker, FaDatabase } from "react-icons/fa";
import { GrGithub, GrGoogle } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiFastapi, SiPrisma, SiRedux, SiSqlalchemy, SiSqlite, SiTailwindcss, SiTypescript } from "react-icons/si";

// Define the type for a single skill
interface Skill {
  icon: JSX.Element; // Icon component
  name: string;
  iconClass: string; // Add class for custom icon color
}

// Define the type for the skills data
interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  devOps: Skill[];
}

// Define the skills data
const skillsData: SkillsData = {
  frontend: [
    { icon: <AiFillHtml5 />, name: "HTML", iconClass: "text-orange-500" },
    { icon: <FaCss3 />, name: "CSS", iconClass: "text-blue-500" },
    { icon: <FaReact />, name: "React.js", iconClass: "text-blue-500" },
    { icon: <DiJavascript />, name: "JavaScript", iconClass: "text-yellow-400" },
    { icon: <SiRedux />, name: "Redux Toolkit", iconClass: "text-purple-600" },
    { icon: <RiNextjsFill />, name: "Next.js", iconClass: "text-black" },
    { icon: <SiTypescript />, name: "TypeScript", iconClass: "text-blue-600" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", iconClass: "text-sky-400" }
  ],
  backend: [
    { icon: <FaNode />, name: "Node.js", iconClass: "text-green-500" },
    { icon: <SiExpress />, name: "Express.js", iconClass: "text-gray-800" },
    { icon: <DiJava />, name: "JAVA", iconClass: "text-red-600" },
    { icon: <DiPhp />, name: "PHP", iconClass: "text-blue-700" },
    {icon:<DiPython/>, name: "Python", iconClass: "text-yellow-500"},
    {icon:<DiDjango/>, name: "Django", iconClass: "text-green-600"},
    {icon:<SiFastapi/>, name: "FastAPI", iconClass: "text-blue-500"},
  ],
  database: [
    { icon: <DiMongodb />, name: "MongoDB", iconClass: "text-green-600" },
    { icon: <SiSqlite />, name: "MySQL", iconClass: "text-blue-500" },
    { icon: <DiPostgresql />, name: "PostgreSQL", iconClass: "text-blue-700" },
    { icon: <FaDatabase />, name: "Firebase", iconClass: "text-yellow-500" },
    { icon: <SiPrisma />, name: "Prisma", iconClass: "text-purple-600" },
    {icon:<SiSqlalchemy/>, name: "SQLAlchemy", iconClass: "text-blue-500"},
  ],
  devOps: [
    { icon: <FaDocker />, name: "Docker", iconClass: "text-blue-400" },
    { icon: <DiAws />, name: "AWS", iconClass: "text-orange-500" },
    { icon: <GrGoogle />, name: "GCP", iconClass: "text-blue-500" },
    { icon: <GrGithub />, name: "GitHub", iconClass: "text-gray-800" }
  ]
};

const Skills: React.FC = () => {
  // Set the default selected category to 'frontend'
  const [selectedCategory, setSelectedCategory] = useState<keyof SkillsData>("frontend");

  // Function to render the skills for the selected category
  const renderSkills = (category: keyof SkillsData) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-8">
        {skillsData[category].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <div className={`text-4xl mb-4 ${skill.iconClass}`}>{skill.icon}</div>
            <p className="text-xl font-semibold text-gray-800">{skill.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="Skills" className="mx-auto px-4 sm:px-12 bg-orange-50 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4">My Skills</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore the technologies I’ve mastered across various domains and the solutions I can deliver.
        </p>
      </div>

      {/* Skill Category Buttons */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {["frontend", "backend", "database", "devOps"].map((category) => (
          <button
            key={category}
            className={`text-xl font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 focus:outline-none 
              ${selectedCategory === category ? 'bg-black text-white' : 'bg-white text-black'} 
              hover:${selectedCategory !== category ? 'bg-orange-400 hover:scale-105' : ''}`}
            onClick={() => setSelectedCategory(category as keyof SkillsData)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Render Skills */}
      <div>
        {renderSkills(selectedCategory)}
      </div>
    </section>
  );
};

export default Skills;
