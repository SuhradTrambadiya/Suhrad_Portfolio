"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  content: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "From Figma to Code ",
    description: "Turning a Design into a Responsive Website with React",
    image: "/blog/Blog1.jpg",
    content:
      "Converting a Figma design into a responsive website is one of the most exciting parts of frontend development. I recently worked on a project where I took a clean Figma layout and brought it to life using React and Tailwind CSS. I started by breaking down the design into reusable components like headers, sections, and buttons. Then, I followed a mobile-first approach to make sure the layout looked great on all screen sizes. Tailwind's utility classes made it super easy to match the design's colors, spacing, and typography. The key was to pay attention to small details — like padding, font sizes, and image placement — to ensure the final result closely matched the original mockup. It was a fun experience that taught me how powerful a well-organized design system can be when paired with clean code.",
  },
  {
    id: 2,
    title: "Use AI at Work",
    description: "Smart Ways to Boost Your Productivity with AI Tools like ChatGPT",
    image: "/blog/Blog2.jpg",
    content:" Artificial Intelligence is no longer just a buzzword—it’s a tool that can make your work smarter and more efficient. Whether you’re in tech, marketing, or design, AI helps save time, reduce errors, and improve focus. You can use tools like ChatGPT for drafting emails, reports, and brainstorming ideas. For data analysis, AI can quickly summarize trends and make predictions, while for developers, it suggests code snippets and debug solutions. In design, tools like Canva's Magic Design can generate graphics in seconds. AI also boosts time management, organizing meetings and creating task summaries. It even assists in HR and customer service by streamlining processes. AI is here to assist, not replace, and exploring its potential in your workflow will help you work smarter and more efficiently. "
   
  },
  {
    id: 3,
    title: "TypeScript is Better than JavaScript ?",
    description: "How TypeScript improves developer experience and code quality.",
    image: "/blog/Blog3.jpg",   
    content:
      "TypeScript is better than JavaScript because it introduces static typing, which helps developers catch errors early. By defining types for variables and functions, TypeScript reduces runtime errors and improves code predictability. It also enhances the development process with better IDE support, offering features like autocompletion, error detection, and refactoring tools. With TypeScript, large projects become easier to manage and maintain, especially as teams grow. Overall, TypeScript leads to fewer bugs, faster development, and cleaner, more maintainable code.",
  }
  
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const closeModal = () => setSelectedBlog(null);

  return (
    <section id="Blog" className="bg-orange-50 py-16 px-4 sm:px-8">
      {/* Page Heading */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">
          Latest Blog Posts
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stay ahead in the ever-evolving tech landscape. Read our latest posts
          on cutting-edge technologies, development tips, and best practices.
        </p>
      </header>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => setSelectedBlog(blog)}
          >
            <Image
              height={200}
              width={200}
              src={blog.image}
              alt={blog.title}
              className="w-full h-72  rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-orange-500 leading-tight mb-2">
                {blog.title}
              </h3>
              <p className="text-lg text-gray-700 mb-4">{blog.description}</p>
              <button className="bg-black rounded-full  text-white p-3 font-semibold hover:underline text-sm">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-lg z-50">
          <div
            className="bg-white text-black rounded-lg p-8 max-w-3xl w-full shadow-xl transform transition-transform duration-300 relative overflow-y-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-gray-800 bg-orange-400 rounded-full p-3 hover:text-black text-xl"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <AiOutlineClose />
            </button>

            {/* Modal Content */}
            <Image
              height={400}
              width={400}
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-auto max-h-[400px] object-cover rounded-md mb-6"
            />
            <h2 className="text-3xl font-bold text-orange-600 mb-6">
              {selectedBlog.title}
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-6 overflow-y-scroll max-h-[50vh]">
              {selectedBlog.content}
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};


export default Blog;
