import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import Services3 from "../../components/Services3";
import Skills2 from "../../components/Skills2";
import Testimonials1 from "../../components/Testimonials1";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="About Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "about us", url: "/about" },
        ]}
      />
      <Services3 bigTitle grid />
      <Testimonials1 bigTitle />
      <Skills2 />
    </MainLayout>
  );
};

export default About;
