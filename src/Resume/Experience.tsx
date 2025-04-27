// Experience.tsx
const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Nityam Web Solutions",
    duration: "January 2023 - Present",
    description:
      "Led the development of MERN stack applications, focusing on optimizing user experience and backend performance. Developed RESTful APIs and integrated GraphQL for efficient data querying and management.",
  },
  {
    role: "Front-End Developer",
    company: "Infinity Web Solutions",
    duration: "October 2021 - December 2022",
    description:
      "Built responsive UIs using React.js and Redux, collaborating with designers to ensure cross-device compatibility, implementing best practices for accessibility and performance.",
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    duration: "2015 - 2021",
    description:
      "Worked with various clients to develop custom web solutions, leveraging both front-end and back-end technologies like React, Node.js, and MySQL.",
  },
  {
    role: "web Developer Volunteer",
    company: "Atmiya Sports Club",
    duration: "2021-present",
    description:
      " Developed and maintained the club's website, ensuring it was user-friendly and up-to-date with the latest events and news. Collaborated with club members to gather requirements and implement features that enhanced user engagement.",
  },
];

const Experience = () => (
  <div className="">
    <h2 className="text-4xl font-bold text-orange-500  mb-6">Experience</h2>

    <div className="grid md:grid-cols-2 gap-8">
      {experienceData.map((job, index) => (
        <div
          key={index}
          className="flex flex-col p-6 hover:bg-orange-50 shadow-xl rounded-lg transition-transform hover:scale-105 hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold text-gray-800 hover:text-orange-600 focus:text-orange-600">
            <span className="text-black hover:text-orange-600 focus:text-orange-600">
              {job.role}
            </span>
          </h3>
          <p className="text-lg text-gray-500">
            <span className="text-black">{job.company}</span>
          </p>
          <p className="text-sm text-gray-400">{job.duration}</p>
          <p className="mt-2 text-gray-700 flex-grow">{job.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
