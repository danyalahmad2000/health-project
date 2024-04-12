import React from "react";
import aboutImg1 from "../../assets/images/Picture4.png";
import aboutImg2 from "../../assets/images/Picture12.png";
import aboutCardImg from "../../assets/images/about-card.png";
import icon01 from "../../assets/images/Picture13.png";
import icon02 from "../../assets/images/Picture11.png";
import icon03 from "../../assets/images/Picture10.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ============ About Image ============= */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-1 lg:order-2 mt-[50px]">
            <img src={aboutImg1} alt="" />
            {/*<div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">*/}
            <div className="absolute z-20 w-[100px] md:w-[200px] top-[-5%] right-[20] md:right-[-14%] lg:right-[50%] ">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* ============ About Content ============= */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">
              Encouraging Proactive Health with HealthLink360
            </h2>
            <p className="text__para">
              HealthLink360 fights the "Maybe it will go away" mindset by
              prioritizing proactive healthcare. Using advanced AI technology,
              we offer personalized insights to help individuals make informed
              health decisions. Our emphasis on preventive care aims to make it
              the norm in healthcare. Join us in reshaping healthcare, one
              informed decision at a time.
            </p>
            <p className="text__para mt-[30px]">
              HealthLink360 focuses on proactive healthcare, providing
              personalized support and early detection strategies to prevent
              chronic conditions. We prioritize diversity and inclusivity,
              minimize environmental impact, and ensure accessibility for all.
            </p>
            <Link to="/explore">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container my-[55px]">
        <div className="flex justify-between space-x-reverse space-x-[170px] gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row-reverse">
          {/* ============ About Image ============= */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] order-1 lg:order-2 mt-[50px]">
            <img src={aboutImg2} alt="" />
          </div>
          {/* ============ About Content ============= */}
          <div className="w-full lg:w-1/2 xl:w-[670px] gap-[50px] order-1 lg:order-2">
            <h2 className="heading">Our Methodology</h2>
            <p className="text__para">
              HealthLink360 is rooted in proactive healthcare and personalized
              support. We understand that traditional healthcare models often
              prioritize treating illnesses rather than preventing them.
              Therefore, our approach emphasizes preventive care by offering
              proactive health recommendations and early detection strategies to
              help users maintain optimal health and prevent chronic conditions.
            </p>
            <p className="text__para mt-[30px]">
              By understanding the specific needs and preferences of diverse
              communities, we aim to reduce health disparities and provide
              accessible and equitable healthcare solutions for all.
            </p>
            <Link to="/explore">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>

      <section className="my-[55px]">
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Values</h2>
            <p className="text__para text-center">
              At HealthLink360, our core values drive our mission. We're
              dedicated to fostering empowerment in health management while
              prioritizing sustainability, diversity, inclusion, and
              accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Commitment to Sustainability
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  We prioritize sustainability to safeguard the planet for
                  future generations. Through eco-friendly operations and
                  initiatives, we minimize our environmental impact, fostering a
                  healthier future for all.
                </p>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Diversity Inclusion & Belonging
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  We value diversity, fostering inclusion for all backgrounds
                  and perspectives. Our commitment enriches our collective
                  experience and drives innovation.
                </p>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Improving Accessibility
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  We prioritize accessibility, ensuring everyone can access health resources through user-friendly interfaces and assistive technology support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
