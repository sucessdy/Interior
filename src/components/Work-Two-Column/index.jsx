/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

export const WorkTwoColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 interior theaters residential">
              <div className="section-head mb-0">
                <h3>Works</h3>

                <div className="filtering mt-30">
                  <div className="filter">
                    <span data-filter="*" className="active">
                      All
                    </span>
                    <span data-filter=".interior">Interior</span>
                    <span data-filter=".theaters">Theaters</span>
                    <span data-filter=".residential">Residential</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/demos/galery2.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Interior</Link>
                  </h5>
                  <span>Modern</span>
                  <span>kitchen</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/demos/furniture.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Smart Furniture</Link>
                  </h5>
                  <span>Organic Shapes</span>
                  <span>and Curved</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/demos/galler1.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern House</Link>
                  </h5>
                  <span>Living Room,</span>
                  <span>Cozy Air</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/demos/houseq.jpg" alt="" className="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Furniture</Link>
                  </h5>
                  <span>Clean,</span>
                  <span>Minimalistic Designs</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/demos/house11.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Cozy Interior Design</Link>
                  </h5>
                  <span>Versatile and</span>
                  <span>Multifunctional Pieces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
