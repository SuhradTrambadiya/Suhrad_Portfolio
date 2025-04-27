"use client";
import Image from "next/image";
import React from "react";

// Define the type for a project
interface Project {
  image: string; // Image URL or path
  name: string; // Project name
  description: string; // Short description of the project
  liveLink: string; // Live site link
  githubLink: string; // GitHub repository link
}

const Projects: React.FC = () => {
  // Array of projects with their data
  const projects: Project[] = [
    {
      image: "/project/calculator.png",
      name: "Simple Calculator",
      description:
        "A basic calculator application that allows users to perform standard arithmetic operations like addition, subtraction, multiplication, and division.",
      liveLink: "https://calculatorsuhrad.netlify.app/",
      githubLink: "https://github.com/SuhradTrambadiya/Calculator-",
    },
    {
      image: "/project/kitchen.png",
      name: "Kitchen-Frontend",
      description:
        "A front-end web app designed for kitchen management, allowing users to manage ingredients, recipes, and cooking schedules.",
      liveLink: "https://kitchen-silk-nine.vercel.app/",
      githubLink: "https://github.com/SuhradTrambadiya/Kitchen",
    },
    {
      image: "/project/Gemini.jpg",
      name: "Project Gemini chat API",
      description:
        "A chat API built as part of Project Gemini, providing real-time messaging, group chat, and media sharing features.",
      liveLink: "https://suhradgemini.netlify.app/",
      githubLink: "https://github.com/SuhradTrambadiya?tab=repositories",
    },
    {
      image: "/project/weather.png",
      name: "Weather App",
      description:
        "A weather app that provides real-time weather updates, including current conditions, forecasts, and weather maps based on user location.",
      liveLink: "https://tvo-weather-app-blush.vercel.app/",
      githubLink: "https://github.com/SuhradTrambadiya/tvo_weatherApp",
    },
    {
      image: "/project/LiveCricket.jpg",
      name: "Live-Cricket API",
      description:
        "An API that provides live cricket match scores, player stats, and match details in real-time for cricket enthusiasts.",
      liveLink: "https://github.com/SuhradTrambadiya/Live-Cricket-Scoreboard",
      githubLink: "https://github.com/SuhradTrambadiya/Live-Cricket-Scoreboard",
    },
    {
      image: "/project/Inventory.jpg",
      name: "Inventory API",
      description:
        "An inventory management API that allows users to track and manage stock levels, orders, and product details for businesses.",
      liveLink: "https://github.com/SuhradTrambadiya/inventoryAPI",
      githubLink: "https://github.com/SuhradTrambadiya/inventoryAPI",
    },
  ];
  
  return (
    <section id="Projects" className="mx-auto px-6 sm:px-8 bg-white py-14">
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4">
          My Projects
        </h1>
        <h2 className="text-lg text-gray-500 text-center max-w-2xl mb-8">
          Explore some of the projects I&rsquo;ve worked on, showcasing my skills and
          passion for development.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-orange-50 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500 transform hover:scale-105"
          >
            <Image
              height={300}
              width={300}
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:opacity-80"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex justify-between items-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-white bg-black hover:bg-orange-600 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  View Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
