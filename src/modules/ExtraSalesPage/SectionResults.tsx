import Button from "../../components/Button/Button";
import results_img from "../../img/section-results/results-img.jpg";
import star_img from "../../img/section-results/star.svg";
import styles from '../../styles/results/index.module.scss';

const SectionResults: React.FC = () => {
  return (
    <section className={styles.results}>
      <div className="container">
        <div className={styles.results__top}>
          <div className={styles.results__top__wrapper}>
            <div className={styles.results__top__content}>
              <div className="tag">Testimonials</div>
              <h2 className="section-title">
                Results that speak for themselves
              </h2>
            </div>
            <div className={styles.results__top__action}>
              <Button enementCenter={false}>Get started</Button>
            </div>
          </div>
        </div>
        <div className={styles.results__bottom}>
          <div className={styles.results__cards}>
            <div className={styles.results__card}>
              <div className={styles.results__card__response}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </div>
              <img className={styles.results__card__img} src={results_img} alt="Results image" />
              <div className={styles.results__card__name}>Naam</div>
              <div className={styles.results__card__role}>Bedrijf</div>
              <div className={styles.results__card__stars}>
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
              </div>
            </div>
            <div className={styles.results__card}>
              <div className={styles.results__card__response}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </div>
              <img className={styles.results__card__img} src={results_img} alt="Results image" />
              <div className={styles.results__card__name}>Naam</div>
              <div className={styles.results__card__role}>Bedrijf</div>
              <div className={styles.results__card__stars}>
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
              </div>
            </div>
            <div className={styles.results__card}>
              <div className={styles.results__card__response}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </div>
              <img className={styles.results__card__img} src={results_img} alt="Results image" />
              <div className={styles.results__card__name}>Naam</div>
              <div className={styles.results__card__role}>Bedrijf</div>
              <div className={styles.results__card__stars}>
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
              </div>
            </div>
            <div className={styles.results__card}>
              <div className={styles.results__card__response}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </div>
              <img className={styles.results__card__img} src={results_img} alt="Results image" />
              <div className={styles.results__card__name}>Naam</div>
              <div className={styles.results__card__role}>Bedrijf</div>
              <div className={styles.results__card__stars}>
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
                <img className={styles.results__card__star} src={star_img} alt="Star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionResults;
