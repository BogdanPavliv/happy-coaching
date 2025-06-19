import SectionHome from "../../modules/AboutPage/SectionHome.tsx";
import SectionCompanies from "../../modules/AboutPage/SectionCompanies.tsx";
import SectionTestimonials from "../../modules/AboutPage/SectionTestimonials.tsx";
import SectionTransformLife from "../../modules/AboutPage/SectionTransformLife.tsx";
import SectionGoodToKnow from "../../modules/ServicesPage/SectionGoodToKnow.tsx";
import SectionNotified from "../../modules/MainPage/SectionNotified.tsx";

const AboutPage = () => {
  return (
    <main className="main">
      <SectionHome />
      <SectionCompanies />
      <SectionTestimonials />
      <SectionTransformLife />
      <SectionGoodToKnow />
      <SectionNotified />
    </main>
  );
};

export default AboutPage;
