import SectionHome from "../../modules/ServicesPage/SectionHome";
import SectionICanHelp from "../../modules/ServicesPage/SectionICanHelp";
import SectionAreYouReady from "../../modules/ServicesPage/SectionAreYouReady";
import SectionGoodToKnow from "../../modules/ServicesPage/SectionGoodToKnow";
import SectionNotified from "../../modules/MainPage/SectionNotified";

const ServicesPage = () => {
  return (
    <main className="main">
      <SectionHome />
      <SectionICanHelp />
      <SectionAreYouReady />
      <SectionGoodToKnow />
      <SectionNotified />
    </main>
  );
};

export default ServicesPage;
