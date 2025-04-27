import { FaArrowRight, FaLaptopCode, FaChartLine, FaCode, FaDatabase, FaCreditCard, FaCogs } from "react-icons/fa"; // Importing icons

const Specialties = () => {
  const services = [
    { 
      name: "Database Expert", 
      icon: <FaDatabase className="text-orange-500 text-4xl" />,
      description: "Ensure your business data is well-structured, scalable, and optimized for performance."
    },
    { 
      name: "Web Apps Design", 
      icon: <FaLaptopCode className="text-orange-500 text-4xl" />,
      description: "Create intuitive and visually appealing web applications that engage your users."
    },
    { 
      name: "Payment Gateway Integration", 
      icon: <FaCreditCard className="text-orange-500 text-4xl" />,
      description: "Seamlessly integrate secure and reliable payment gateways for hassle-free transactions."
    },
    { 
      name: "SEO Expert", 
      icon: <FaChartLine className="text-orange-500 text-4xl" />,
      description: "Boost your online visibility and rankings with expert SEO strategies."
    },
    { 
      name: "Website Development", 
      icon: <FaCode className="text-orange-500 text-4xl" />,
      description: "Develop high-performance websites with modern features tailored to your business."
    },
    { 
      name: "API Design", 
      icon: <FaCogs className="text-orange-500 text-4xl" />,
      description: "Design robust and scalable APIs that power seamless integrations across platforms."
    },
  ];

  return (
    <section id="Specialty" className="bg-orange-50 min-h-screen w-full px-6 py-16 md:px-16">
      {/* Header Section */}
      <div className="relative flex flex-wrap items-center justify-between">
        <div>
          <h1 className="text-orange-600 text-3xl font-semibold">Services</h1>
          <div className="bg-orange-300 h-8 w-8 md:h-14 md:w-14 rounded-full absolute top-14 z-0"></div>
          <h1 className="md:text-6xl text-4xl font-extrabold mt-4 relative z-10">
            My Specialties
          </h1>
        </div>
        <div className="max-w-3xl w-full">
          <p className="text-slate-600 text-lg mt-4 text-left">
            Elevate your brand with top-tier design, development, and digital strategies for a standout online presence.
          </p>
        </div>
      </div>

      {/* Services & Contact Section */}
      <div className="mt-12 flex flex-col md:flex-row gap-8">
        {/* Services Section */}
        <div className="w-full md:w-7/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:scale-105 hover:text-orange-500 transition-all duration-300 ease-in-out flex flex-col items-center text-center"
              >
                <div className="h-20 w-20 bg-orange-50 p-5 rounded-full flex items-center justify-center shadow-2xl mb-4">
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h2>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-black text-white p-8 rounded-2xl flex flex-col items-center justify-center gap-6 shadow-xl w-full md:w-5/12 hover:bg-gray-900 hover:text-orange-400 transition-all duration-300 ease-in-out">
          {/* Profile Icon */}
          <div className="bg-white h-24 w-24 rounded-full flex items-center justify-center shadow-2xl mb-4">
            <FaArrowRight className="text-orange-500 text-4xl" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-semibold text-center">Let&apos;s Connect</h1>

          {/* Description */}
          <p className="text-lg text-center mb-4">
            Have an exciting project? Let&apos;s bring it to life! Reach me at:{" "}
            <a
              href="mailto:suhrad.patel111@gmail.com"
              className="text-orange-400 hover:text-fuchsia-500 transition-colors"
            >
              suhrad.patel1111@gmail.com
            </a>
          </p>

          {/* Arrow Icon */}
          <FaArrowRight className="text-orange-400 hover:text-orange-600 text-3xl cursor-pointer transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Specialties;
