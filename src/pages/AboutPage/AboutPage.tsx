import SectionHome from "../../modules/AboutPage/SectionHome";
import SectionCompanies from "../../modules/AboutPage/SectionCompanies";
import SectionTestimonials from "../../modules/AboutPage/SectionTestimonials";
import SectionTransformLife from "../../modules/AboutPage/SectionTransformLife";
import SectionGoodToKnow from "../../modules/ServicesPage/SectionGoodToKnow";
import SectionNotified from "../../modules/MainPage/SectionNotified";

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
