import { useState } from "react";
import FsLightbox from "fslightbox-react";
import transform_img from "../../img/section-transform/transform-img.jpg";
import play_button from "../../img/section-video/play-button.svg";

const SectionVideo: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);
  return (
    <section className="video">
      <div className="container">
        <div className="video__wrapper">
          <img className="video__img" src={transform_img} alt="" />
          <a
            className="video__link"
            href="#"
            onClick={() => setToggler(!toggler)}
          >
            <img className="play-btn" src={play_button} alt="" />
          </a>
          <FsLightbox
            toggler={toggler}
            sources={["https://www.youtube.com/watch?v=F6CJtIk457g"]}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionVideo;
