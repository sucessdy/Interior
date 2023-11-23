/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorkWithoutFilter = ({ vis }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-md-6 items mt-0">
              <div className="main-header mb-0">
                <h3>Works.</h3>
              </div>
            </div>
            {/* <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="demos/h.png" alt="img" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Architecture</span>
                  <span>Modern</span>
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                </div>
              </div>
            </div> */}
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                <img src="/demos/h.png" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Cozy Living</span>
                  <span> </span>
                  <h5>
                    <Link href="/project-details">Modern Bedroom </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/demos/houee2.png" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                <span>Cozy Living</span>
                  {/* <span>Modern</span> */}
                  <h5>
                    <Link href="/project-details">Modern Living Room</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/demos/galery2.jpg" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                <span>Cozy Living</span>
                  {/* <span>Modern</span> */}
                  <h5>
                    <Link href="/project-details">Modern Kitchen</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/demos/Hospita.jpg" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                <span>Cozy Living</span>
                  {/* <span>Modern</span> */}
                  <h5>
                    <Link href="/project-details">Modern Hospital</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkWithoutFilter;
