import Button from "../../components/Button/Button";
import live_life_img_1 from "../../img/section-live-life/live-life-img-1.png";
import live_life_img_2 from "../../img/section-live-life/live-life-img-2.png";
import live_life_img_3 from "../../img/section-live-life/live-life-img-3.png";
import live_life_img_4 from "../../img/section-live-life/live-life-img-4.png";
import live_life_img_5 from "../../img/section-live-life/live-life-img-5.png";
import star_rating_img from "../../img/section-live-life/star.svg";
import styles from '../../styles/live-life/index.module.scss';

const SectionLiveLife: React.FC = () => {
  return (
    <section className={styles.live_life}>
      <div className="container">
        <div className={styles.live_life__wrapper}>
          <div className={styles.live_life__wrapper__content}>
            <h2 className={`section-title ${styles.live_life__title}`}>
              Don’t miss out on my{" "}
              <span>‘Live life at the full potential’</span> free guide
            </h2>
            <p className={styles.live_life__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium.
            </p>
            <div className={styles.live_life__action}>
              <Button enementCenter>Download my free guide</Button>
            </div>
            <div className={styles.live_life__stars__wrapper}>
              <p className={styles.live_life__stars__text}>
                More than 100+ 5 star reviews
              </p>
              <div className={styles.live_life__stars}>
                <img className={styles.live_life__star} src={star_rating_img} alt="Star" />
                <img className={styles.live_life__star} src={star_rating_img} alt="Star" />
                <img className={styles.live_life__star} src={star_rating_img} alt="Star" />
                <img className={styles.live_life__star} src={star_rating_img} alt="Star" />
                <img className={styles.live_life__star} src={star_rating_img} alt="Star" />
              </div>
            </div>
          </div>
          <img className={styles.live_life_img_1} src={live_life_img_1} alt="Live life image" />
          <img className={styles.live_life_img_2} src={live_life_img_2} alt="Live life image" />
          <img className={styles.live_life_img_3} src={live_life_img_3} alt="Live life image" />
          <img className={styles.live_life_img_4} src={live_life_img_4} alt="Live life image" />
          <img className={styles.live_life_img_5} src={live_life_img_5} alt="Live life image" />
        </div>
      </div>
    </section>
  );
};

export default SectionLiveLife;
