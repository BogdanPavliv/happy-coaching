import SectionHome from "../../modules/MainPage/SectionHome";
import SectionCanHelp from "../../modules/MainPage/SectionCanHelp";
import SectionTestimonials from "../../modules/MainPage/SectionTestimonials";
import SectionStayMotivated from "../../modules/MainPage/SectionStayMotivated";
import SectionDontMiss from "../../modules/MainPage/SectionDontMiss";
import SectionOnlineSession from "../../modules/MainPage/SectionOnlineSession";
import SectionNotified from "../../modules/MainPage/SectionNotified";

const MainPage = () => {
  return (
    <main className="main">
      <SectionHome />
      <SectionCanHelp />
      <SectionTestimonials />
      <SectionStayMotivated />
      <SectionDontMiss />
      <SectionOnlineSession />
      <SectionNotified />
    </main>
  );
};

export default MainPage;
