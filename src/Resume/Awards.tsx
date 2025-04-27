"use client";
import React from "react";

interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
}

const Awards = () => {
  // Array of awards/certifications
  const awards: Award[] = [
    {
      title: "FastAPI Web Development",
      organization: "Independent Certification",
      year: "2024",
      description:
        "Specialized in building high-performance APIs using FastAPI with deep knowledge of asynchronous programming, Python backend systems, and API optimization techniques.",
    },
    {
      title: "SEO Specialization",
      organization: "Google Digital Garage",
      year: "2023",
      description:
        "Mastered SEO fundamentals, advanced optimization strategies, and implemented effective SEO campaigns for improved website ranking, traffic growth, and user engagement.",
    },
    {
      title: "System Design Certification",
      organization: "Educative.io",
      year: "2023",
      description:
        "Gained expertise in designing scalable, distributed systems and building architectures for high-availability, fault tolerance, and system optimization at scale.",
    },
    {
      title: "Core Java Certification",
      organization: "Oracle",
      year: "2022",
      description:
        "Comprehensive understanding of Core Java principles, including OOP, multithreading, collections framework, exception handling, and JVM internals for enterprise application development.",
    },
    {
      title: "Python Programming Certification",
      organization: "Coursera",
      year: "2022",
      description:
        "Developed advanced skills in Python programming, covering data structures, algorithms, OOP, file handling, and real-world application development.",
    },
  ];

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-orange-500 text-left">
        Awards & Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
        {awards.map((award, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-xl rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-50 hover:text-gray-800 hover:shadow-2xl hover:scale-105 transform"
          >
            <h3 className="text-2xl font-semibold text-gray-800 hover:text-orange-600 focus:text-orange-600">
              {award.title}
            </h3>
            <p className="text-lg text-gray-700 ">{award.organization} </p>
            <p className="text-sm text-gray-800 mt-2 ">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
