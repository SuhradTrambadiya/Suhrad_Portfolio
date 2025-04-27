"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { UnifrakturMaguntia } from "next/font/google";
import { useRouter } from "next/navigation";

const unifrakturMaguntia = UnifrakturMaguntia({
  variable: "--font-unifraktur-maguntia",
  subsets: ["latin"],
  weight: "400",
});

const roles = ["Full Stack Developer", "Software Engineer", "MERN Developer"];

const Home = () => {
  const router = useRouter();

  const handleOnClick = () => {
    console.log("Resume button clicked");
    router.push("/#Projects");
  };

  const handleOnClickr = () => {
    console.log("Resume button clicked");
    window.open("/Suhrad_Trambadiya_Resume.pdf", "_blank");
  };
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!deleting && typingIndex < roles[roleIndex].length) {
          setTypedText((prev) => prev + roles[roleIndex][typingIndex]);
          setTypingIndex((prev) => prev + 1);
        } else if (!deleting) {
          setTimeout(() => setDeleting(true), 1500);
        } else if (deleting && typingIndex > 0) {
          setTypedText((prev) => prev.slice(0, -1));
          setTypingIndex((prev) => prev - 1);
        } else {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [roleIndex, typingIndex, deleting]);

  return (
    <section
      id="Home"
      className="pt-5 md:py-20 md:pt-24 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      {/* Left Content */}
      <div className="text-left space-y-6 flex flex-col items-center md:items-start md:max-w-lg">
        <h3 className="text-xl md:text-3xl font-semibold text-orange-400 tracking-wide flex items-center">
          Hello, I&apos;m{" "}
          <span className="ml-2 text-3xl animate-waving-hand">👋</span>
        </h3>
        <h1
          className={`text-3xl md:text-7xl text-center md:text-left font-extrabold text-white leading-tight ${unifrakturMaguntia.variable}`}
        >
          Suhrad Trambadiya
        </h1>
        <p className="text-2xl font-medium flex items-center">
          <span className="mr-2">👨‍💻</span>
          <span className="hidden md:inline text-orange-400 text-3xl font-semibold">
            {typedText}
          </span>
          <span className="hidden md:inline text-orange-400 text-3xl font-semibold animate-blink">
            |
          </span>
          <span className="md:hidden text-orange-400 text-2xl font-semibold">
            Full stack developer
          </span>
        </p>
        <p className="text-sm text-gray-300 leading-relaxed max-w-lg md:text-lg italic mt-4 text-center md:text-left">
          &quot;Coding is more than just writing code; it&apos;s about crafting
          experiences, solving real-world problems, and pushing the boundaries
          of what&apos;s possible.&quot;
        </p>

        {/* Social Links */}

        <div className="flex gap-6 mt-8">
          <Link
            href="https://www.linkedin.com/in/suhrad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl transition transform hover:scale-110 text-blue-400 hover:text-blue-600"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/SuhradTrambadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl transition transform hover:scale-110 text-gray-300 hover:text-gray-500"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=suhrad.patel.1111@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl transition transform hover:scale-110 text-orange-400 hover:text-orange-600"
          >
            <FaEnvelope />
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-8">
          <button
            onClick={handleOnClickr}
            className="px-8 py-3 bg-orange-500 text-white text-lg font-medium rounded-lg shadow-md transition transform hover:scale-105 hover:bg-orange-600"
          >
            My Resume
          </button>
          <button
            onClick={handleOnClick}
            className="px-8 py-3 bg-gray-700 text-white text-lg font-medium rounded-lg shadow-md transition transform hover:scale-105 hover:bg-gray-600"
          >
            Projects
          </button>
        </div>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
        <div className="absolute  rounded-full blur-2xl opacity-10 animate-pulse"></div>
        <Image
          src="/aa.png"
          alt="Suhrad Trambadiya Avatar"
          width={420}
          height={420}
          className="object-cover rounded-full transform transition animate-floating"
        />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes waving-hand {
          0% {
            transform: rotate(0);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60%,
          100% {
            transform: rotate(0);
          }
        }
        .animate-waving-hand {
          display: inline-block;
          animation: waving-hand 2s infinite;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }

        @keyframes floating {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-floating {
          animation: floating 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
