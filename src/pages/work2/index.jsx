/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import WorkHeader from "../../components/Work-header";
import WorkThreeColumn from "../../components/Work-Three-Column";

const Work2 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        center
        title={{
          first: "Elevate Your Spaces with  Timeless Elegance"
          ,
          second: "Discover Our Gallery",
        }}
        content="Dive into our gallery below, where each image narrates a chapter of our dedication to redefining spaces. Discover the fusion of creativity and expertise, as we continue to set the standard for architectural excellence.

        "
      />
      <WorkThreeColumn />
    </MainLayout>
  );
};

export default Work2;
