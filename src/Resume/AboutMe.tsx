import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full mt-4 lg:mt-0">
      <h2 className="text-4xl font-bold text-orange-500 mb-8 text-left">Professional Overview</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-8 lg:gap-6 text-base font-medium">
        {/* Full Name */}
        <div className="p-5 flex items-center bg-white shadow-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-orange-50">
          <p>
            <span className="text-gray-500 text-sm uppercase">Full Name</span>
            <br />
            <span className="font-semibold text-gray-800 text-xl">Suhrad Trambadiya</span>
          </p>
        </div>

        {/* Location */}
        <div className="p-5 flex items-center bg-white shadow-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-orange-50">
          <p>
            <span className="text-gray-500 text-sm uppercase">Location</span>
            <br />
            <span className="font-semibold text-gray-800 text-xl">Canada</span>
          </p>
        </div>

        {/* Contact Number */}
        <div className="p-5 flex items-center bg-white shadow-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-orange-50">
          <p>
            <span className="text-gray-500 text-sm uppercase">Contact Number</span>
            <br />
            <span className="font-semibold text-gray-800 text-xl">+1 (437) 366-4369</span>
          </p>
        </div>

        {/* Email */}
        <div className="p-5 flex items-center bg-white shadow-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-orange-50">
          <p>
            <span className="text-gray-500 text-sm uppercase">Email</span>
            <br />
            <span className="font-semibold text-gray-800 text-xl">suhrad.patel1111@gmail.com</span>
          </p>
        </div>

        {/* Experience */}
        <div className="p-5 flex items-center bg-white shadow-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-orange-50">
          <p>
            <span className="text-gray-500 text-sm uppercase">Experience</span>
            <br />
            <span className="font-semibold text-gray-800 text-xl">3+ years</span>
          </p>
        </div>

        {/* Freelance Availability */}
        <div className="p-5 flex items-center bg-white shadow-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-orange-50">
          <p>
            <span className="text-gray-500 text-sm uppercase">Freelance Availability</span>
            <br />
            <span className="font-semibold text-gray-800 text-xl">Open to Opportunities</span>
          </p>
        </div>

        {/* Collaborations */}
        <div className="p-5 flex items-center bg-white shadow-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-orange-50">
          <p>
            <span className="text-gray-500 text-sm uppercase">Collaborations</span>
            <br />
            <span className="font-semibold text-gray-800 text-xl">Worked with Nityam WebTech on web applications</span>
          </p>
        </div>

        {/* Languages Spoken */}
        <div className="p-5 flex items-center bg-white shadow-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-orange-50">
          <p>
            <span className="text-gray-500 text-sm uppercase">Languages Spoken</span>
            <br />
            <span className="font-semibold text-gray-800 text-xl">English, French, Hindi</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
