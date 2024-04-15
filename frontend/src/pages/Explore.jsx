import InformationCard from "../components/Info/InformationCard";
import featureImg from "../assets/images/Picture19.png";
import featureImg2 from "../assets/images/Picture5.png";
import icon01 from "../assets/images/Picture11.png";
import icon02 from "../assets/images/Picture18.png";
import icon03 from "../assets/images/Picture20.png";
import aboutImg1 from "../assets/images/Picture16.png";
import aboutCardImg from "../assets/images/about-card.png";
import { Link } from "react-router-dom";
import "../styles/info.css";

const Explore = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl;h-[800px]">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ============ Features Content Start =========== */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Welcome to HealthLink360: Your Personalized Health Journey
                Begins Here
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
            <span>Uncover the Goals You Can Monitor</span>
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
            description="Nutrition management involves maintaining a balanced diet rich in essential nutrients to support overall health and well-being. It's crucial to track nutrition to ensure adequate intake of vitamins, minerals, and macronutrients while avoiding excessive consumption of unhealthy foods. HealthLink360 helps users track their daily food intake, offering insights into nutritional content and meal planning suggestions. By monitoring their nutrition, users can make informed dietary choices and work towards achieving their health goals, whether it's weight management, improved energy levels, or disease prevention."
          />

          <InformationCard
            title="Physical Activity"
            description="Regular physical activity is essential for maintaining cardiovascular health, muscle strength, and flexibility, as well as reducing the risk of chronic diseases such as obesity, diabetes, and hypertension. Tracking physical activity helps individuals ensure they meet recommended exercise guidelines and stay active throughout the day. HealthLink360 provides users with tools to track their exercise routines, set fitness goals, and receive personalized workout recommendations. By monitoring their physical activity levels, users can stay motivated, track progress, and adjust their fitness regimen as needed, ultimately achieving better overall health and fitness."
          />

          <InformationCard
            title="Stress Management (Coming soon)"
            description="Stress management involves adopting strategies to cope with daily stressors and reduce the negative impact of chronic stress on mental and physical health. Tracking stress levels helps individuals identify triggers and implement effective stress-reduction techniques. HealthLink360 offers features such as stress tracking, mindfulness exercises, and relaxation techniques to support users in managing stress effectively. By monitoring their stress levels and practicing stress-reduction activities, users can improve their emotional well-being, enhance resilience, and achieve greater balance in their lives."
          />

          <InformationCard
            title="Environmental Wellness (Coming soon)"
            description="Environmental wellness focuses on creating a healthy living environment that promotes well-being and minimizes exposure to harmful substances or pollutants. It's important to track environmental factors that may affect health, such as air quality, water purity, and exposure to toxins. HealthLink360 provides users with resources and information to assess environmental risks and make informed decisions to protect their health. By tracking environmental wellness indicators and accessing relevant educational content, users can take proactive steps to create a healthier living environment for themselves and their families."
          />

          <InformationCard
            title="Preventative Tips (Coming Soon)"
            description="Preventative tips encompass actionable strategies and guidance aimed at preventing illness, promoting health, and reducing the risk of chronic diseases. It's essential to track preventative tips to empower individuals with the knowledge and resources they need to proactively manage their health. HealthLink360 offers a wealth of preventative tips on various health topics, ranging from nutrition and exercise to disease prevention and management. By providing users with practical advice and actionable recommendations, HealthLink360 helps individuals make informed decisions about their health and adopt healthier lifestyles."
          />

          <InformationCard
            title="Community Resources and Support"
            description="Community resources and support play a vital role in promoting health and well-being by providing individuals with access to social support networks, healthcare services, and community programs. It's important to track community resources to ensure individuals can access the support they need to maintain and improve their health. HealthLink360 connects users with community resources, such as local healthcare providers, support groups, and wellness programs. By providing users with access to community resources and support networks, HealthLink360 helps individuals build social connections, access healthcare services, and engage in activities that promote well-being."
          />
        </div>
      </section>

      <section className="my-[55px] apply_bg py-[50px]">
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Gamifying the Health Experience
            </h2>
            <p className="text__para text-center">
              For the users of HealthLink360, engaging with their health has
              become not just informative but also truly captivating. By
              gamifying the wellness experience, users are no longer passive
              recipients of health advice but active participants in a journey
              towards optimal well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Engaging Users in their Health Journey:
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Imagine Jasmine, a HealthLink360 user, who, upon joining, sets
                  her sights on lowering her risk of hypertension—a condition
                  that runs in her family. Through the app, Jasmine logs her
                  daily activities, from diet to exercise, and health data (BPM,
                  Stress Index, HRV, RPM, SpO2 and more). Majority of her meals
                  logged and every step count milestone reached propels her
                  further along her path, making what once felt like chores now
                  feel like victories. This interactive approach doesn't just
                  educate Jasmine—it enthralls her, making each health-conscious
                  decision more rewarding.
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
                  The power of HealthLink360 lies in its ability to place
                  intricate health data directly into the hands of its users,
                  making them the masters of their destinies. By giving users
                  access to their own health analytics, the app encourages a
                  deeper understanding of how lifestyle choices directly affect
                  health outcomes. Users like Jasmine can see the tangible
                  benefits of their actions, reinforced by the app's rewards
                  system, which is meticulously designed to nudge them towards
                  healthier habits and sustainable changes.
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
                  As Jasmine interacts with HealthLink360, the gamification
                  elements transform her journey, leading to measurable health
                  improvements. Her blood pressure starts to stabilize within a
                  healthier range, her energy levels increase, and she's
                  motivated by the positive feedback loop created by her own
                  data and the app's insights. The clear visualization of her
                  progress keeps her engaged and committed to her wellness
                  goals. HealthLink360 stands as a testament to how innovative
                  engagement through gamification and empowerment through data
                  accessibility can lead to profound behavior change and
                  significantly improved health outcomes. Users are not only
                  guided by HealthLink360; they're motivated, inspired, and
                  driven to become the healthiest versions of themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-[55px]">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ============ Features Content Start =========== */}
            <div className="xl:w-[670px]">
              <h2 className="heading">Reducing Healthcare Costs</h2>
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

      <section className="info-section apply_bg py-[50px]" id="services">
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
            description="At HealthLink360, our AI-powered remote health monitoring technology isn't just innovative—it's a game-changer for healthcare providers, users, and caregivers alike. Seamlessly melding with your current systems or apps, our sophisticated tools are designed to enhance the care continuum, bringing efficiency to the forefront and elevating health outcomes. With HealthLink360, step into the future of healthcare where every piece of data works harmoniously to support comprehensive wellness journeys."
          />

          <InformationCard
            title="Clinical Backed Insights"
            description="At HealthLink360, we are redefining the approach to patient wellness with our AI-driven Coach360 platform, crafted to align with the goals of insurance companies and hospitals. Our predictive analytics capabilities ensure patients lead healthier lives by proactively guiding them towards better health outcomes. This not only enhances patient satisfaction but also substantially reduces healthcare costs and minimizes the strain on hospital resources by decreasing the necessity for frequent visits and extended hospital stays. By integrating Coach360's sophisticated algorithms and cultural intelligence into your systems, we optimize the efficiency of healthcare delivery. We empower patients with personalized health insights, driving down readmission rates, and fostering a healthier population. Partner with HealthLink360, where innovation meets cost-effectiveness, elevating the standard of patient care and operational excellence."
          />

          <InformationCard
            title="Reducing Healthcare Costs"
            description="In a healthcare landscape where cost reduction and improved patient outcomes are paramount, HealthLink360 emerges as a pivotal ally for insurance companies, hospitals, and caregivers. Our platform stands as a beacon of innovation, employing cutting-edge AI to deliver predictive health insights, fostering an ecosystem where preventive care is prioritized, and management of chronic conditions is streamlined. For insurers, HealthLink360's proactive health monitoring translates to fewer claims and reduced payouts for acute health episodes by catching and addressing potential health issues before they escalate. Hospitals benefit from the decreased burden on resources, with fewer emergency admissions and shorter stays, while caregivers are provided with tools to manage patient care effectively, reducing the need for frequent in-person consultations."
          />
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
