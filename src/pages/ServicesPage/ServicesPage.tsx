import SectionHome from "../../modules/ServicesPage/SectionHome.tsx";
import SectionICanHelp from "../../modules/ServicesPage/SectionICanHelp.tsx";
import SectionAreYouReady from "../../modules/ServicesPage/SectionAreYouReady.tsx";
import SectionGoodToKnow from "../../modules/ServicesPage/SectionGoodToKnow.tsx";
import SectionNotified from "../../modules/MainPage/SectionNotified.tsx";

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
