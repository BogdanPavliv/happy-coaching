import SectionHome from "../../modules/ExtraSalesPage/SectionHome";
import SectionTransformLife from "../../modules/AboutPage/SectionTransformLife";
import SectionTransform from "../../modules/ExtraSalesPage/SectionTransform";
import SectionVideo from "../../modules/ExtraSalesPage/SectionVideo";
import SectionResults from "../../modules/ExtraSalesPage/SectionResults";
import SectionProgram from "../../modules/ExtraSalesPage/SectionProgram";
import SectionOnlineSession from "../../modules/MainPage/SectionOnlineSession";
import SectionGuarantee from "../../modules/ExtraSalesPage/SectionGuarantee";
import SectionGoodToKnow from "../../modules/ServicesPage/SectionGoodToKnow";
import SectionNotified from "../../modules/MainPage/SectionNotified";

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
