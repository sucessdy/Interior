import React from "react";
import AboutUs1 from "../../components/About-Us1";
import Services1 from "../../components/Services1";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import Portfolio1 from "../../components/Portfolio1";
import SkillsCircle from "../../components/Skills-circle";
import Testimonials from "../../components/Testimonials1";
import Blogs1 from "../../components/Blogs1";
import Contact from "../../components/Contact";

const Home = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <IntroWithHorizontal />
      <AboutUs1 />
      <Services1 />
      <Portfolio1 />
      <SkillsCircle />
      <Testimonials />
      <Blogs1 />
      <Contact />
    </LightLayout>
  );
};

export default Home;

