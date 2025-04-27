'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FaPhone, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null); // Reset status on new submission

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setIsSubmitting(false);
      setStatus("All fields are required.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Failed to send email.");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <section id="Contact" className="bg-gray-50 py-20 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Side Section - Contact Info */}
            <div className="col-span-12 lg:col-span-4" data-aos="fade-up">
              <div className="font-bold font-Syne leading-none flex flex-col gap-y-4 mb-12">
                <h3 className="text-gray-900 text-center text-4xl lg:text-5xl xl:text-[64px] tracking-tight font-bold">
                  Let&rsquo;s <span className="text-orange-500">Connect</span>
                </h3>
              </div>
              <div className="flex flex-col gap-10 md:pl-20">
                {/* Contact Methods */}
                <div className="flex items-center justify-start gap-6 border-b-2 border-gray-300 pb-8">
                  <span className="bg-orange-500 p-3 rounded-full flex-shrink-0">
                    <FaEnvelope className="text-white text-2xl" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-lg font-medium text-gray-600">Email us</span>
                    <h5 className="text-xl font-semibold text-gray-900">
                      <a href="mailto:suhrad.patel1111@gmail.com" className="hover:text-orange-500">
                        suhrad.patel1111@gmail.com
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-6 pb-8 border-b-2 border-gray-300">
                  <span className="bg-orange-500 p-3 rounded-full flex-shrink-0">
                    <FaPhone className="text-white text-2xl" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-lg font-medium text-gray-600">Call us</span>
                    <h5 className="text-xl font-semibold text-gray-900">
                      <a href="tel:+14373664369" className="hover:text-orange-500">
                        +1 (437) 366-4369
                      </a>
                    </h5>
                  </div>
                </div>
                {/* LinkedIn */}
                <div className="flex items-center justify-start gap-6 pb-8 border-b-2 border-gray-300">
                  <span className="bg-orange-500 p-3 rounded-full flex-shrink-0">
                    <FaLinkedin className="text-white text-2xl" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-lg font-medium text-gray-600">LinkedIn</span>
                    <Link
                      href="https://www.linkedin.com/in/suhrad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-semibold text-gray-900 hover:text-orange-500"
                    >
                      Visit my LinkedIn
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Section - Contact Form */}
            <div className="col-span-12 lg:col-span-8 ">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-2xl space-y-6 max-w-xl mx-auto"
                aria-labelledby="contact-form"
              >
                <h4 className="text-3xl font-bold text-gray-900 mb-8" id="contact-form">
                  Get in Touch
                </h4>

                {/* Name Input */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-lg font-medium text-gray-600 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label="Your Name"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-lg font-medium text-gray-600 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-label="Your Email"
                  />
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-lg font-medium text-gray-600 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-label="Your Message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
                  aria-label="Send Message"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Status Message */}
                {status && (
                  <div className={`mt-4 text-center ${status.includes("success") ? "text-green-500" : "text-red-500"}`}>
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
