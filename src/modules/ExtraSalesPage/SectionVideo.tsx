import { useState } from "react";
import FsLightbox from "fslightbox-react";
import transform_img from "../../img/section-transform/transform-img.jpg";
import play_button from "../../img/section-video/play-button.svg";
import styles from '../../styles/video/index.module.scss';

const SectionVideo: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);
  return (
    <section className={styles.video}>
      <div className="container">
        <div className={styles.video__wrapper}>
          <img className={styles.video__img} src={transform_img} alt="Video image" />
          <a
            className={styles.video__link}
            href="#"
            onClick={() => setToggler(!toggler)}
          >
            <img className={styles.play_btn} src={play_button} alt="Play button" />
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
