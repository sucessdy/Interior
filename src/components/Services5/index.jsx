import React from "react";
import Link from "next/link";

const Services5 = () => {
  return (
    <section className="services-col section-padding">
      <div className="container">
        <div className="main-header text-center">
          <h3>Best Features.</h3>
          <div className="tex-bg">Services</div>
        </div>
        <div className="row bord-box wow fadeInUp">
          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-home"></span>
            <h6 className="mb-20">
Innovative Design</h6>
            <p>
            Architects craft extraordinary blueprints, telling unique stories innovatively.
            </p>
            <Link href="/about">
              <a className="more mt-30"></a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-kitchen-2"></span>
            <h6 className="mb-20">Sustainable Building Practices</h6>
            <p>
              Build Green, Live Green - Prioritizing sustainability in every detail of your project.
            </p>
            <Link href="/about">
              <a className="more mt-30"></a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-plan"></span>
            <h6 className="mb-20">Collaborative Design Process:
</h6>
            <p>
            Your Vision, Our Expertise - A collaborative journey, crafting spaces that resonate.



            </p>
            <Link href="/about">
              <a className="more mt-30"></a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-renovation"></span>
            <h6 className="mb-20">Project Management Excellence:
</h6>
            <p>
            From Blueprint to Reality - Meticulous planning, flawless execution; your dream realized.





.
            </p>
            <Link href="/about">
              <a className="more mt-30"></a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services5;
