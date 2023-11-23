/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "Interior Wale: ",
          second: "Where Elegance Meets Endurance",
        }}
        // title = "text",
        content="At Interior Wale, we redefine living and working spaces with a perfect blend of timeless elegance and enduring durability. Our passion lies in crafting designs that stand the test of time, creating environments that not only reflect your unique style but also promise longevity. From elegant living rooms to functional kitchens, each space is a testament to our commitment to excellence. Step into a world where every detail is thoughtfully curated, and every design element tells a story of sophistication and resilience."
      />



      <WorkTwoColumn />
    </MainLayout>
  );
};

export default Work1;
