import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <section id="About" className="h-full w-full bg-orange-50">
      <div className="container mx-auto h-full flex flex-col md:flex-row">
        {/* Left side: Surhad Image */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
          {/* Circular background for the image */}
          <div className="relative">
            <Image
              width={300}
              height={300}
            
              src="/aa.png"
              alt="Suhrad Trambadiya"
              className=" object-cover transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        {/* Right side: Text Section */}
        <div className="w-full md:w-1/2 h-full py-8 px-6 flex flex-col justify-center items-center space-y-6">
          <div className="relative text-left">
            <p className="text-2xl text-orange-400 font-semibold">Hello, I &rsquo; m</p>

            {/* Orange circle behind the "S" */}
            <div className="bg-orange-300 absolute top-10 left-10 transform -translate-x-12 translate-y-2 h-10 w-10 rounded-full z-0"></div>

            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 relative z-10 text-gray-800">
              Suhrad Trambadiya
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-gray-700 mt-3">
              Full Stack Developer
            </h2>
            <h3 className="text-lg md:text-xl text-gray-600 mt-1 font-semibold">
              Based in Canada
            </h3>
            <p className="mt-6 text-base text-gray-700 max-w-lg mx-auto">
              A lover of words, a wrangler of copy. Here to create copy that not
              only reflects who you are and what you stand for, but words that
              truly land with those that read them, calling your audience in and
              making them resonate.
            </p>
          </div>

          {/* Stats Section */}
          <div className="mt-8 text-gray-600 space-y-4 text-center w-full ">
            <p className="text-xl font-semibold">
              <span className="text-orange-500 text-4xl font-bold">3+</span>{" "}
              Years of Experience
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-500">02</p>
                <p className="text-gray-500">Award Winner</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-500">10</p>
                <p className="text-gray-500">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-500">15+</p>
                <p className="text-gray-500">Technologies Mastered</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 bg-black text-orange-100 py-3 px-8 rounded-lg hover:bg-orange-400 transition duration-300 transform hover:scale-105">
            Download My Resume
          </button>
          <div className="mt-6 md:mt-0 text-black">
              <div className="flex justify-around  gap-8 mt-6 items-center">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl text-black hover:text-gray-700 transition duration-300" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-600 transition duration-300" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-2xl text-blue-400 hover:text-blue-300 transition duration-300" />
                </Link>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;