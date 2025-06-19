import Button from "../../components/Button/Button.tsx";
import are_you_ready_img from "../../img/section-dont-miss/are-you-ready-img.jpg";
import styles from '../../styles/dont-miss/index.module.scss';

const SectionDontMiss: React.FC = () => {
  return (
    <section className={styles.dont_miss}>
      <div className="container">
        <div className={styles.dont_miss__inner}>
          <div className={styles.dont_miss__left}>
            <h2 className="section-title">
              Don’t miss out on my ‘Live life at the full potential’ free guide
            </h2>
            <div className={styles.dont_miss__text__wrapper}>
              <p className={styles.dont_miss__text__top}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
              <p className={styles.dont_miss__text__bottom}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className={styles.dont_miss__action}>
              <Button enementCenter={false}>Get your free guide now</Button>
            </div>
          </div>
          <div className={styles.dont_miss__right}>
            <div className={styles.dont_miss__img__wrapper}>
              <img className={styles.dont_miss__img} src={are_you_ready_img} alt="" />
              <div className={styles.circle}>Free guide!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDontMiss;
