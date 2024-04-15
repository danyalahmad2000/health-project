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
      <div className="apply_bg">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/* ============ About Image ============= */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-1 lg:order-2 mt-[80px]">
              <img src={aboutImg1} alt="" />
              {/*<div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">*/}
              <div className="absolute z-20 w-[100px] md:w-[200px] top-[-5%] right-[20] md:right-[-14%] lg:right-[50%] ">
                <img src={aboutCardImg} alt="" />
              </div>
            </div>
            {/* ============ About Content ============= */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className="heading pt-[50px]">
                Encouraging Proactive Health with HealthLink360
              </h2>
              <p className="text__para">
                At HealthLink360, we recognize the pitfalls of the "Maybe it
                will go away" approach to health. Ignoring symptoms and delaying
                preventive care can lead to serious consequences. With the
                advancements in technology that connect data with information,
                we provide individuals with valuable insights to make better
                decisions about their health.
              </p>
              <p className="text__para">
                Our commitment lies in empowering individuals to take daily
                proactive steps towards their well-being. We leverage advanced
                AI technology to provide personalized health coaching and
                support, ensuring that each user receives tailored
                recommendations based on their unique health profile.
              </p>
              <p className="text__para">
                With HealthLink360, users gain can take control of their health
                journey, and take strides to a future where preventive care is
                the norm, not the exception.
              </p>
              <p className="text__para">
                Join us in reshaping the landscape of healthcare, one informed
                decision at a time.
              </p>
              <Link to="/explore">
                <button className="btn">Learn More</button>
              </Link>
            </div>
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
              At HealthLink360, our core values guide everything we do. We are
              committed to creating a platform that not only empowers
              individuals to take control of their health but also embodies our
              dedication to sustainability, diversity, inclusion, and
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
                  We recognize the importance of protecting our planet for
                  future generations. That's why we are committed to
                  incorporating sustainable practices into our operations,
                  minimizing our environmental footprint, and promoting
                  eco-friendly initiatives wherever possible. By prioritizing
                  sustainability, we aim to contribute to a healthier planet and
                  a healthier future for all.
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
                  We celebrate the diversity of our community and believe that
                  every individual deserves to feel valued, respected, and
                  included. We are committed to fostering an inclusive
                  environment where people of all backgrounds, identities, and
                  perspectives can thrive. By embracing diversity and promoting
                  a sense of belonging, we enrich our collective experience and
                  drive innovation in everything we do.
                </p>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Accessibility
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  We are dedicated to ensuring that our platform is accessible
                  to everyone, regardless of their abilities or circumstances.
                  Accessibility is not just about compliance—it's about ensuring
                  that all individuals have equal access to our services and
                  resources. From designing user-friendly interfaces to
                  providing support for assistive technologies, we are committed
                  to making health and wellness accessible for all.
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
