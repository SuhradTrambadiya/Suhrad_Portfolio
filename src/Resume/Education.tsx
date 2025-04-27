// Education.tsx
const educationData = [
  {
    degree: "Diploma in Computer Programming",
    school: "Sheridan College",
    description:
      "Focused on programming fundamentals, software development methodologies, and project management practices.",
  },
  {
    degree: "Full Stack Development Certification",
    school: "CodeCademy",
    description:
      "Completed a comprehensive program covering front-end and back-end technologies, including HTML5, CSS3, JavaScript, Node.js, and React.",
  },
  {
    degree: "Web Development Free Online Course",
    school: "Harvard University",
    description:
      "Completed an online course from Harvard to strengthen knowledge in web development, covering MySQL, MongoDB, JavaScript (ES6), and MERN stack.",
  },
];

const Education = () => (
  <div className="">
    <h2 className="text-4xl font-bold text-orange-500 mb-6">Education</h2>

    <div className="grid md:grid-cols-2 gap-8">
      {educationData.map((education, index) => (
        <div
          key={index}
          className="flex flex-col p-6 bg-white shadow-xl rounded-lg transition-transform transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50"
        >
          <h3 className="text-2xl font-semibold text-gray-800 hover:text-orange-600 focus:text-orange-600">
            <span className="text-orange-00">{education.degree}</span>
          </h3>
          <p className="text-lg text-gray-500 hover:text-gray-700 focus:text-gray-700">
            <span className="">{education.school}</span>
          </p>

          <p className="mt-2 text-gray-700 flex-grow">
            {education.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Education;
