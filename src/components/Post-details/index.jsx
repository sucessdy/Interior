/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const PostDetails = () => {
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
                  <h2>Residential Interior Designer Services in Delhi</h2>
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
                    src="/demos/house-22.png"
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
                          Transform your living space in Delhi with our skilled Residential Interior Designers, dedicated to creating a beautifully designed, functional, and personalized home that reflects your unique style..
                          </p>
                        </div>
                        <p>
                        In the heart of India’s bustling capital, where modernity and tradition harmoniously coexist, creating the perfect interior space requires a deep understanding of the city’s unique charm. Our Residential Interior Designer services in Delhi are dedicated to capturing the essence of this vibrant metropolis and infusing it into your home’s design.In this comprehensive guide, we will explore the world of Residential Interior Designer services in Delhi, delving into their significance, the process they follow, the benefits they offer, and how to choose the best one for your project. So, let’s embark on this journey to transform your residential space into a masterpiece.
                        </p>

                        <h6>- Understanding the Role of Residential Interior Designer Services in Delhi
</h6>

                        <p>
                          Delhi, a city known for its diversity, historical significance, and rapid urbanization, presents a unique canvas for interior designers. Here, the essence of tradition meets the innovations of modernity, and this fusion is beautifully encapsulated by Residential Interior Designer services in Delhi.


                        </p>

                        <ul>
                          <li>
                            <span>01</span> Blend traditional elements into modern designs.
                          </li>
                          <li>
                            <span>02</span>Transform compact residences into spacious and comfortable homes.
                          </li>
                          <li>
                            <span>03</span> Ensure year-round comfort&apos; considering Delhi s diverse weather conditions.
                          </li>
                        
                        </ul>

                        <div className="quotes text-center">
                          <p>
                          Elevate Your Living  Embrace Delhi&apos;s Essence with Our Residential Interior Designers.


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
                        Begin your interior designer search in Delhi by thoroughly researching portfolios&apos; client reviews&apos; and past projects. Shortlist designers whose work aligns with your vision. During consultations, assess communication skills&apos;budget compatibility, and request a comprehensive portfolio review for versatility. Validate their professionalism with references and reviews, and finalize by discussing project timelines and establishing a detailed contract for clarity and accountability.
                        </p>
                        <div className="share-info">
                         
                         
                        </div>
                      </div>
                     
                       
                        
                    </div>
                  </div>
                </div>

               
      

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

export default PostDetails;
