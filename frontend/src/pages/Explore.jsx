import InformationCard from "../components/Info/InformationCard";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import featureImg from "../assets/images/Picture19.png";
import featureImg2 from "../assets/images/Picture5.png";
import icon01 from "../assets/images/Picture11.png";
import icon02 from "../assets/images/Picture18.png";
import icon03 from "../assets/images/Picture20.png";
import aboutImg1 from "../assets/images/Picture12.png";
import aboutCardImg from "../assets/images/about-card.png";
import { Link } from "react-router-dom";
import "../styles/info.css";

const Explore = () => {
  return (
    <>
      <section className="my-[55px]">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ============ Features Content Start =========== */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Your Personalized Health Journey Begins With Us
              </h2>
              <p className="text__para">
                We believe that proactive healthcare starts with understanding
                your unique health profile and strategically guiding your
                wellness journey. Our platform utilizes advanced data collection
                techniques and AI analysis to deliver tailored recommendations
                and proactive interventions designed to optimize your health and
                well-being.
              </p>
              <Link to="/insights">
                <button className="btn">Join Our Waitlist</button>
              </Link>
            </div>
            {/* ============ Features Content End =========== */}

            {/* ============ Features Image Start =========== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
            </div>
            {/* ============ Features Image End =========== */}
          </div>
        </div>
      </section>

      <section className="info-section" id="services">
        <div className="info-title-content">
          <h3 className="info-title mb-16">
            <span>What we do at HealthLink360</span>
          </h3>
          <p className="text__para">
            We believe that proactive healthcare starts with understanding your
            unique health profile and strategically guiding your wellness
            journey. Our platform utilizes advanced data collection techniques
            and AI analysis to deliver tailored recommendations and proactive
            interventions designed to optimize your health and well-being.
          </p>
        </div>

        <div className="info-cards-content">
          <InformationCard
            title="Nutrition Management"
            description="Nutrition management involves maintaining a balanced diet rich in essential nutrients for overall health. HealthLink360 assists users in tracking daily food intake, offering insights and meal planning suggestions to ensure adequate intake of vitamins, minerals, and macro-nutrients while avoiding unhealthy foods."
          />

          <InformationCard
            title="Physical Activity"
            description="Regular physical activity is crucial for cardiovascular health and disease prevention. HealthLink360 helps users track exercise routines, set fitness goals, and receive personalized workout recommendations to meet recommended guidelines and improve overall fitness levels."
          />

          <InformationCard
            title="Resources and Support"
            description="Community resources and support are essential for promoting health and well-being. HealthLink360 connects users with local healthcare providers, support groups, and wellness programs to build social connections, access healthcare services, and engage in activities that promote well-being."
          />

          <InformationCard
            title="Preventative Tips (Coming Soon)"
            description="Preventative tips offer actionable strategies for preventing illness and reducing the risk of chronic diseases. HealthLink360 provides practical advice on nutrition, exercise, disease prevention, and management to empower users to make informed decisions about their health and adopt healthier lifestyles."
          />

          <InformationCard
            title="Stress Management (Coming soon)"
            description="Stress management involves adopting strategies to cope with daily stressors and reduce the negative impact of chronic stress. HealthLink360 offers stress tracking, mindfulness exercises, and relaxation techniques to help users manage stress effectively, improve emotional well-being, and enhance resilience."
          />

          <InformationCard
            title="Environmental Wellness (Coming soon)"
            description="Environmental wellness focuses on creating a healthy living environment and minimizing exposure to harmful substances or pollutants. HealthLink360 provides resources to assess environmental risks and make informed decisions to protect health, including monitoring air quality, water purity, and toxin exposure."
          />
        </div>
      </section>

      <section className="my-[55px]">
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Health Gamification</h2>
            <p className="text__para text-center">
              HealthLink360 users now engage actively, thanks to gamified
              wellness, turning passive advice into an informative, captivating
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Health Journey Engagement
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Jasmine, a HealthLink360 user, works on reducing family
                  hypertension risk. She logs activities, tracks metrics, and
                  celebrates milestones. This interactive approach educates and
                  motivates, making healthy choices rewarding.
                </p>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Empowering Users with Data
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  HealthLink360 empowers users with detailed health data,
                  putting control in their hands. Access to personal analytics
                  fosters understanding of lifestyle impacts on health. Jasmine
                  and others benefit from the app's rewards system, nudging them
                  toward healthier habits and lasting changes.
                </p>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Realizing Wellness Goals
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  HealthLink360 transforms Jasmine's journey with gamification,
                  leading to measurable improvements like stabilized blood
                  pressure and increased energy. Positive feedback and clear
                  progress visualization keep her committed to wellness goals,
                  showcasing the power of gamification in driving behavior
                  change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section" id="services">
        <div className="info-title-content">
          <h3 className="info-title mb-16">
            <span>For Providers</span>
          </h3>
          <p className="text__para">
            We believe that proactive healthcare starts with understanding your
            unique health profile and strategically guiding your wellness
            journey. Our platform utilizes advanced data collection techniques
            and AI analysis to deliver tailored recommendations and proactive
            interventions designed to optimize your health and well-being.
          </p>
        </div>

        <div className="info-cards-content">
          <InformationCard
            title="Remote Health Monitoring"
            description="At HealthLink360, our AI-powered remote health monitoring tech is a game-changer for providers, users, and caregivers. Seamlessly integrating with existing systems, our tools enhance care, prioritize efficiency, and elevate outcomes. Step into the future of healthcare with HealthLink360, where data supports holistic wellness journeys."
          />

          <InformationCard
            title="Clinical Backed Insights"
            description="At HealthLink360, our AI-driven Coach360 platform redefines patient wellness, aligning with insurance companies' and hospitals' objectives. Predictive analytics guide patients to better health, reducing costs and resource strain. Integration optimizes efficiency, empowering patients with personalized insights for improved outcomes. Partner with us for innovation, cost-effectiveness, and elevated care."
          />

          <InformationCard
            title="Reducing Healthcare Costs"
            description="At HealthLink360, our AI-driven Coach360 platform redefines patient wellness, aligning with insurance companies' and hospitals' objectives. Predictive analytics guide patients to better health, reducing costs and resource strain. Integration optimizes efficiency, empowering patients with personalized insights for improved outcomes. Partner with us for innovation, cost-effectiveness, and elevated care."
          />
        </div>
      </section>

      <section className="my-[55px]">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ============ Features Content Start =========== */}
            <div className="xl:w-[670px]">
              <h2 className="heading">Implementing Cost Reduction Strategies</h2>
              <p className="text__para">
                For insurers, HealthLink360's proactive health monitoring
                translates to fewer claims and reduced payouts for acute health
                episodes by catching and addressing potential health issues
                before they escalate. Hospitals benefit from the decreased
                burden on resources, with fewer emergency admissions and shorter
                stays, while caregivers are provided with tools to manage
                patient care effectively, reducing the need for frequent
                in-person consultations.
              </p>
              <Link to="/insights">
                <button className="btn">Join Our Waitlist</button>
              </Link>
            </div>
            {/* ============ Features Content End =========== */}

            {/* ============ Features Image Start =========== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg2} className="w-3/4" alt="" />
            </div>
            {/* ============ Features Image End =========== */}
          </div>
        </div>
      </section>

      <section className="my-[55px]">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/* ============ About Image ============= */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-1 lg:order-2 mt-[50px]">
              <img src={aboutImg1} alt="" />
            </div>
            {/* ============ About Content ============= */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className="heading">Promoting Better Health Outcomes</h2>
              <p className="text__para">
                HealthLink360 not only articulates potential health risks but
                also empowers patients to take charge of their health with
                personalized, culturally-competent recommendations. This
                approach has shown to improve adherence to treatment plans and
                lifestyle changes, leading to better health outcomes. With
                patients more engaged in their health journey, insurers see a
                decline in serious health incidents, hospitals witness improved
                patient recovery rates, and caregivers experience streamlined
                care coordination.
              </p>
              <p className="text__para mt-[30px]">
                In essence, HealthLink360 is not just a tool but a
                transformation in healthcare delivery, aligning the interests of
                all stakeholders in the pursuit of a healthier, cost-effective
                future.
              </p>
              <Link to="/insights">
                <button className="btn">Join our Waitlist</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
