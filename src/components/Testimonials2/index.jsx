/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials2 = () => {
  return (
    <section className="testimonials2 bg-blc">
      <div className="container-fluid no-padding">
        <div className="row">
          <div className="col-lg-8 no-padding order2">
            <div className="box">
              <Slider
                className="testimslic-item wow fadeInUp"
                data-wow-delay=".3S"
                {...{
                  dots: true,
                  arrows: false,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 2,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                      },
                    },
                  ],
                }}
              >
                <div className="item">
                  <div className="info">
                    <div className="author">
                      <div className="img-author">
                        <div className="img">
                          <img src="/demos/per.jpeg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <h6 className="author-name">Meena Kaur</h6>
                        <span className="author-details">
                      Businees women
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  The interior design team transformed my space beautifully! Every detail was thoughtfully curated, resulting in a home that reflects my style. Highly recommend. 
                  </p>
                  <div className="qoute-img">
                    <img src="/assets/img/icons/quote-light.svg" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="info">
                    <div className="author">
                      <div className="img-author">
                        <div className="img">
                          <img src="/demos/peopls.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <h6 className="author-name"> Sameer</h6>
                        <span className="author-details">
                       Writer
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  Incredible work by the interior design team! They understood my vision, and the attention to detail was top-notch. My home now feels like a true reflection of me. Thank you!
                  </p>
                  <div className="qoute-img">
                    <img src="/assets/img/icons/quote-light.svg" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="info">
                    <div className="author">
                      <div className="img-author">
                        <div className="img">
                          <img src="/demos/pople.jpeg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <h6 className="author-name">Anik  Jain</h6>
                        <span className="author-details">
                   Software Developer
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  The interior design team transformed my space beautifully! Every detail was thoughtfully curated, resulting in a home that reflects my style. Highly recommend
                  </p>
                  <div className="qoute-img">
                    <img src="/assets/img/icons/quote-light.svg" alt="" />
                  </div>
                </div>
              </Slider>
              <div className="qoute-icon">
                <img src="/assets/img/icons/left-quote.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1 order1">
            <div className="sec-head mt-80 mb-0">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Testimonials
              </h6>
              <Split>
                <h3 className="wow words chars splitting" data-splitting>
                  What <br /> People <br /> Says.
                </h3>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;
