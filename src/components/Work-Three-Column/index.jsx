/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorkThreeColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img three-col section-padding">
        <div className="container">
          <div className="filtering text-center mb-30">
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".interior">Interior</span>
              <span data-filter=".theaters">Theaters</span>
              <span data-filter=".residential">Residential</span>
            </div>
          </div>
          <div className="row gallery">
            <div className="col-lg-4 col-md-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/demos/house22.png" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Hospital</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/demos/house23.png" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Living Room</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/demos/house24.png" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Cozy Room</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/demos/house25.png" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Wardrobe</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/demos/house26.png" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Bedroom</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/demos/house27.png" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Furniture</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/demos/house28.png" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Bedroom</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/demos/house29.png" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Kitchen</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/demos/house30.png" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Bathroom</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkThreeColumn;
