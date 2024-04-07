import React from "react";
import heroImg01 from "../assets/images/Picture15.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/Picture7.png";
import icon02 from "../assets/images/Picture6.png";
import icon03 from "../assets/images/Picture9.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      {/* ============ Hero Section =========== */}

      <section className="hero__section pt-[60px] 2xl;h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ========== Hero Content ========== */}

            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Empower Your Path to Wellness with HealthLink360
                </h1>
                <p className="text__para">
                  Discover a revolutionary platform that harnesses your data and
                  cutting-edge technology to provide personalized insights and
                  tools, empowering you to take proactive control of your health
                  and well-being with HealthLink360.
                </p>
                <button className="btn"> Learn More </button>
              </div>

              {/* ============ Hero Section =========== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    40+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <div className="text__para">Years of Experience</div>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    200+
                  </h2>
                  <span className="w-[100px] h-2 bg-pinkColor rounded-full block mt-[-14px]"></span>
                  <div className="text__para">Customers</div>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <div className="text__para">Customer Satisfaction</div>
                </div>
              </div>
            </div>

            {/* ========== Hero Content ========== */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              {/*<div className="mt-[30px]">
                  <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                  <img className="w-full" src={heroImg03} alt="" />
                </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* ============ Hero Section End =========== */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              HealthLink360: Your Link to Better Health
            </h2>
            <p className="text__para text-center">
              Your body is sending you important signals about your health.
              Understand, manage, and get care for symptoms in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Coach360: Take Better Care of Yourself
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  HealthLink360 revolutionizes health management with Coach360
                  for AI-driven coaching and Contactless Vital Monitoring for
                  convenient health tracking.
                </p>
                <Link
                  to="/explore"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Take Control: Your Health Information at Your Fingertips.
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Combining advanced culturally competent care with technology,
                  HealthLink360 promotes positive health behaviors tailored to
                  your unique needs & preferences.
                </p>
                <Link
                  to="/explore"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Experience the Power of Data-Informed Preventative Care
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                HealthLink360 redefines healthcare with proactive, data-driven preventive care, providing users insights for effective health management.
                </p>
                <Link
                  to="/explore"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
