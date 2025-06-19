import SectionResultsSpeak from "../../modules/FreeGuidePage/SectionResultsSpeak";
import SectionNotified from "../../modules/MainPage/SectionNotified.tsx";
import SectionResults from "../../modules/ExtraSalesPage/SectionResults.tsx";
import SectionTransform from "../../modules/ExtraSalesPage/SectionTransform.tsx";
import SectionVideo from "../../modules/ExtraSalesPage/SectionVideo.tsx";
import SectionLiveLife from "../../modules/FreeGuidePage/SectionLiveLife.tsx";

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
