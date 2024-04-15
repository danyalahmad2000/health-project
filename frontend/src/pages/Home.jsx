import heroImg01 from "../assets/images/Picture15.png";
import icon01 from "../assets/images/Picture7.png";
import icon02 from "../assets/images/Picture6.png";
import icon03 from "../assets/images/Picture9.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* ============ Hero Section Start =========== */}
      <section className="hero__section pt-[60px] 2xl;h-[800px]" id="home">
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
                <Link to="/explore">
                  <button className="btn">Learn More</button>
                </Link>
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
            </div>
          </div>
        </div>
      </section>
      {/* ============ Hero Section End =========== */}

      {/* ============ How it works Section Start =========== */}
      <section className="my-[55px]">
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Link to Better Health with HealthLink360
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
                  HealthLink360 redefines healthcare with proactive, data-driven
                  preventive care, providing users insights for effective health
                  management.
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
      {/* ============ How it works Section End =========== */}

      <About />

      {/* ============ Features Section Start =========== */}
      <section className="my-[55px]">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ============ Features Content Start =========== */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Fostering Community Health with HealthLink360.
              </h2>
              <p className="text__para">What You’ll Get:</p>
              <ul className="pl-4">
                <li className="text__para">1. Collaborative Partner</li>
                <li className="text__para">2. Culture Centric Organization</li>
                <li className="text__para">3. Mission-Driven Team</li>
                <Link to="/insights">
                  <button className="btn">Learn More</button>
                </Link>
              </ul>
            </div>
            {/* ============ Features Content End =========== */}

            {/* ============ Features Image Start =========== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor"></h4>
                </div>
              </div>
            </div>
            {/* ============ Features Image End =========== */}
          </div>
        </div>
      </section>

      {/* ============ Features Section End =========== */}
      {/* ============ Testimonial Section Start =========== */}
      <section className="my-[55px]">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our users say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* ============ Testimonial Section End =========== */}
    </>
  );
};

export default Home;
