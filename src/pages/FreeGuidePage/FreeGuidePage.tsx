import SectionResultsSpeak from "../../modules/FreeGuidePage/SectionResultsSpeak";
import SectionNotified from "../../modules/MainPage/SectionNotified";
import SectionResults from "../../modules/ExtraSalesPage/SectionResults";
import SectionTransform from "../../modules/ExtraSalesPage/SectionTransform";
import SectionVideo from "../../modules/ExtraSalesPage/SectionVideo";
import SectionLiveLife from "../../modules/FreeGuidePage/SectionLiveLife";

const FreeGuidePage = () => {
  return (
    <main className="main">
      <SectionResultsSpeak />
      <SectionResults />
      <SectionTransform />
      <SectionVideo />
      <SectionLiveLife />
      <SectionNotified />
    </main>
  );
};

export default FreeGuidePage;
