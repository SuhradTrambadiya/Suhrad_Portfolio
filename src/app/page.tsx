import React from "react";
import Navbar from "@/Components/Navbar.components";
import Home from "@/Components/HomeComponents";
import Skills from "@/Components/Skills.Components";
import Specialties from "@/Components/Specilty.Components";
import Projects from "@/Components/Project.Components";
import Blog from "@/Components/Blog.Components";
import Footer from "@/Components/Footer.Components";
import ContactPage from "@/Components/Contact.Component";
import Resume from "@/Resume/Page";

const Page = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        
        {/* Wrapper to prevent overlap by adding padding at the top */}
        <div className=""> {/* Adjust 'pt-20' to whatever height your navbar has */}
          <Home />
          <Resume />
          <Specialties />
          <Skills />
          <Projects />
          <Blog />
          <ContactPage />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;
