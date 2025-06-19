import SectionHome from "../../modules/MainPage/SectionHome.tsx";
import SectionCanHelp from "../../modules/MainPage/SectionCanHelp.tsx";
import SectionTestimonials from "../../modules/MainPage/SectionTestimonials.tsx";
import SectionStayMotivated from "../../modules/MainPage/SectionStayMotivated.tsx";
import SectionDontMiss from "../../modules/MainPage/SectionDontMiss.tsx";
import SectionOnlineSession from "../../modules/MainPage/SectionOnlineSession.tsx";
import SectionNotified from "../../modules/MainPage/SectionNotified.tsx";

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
