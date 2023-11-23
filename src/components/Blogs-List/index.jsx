/* eslint-disable @next/next/no-img-element */
import React from "react";
import Blog1Data from "../../data/blog1.json";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const BlogsList = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);
  return (
    <>
      <section className="blog-pg section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="posts">
                {Blog1Data.map((item) => (
                  <div className="item mb-80" key={item.id}>
                    <div className="img">
                      <Link href="/blog-details">
                        <a>
                          <img
                            src={item.image}
                            alt=""
                            className="thumparallax"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="date">
                        <h5>
                          <Link href="/blog-details">
                            <a>
                              <span className="num">{item.date2[1]}</span>
                              <span>{item.date2[0]}</span>
                            </a>
                          </Link>
                        </h5>
                      </div>
                      <div className="cont">
                        <div className="tags">
                       
                        </div>
                        <h4 className="title">
                          <Link href="/blog-details">
                          Our Services

                          </Link>
                        </h4>
                        <p>
                        At Interior Wale we go beyond being mere practitioners of our craft; we are enthusiasts working to evoke emotions and create lasting memories. Witnessing families enjoy something new in their lives brings us immense joy. Interior design to us is more than just a profession its a journey of shared happiness.

                        In Delhi dynamic commercial hub businesses seek the expertise of Commercial Interior Designers to shape workspaces that embody brand identity foster productivity and prioritize employee well-being. Discover the significance  meticulous processes and numerous benefits of these services as we guide you on transforming your commercial space into a hub of innovation and productivity.
                        </p>
                        
                    
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pagination">
                 
                  <span>
                    <Link href="#">2</Link>
                  </span>
                  <span>
                    <Link href="#">
                      <a>
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsList;
