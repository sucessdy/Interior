/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const ServicePost = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);
  return (
    <>
      <section className="blog-pg single section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="title-head">
                  <h2>Commercial Interior Designers Services in Delhi</h2>
                  <div className="info">
                    <p>
                      <Link href="#">Our Service</Link>/
                      <Link href="#"> Modern Houses</Link>/
                      <Link href="#"> </Link>
                    </p>
                  </div>
                </div>
                <div className="img main-img">
                  <img
                    src="/demos/houseq.jpg"
                    alt=""
                    className="thumparallax"
                  />
                </div>
                <div className="content pt-20">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        <div className="spacial">
                          <p>
                          In the bustling heart of India, Delhi’s commercial landscape is as diverse and vibrant as the city itself. To thrive in this competitive environment, businesses must create workspaces that not only reflect their brand identity but also enhance productivity and employee well-being. This is where COMMERCIAL INTERIOR DESIGNERS services in Delhi come into play, offering tailored solutions that combine aesthetics with functionality to redefine your workspace.


                          </p>
                        </div>
                        <p>
                        In this comprehensive guide, we’ll explore the world of COMMERCIAL INTERIOR DESIGNERS services in Delhi, shedding light on their significance, the meticulous processes they follow, the manifold benefits they offer, and how to choose the best service provider for your project. Let’s embark on this journey to transform your commercial space into a haven of innovation and productivity.


                        </p>

                        <h6>- Transforming Workspaces in Delhi
</h6>

                        <p>
                        COMMERCIAL INTERIOR DESIGNERS services in Delhi encompass a wide range of specialized solutions aimed at creating visually appealing, functional, and ergonomic work environments for businesses. These services go beyond surface aesthetics, delving deep into the optimization of space, lighting, acoustics, and furniture to align with a company’s goals and values.

i


                        </p>

                        <ul>
                          <li>
                            <span>01</span> Productivity Boost Through Design

                          </li>
                          <li>
                            <span>02</span>Brand Identity Reflection in Space

                          </li>
                          <li>
                            <span>03</span> Cost-Efficient and Smart Design
                         </li>
                        </ul>

                        <div className="quotes text-center">
                          <p>
                          The Intricate Process of COMMERCIAL INTERIOR DESIGNERS Services in Delhi
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-10">
                              <img src="/demos/house.png" alt="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-10">
                              <img src="/demos/house01.png" alt="" />
                            </div>
                          </div>
                        </div>
                        <p>
                        Embarking on a journey with COMMERCIAL INTERIOR DESIGNERS in Delhi involves an initial needs assessment to understand business goals and brand identity. Once the vision is clear, designers develop a concept using mood boards and 3D renderings. The meticulous selection of materials follows, considering both design and budget. During execution, designers manage construction and installations, ensuring seamless realization of the design vision. Additionally, the procurement of furniture and equipment is carefully curated for functionality and employee comfort, completing the transformation of your commercial space.
                        </p>
                        <div className="share-info">
                          {/* <div className="social">
                            <Link href="#">
                              <a>
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </Link>
                            <Link href="#">
                              <a>
                                <i className="fab fa-twitter"></i>
                              </a>
                            </Link>
                            <Link href="#">
                              <a>
                                <i className="fab fa-behance"></i>
                              </a>
                            </Link>
                          </div> */}
                          {/* <div className="tags">
                            <Link href="#">Web</Link>,
                            <Link href="#">Themeforest</Link>,
                            <Link href="#">ThemesCamp</Link>
                          </div> */}
                        </div>
                      </div>
                      {/* <div className="author">
                        <div className="author-img">
                          <img src="/assets/img/blog/01.jpg" alt="" />
                        </div>
                        <div className="info">
                          <h6>
                            <span>author :</span> Jorden Griffin
                          </h6>
                          <p>
                            the main component of a healthy environment for self
                            esteem is that it needs be nurturing. The main
                            compont of a healthy environment.
                          </p>
                          <div className="social">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                              <i className="fab fa-behance"></i>
                            </a>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* <div className="pagination">
                  <span>
                    <Link href="#">Prev Post</Link>
                  </span>
                  <span className="icon">
                    <Link href="#">
                      <a>
                        <i className="fas fa-th-large"></i>
                      </a>
                    </Link>
                  </span>
                  <span className="text-right">
                    <Link href="#">Next Post</Link>
                  </span>
                </div> */}

                {/* <div className="comments-area">
                  <h5>Comments :</h5>
                  <div className="item">
                    <div className="comment-img">
                      <img src="/assets/img/blog/01.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        Jorden Griffin<span> 6 Aug 2022</span>
                      </h6>
                      <span className="replay">
                        <Link href="#">
                          <a>
                            Replay <i className="fas fa-reply"></i>
                          </a>
                        </Link>
                      </span>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                    </div>
                  </div>
                  <div className="item relped">
                    <div className="comment-img">
                      <img src="/assets/img/blog/01.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        Jorden Griffin<span> 6 Aug 2022</span>
                      </h6>
                      <span className="replay">
                        <Link href="#">
                          <a>
                            Replay <i className="fas fa-reply"></i>
                          </a>
                        </Link>
                      </span>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="comment-img">
                      <img src="/assets/img/blog/01.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        Jorden Griffin<span> 6 Aug 2022</span>
                      </h6>
                      <span className="replay">
                        <Link href="#">
                          <a>
                            Replay <i className="fas fa-reply"></i>
                          </a>
                        </Link>
                      </span>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                    </div>
                  </div>
                </div> */}

                <div className="comment-form">
                  <h5>Add Comment :</h5>
                  <div className="form">
                    <form action="">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <textarea placeholder="Your Comment"></textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" placeholder="Your Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="email" placeholder="Your Email" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <button className="btn-curve btn-blc btn-lg">
                              <span>Submit</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePost;
