'use client'
import React from 'react';

const Summary = () => {
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-orange-500 mb-6">Professional Summary</h2>

      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        {/* Introduction Paragraph */}
        <p className="text-lg text-gray-700 mb-6">
          I am a passionate and highly skilled software developer with over 3 years of experience, specializing in both <span className="font-bold text-orange-600">front-end</span> and <span className="font-bold text-orange-600">back-end</span> technologies. My expertise lies in creating scalable and performant web applications using modern frameworks and tools like <span className="font-bold text-orange-600">MERN stack</span>, <span className="font-bold text-orange-600">React</span>, <span className="font-bold text-orange-600">Node.js</span>, <span className="font-bold text-orange-600">FastAPI</span>, and <span className="font-bold text-orange-600">AWS</span>. I am driven by a deep understanding of <span className="font-bold text-orange-600">user-centric design</span> and a constant desire to improve both development processes and <span className="font-bold text-orange-600">user experiences</span>.
        </p>

        {/* Key Highlights */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-4 border-orange-600 pb-2">Key Highlights:</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li className="hover:text-orange-600 transition-colors duration-300">
            Proficient in full-stack development with expertise in <span className="font-bold text-orange-600">JavaScript (ES6)</span>, <span className="font-bold text-orange-600">React</span>, <span className="font-bold text-orange-600">Node.js</span>, <span className="font-bold text-orange-600">MongoDB</span>, and <span className="font-bold text-orange-600">FastAPI</span>.
          </li>
          <li className="hover:text-orange-600 transition-colors duration-300">
            In-depth experience with <span className="font-bold text-orange-600">Python</span> and <span className="font-bold text-orange-600">FastAPI</span> for building efficient, high-performance APIs and backend systems.
          </li>
          <li className="hover:text-orange-600 transition-colors duration-300">
            Experience in <span className="font-bold text-orange-600">cloud computing</span> with <span className="font-bold text-orange-600">AWS</span>, deploying scalable and high-availability applications.
          </li>
          <li className="hover:text-orange-600 transition-colors duration-300">
            Strong background in <span className="font-bold text-orange-600">Agile development</span> methodologies, including <span className="font-bold text-orange-600">Scrum</span> and <span className="font-bold text-orange-600">Kanban</span>.
          </li>
          <li className="hover:text-orange-600 transition-colors duration-300">
            Implemented <span className="font-bold text-orange-600">RESTful APIs</span>, <span className="font-bold text-orange-600">GraphQL</span>, and optimized application performance for various clients.
          </li>
          <li className="hover:text-orange-600 transition-colors duration-300">
            Skilled in <span className="font-bold text-orange-600">version control</span> using <span className="font-bold text-orange-600">Git</span>, with experience working in collaborative environments.
          </li>
          <li className="hover:text-orange-600 transition-colors duration-300">
            Advanced understanding of <span className="font-bold text-orange-600">front-end design principles</span>, <span className="font-bold text-orange-600">responsive design</span>, and <span className="font-bold text-orange-600">UI/UX best practices</span>.
          </li>
        </ul>

        {/* Closing Paragraph */}
        <p className="text-lg text-gray-700 mt-6">
          I am committed to continuous learning and constantly strive to enhance my skill set to stay current with the latest industry trends. Whether working on complex web applications, implementing <span className="font-bold text-orange-600">FastAPI</span> for robust backend solutions, or collaborating with cross-functional teams, I take pride in delivering high-quality solutions that meet business goals and exceed <span className="font-bold text-orange-600">user expectations</span>.
        </p>
      </div>
    </div>
  );
};

export default Summary;
