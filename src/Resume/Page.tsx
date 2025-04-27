"use client";
import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Education from "./Education";
import Awards from "./Awards";
import Summery from "./Summery";

const componentsMap: Record<string, React.FC> = {
  "About Me": AboutMe,
  Experience: Experience,
  Education: Education,
  Awards: Awards,
  Summery:Summery,
};

const Page = () => {
  const [selectedSection, setSelectedSection] = useState("About Me");
  const SelectedComponent = componentsMap[selectedSection];

  return (
    <section id="Resume"className="p-3 md:p-14  bg-gray-50 w-screen h-auto md:h-full  flex flex-col lg:flex-row justify-center gap-2 md:gap-10">
      {/* Left Section */}
      <div className="md:w-2/5">
        <div className="md:mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-orange-500 mb-3">
            Resume 
          </h1>
          <h2 className="text-2xl font-bold leading-tight mb-4">
          Discover more about my experiences and awards.
          </h2>
        </div>

        <div className="mt-4 md:gap-4 gap-2 flex flex-wrap md:flex-col">
          {["About Me", "Experience", "Education", "Awards","Summery"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setSelectedSection(item)}
                className={`flex justify-between items-center text-xl font-semibold p-4 rounded-xl shadow-md transition duration-300 hover:bg-black hover:text-white transform hover:scale-105 ${
                  selectedSection === item
                    ? "bg-black text-white" // This applies when the button is selected
                    : "bg-white text-black" // Default button styling
                }`}
              >
                {item}
                <span className="text-xl">&#8594;</span>
              </button>
            )
          )}
        </div>
      </div>

      {/* Right Section (Dynamic Component) */}
      <div className="w-full lg:w-2/3 mt-4 lg:mt-0">
        <SelectedComponent />
      </div>
    </section>
  );
};

export default Page;
