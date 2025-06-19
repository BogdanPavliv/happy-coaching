import SectionHome from "../../modules/ExtraSalesPage/SectionHome.tsx";
import SectionTransformLife from "../../modules/AboutPage/SectionTransformLife.tsx";
import SectionTransform from "../../modules/ExtraSalesPage/SectionTransform.tsx";
import SectionVideo from "../../modules/ExtraSalesPage/SectionVideo.tsx";
import SectionResults from "../../modules/ExtraSalesPage/SectionResults.tsx";
import SectionProgram from "../../modules/ExtraSalesPage/SectionProgram.tsx";
import SectionOnlineSession from "../../modules/MainPage/SectionOnlineSession.tsx";
import SectionGuarantee from "../../modules/ExtraSalesPage/SectionGuarantee.tsx";
import SectionGoodToKnow from "../../modules/ServicesPage/SectionGoodToKnow.tsx";
import SectionNotified from "../../modules/MainPage/SectionNotified.tsx";

const ExtraSalesPage = () => {
  return (
    <main className="main">
      <SectionHome />
      <SectionTransformLife />
      <SectionTransform />
      <SectionVideo />
      <SectionResults />
      <SectionProgram />
      <SectionOnlineSession />
      <SectionGuarantee />
      <SectionGoodToKnow />
      <SectionNotified />
    </main>
  );
};

export default ExtraSalesPage;
