import React from "react";
import aboutImg from "../../assets/images/Picture4.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ============ About Image ============= */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 mt-[50px]">
            <img src={aboutImg} alt="" />
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
    </section>
  );
};

export default About;
