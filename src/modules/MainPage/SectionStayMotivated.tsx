import Button from "../../components/Button/Button";
import section_stay_motivated_img_1 from "../../img/section-stay-motivated/section-stay-motivated-img-1.jpg";
import section_stay_motivated_img_2 from "../../img/section-stay-motivated/section-stay-motivated-img-2.jpg";
import section_stay_motivated_img_3 from "../../img/section-stay-motivated/section-stay-motivated-img-3.jpg";
import styles from '../../styles/stay-motivated/index.module.scss';

const SectionStayMotivated: React.FC = () => {
  return (
    <section className={styles.stay_motivated}>
      <div className="container">
        <div className={styles.stay_motivated__inner}>
          <div className={styles.stay_motivated__top}>
            <h2 className="section-title component-center">
              Stay Motivated, read the weekly blog articles.
            </h2>
          </div>
          <div className={styles.stay_motivated__middle}>
            <ul className={styles.stay_motivated__items}>
              <li className={styles.stay_motivated__item}>
                <img
                  className={styles.stay_motivated__item__img}
                  src={section_stay_motivated_img_1}
                  alt="Stay motivated image"
                />
                <div className={styles.stay_motivated__item__content}>
                  <h4 className={styles.stay_motivated__item__title}>
                    Balancing your love and work life.
                  </h4>
                  <p className={styles.stay_motivated__item__text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua minim veniam.
                  </p>
                </div>
              </li>
              <li className={styles.stay_motivated__item}>
                <img
                  className={styles.stay_motivated__item__img}
                  src={section_stay_motivated_img_2}
                  alt="Stay motivated image"
                />
                <div className={styles.stay_motivated__item__content}>
                  <h4 className={styles.stay_motivated__item__title}>
                    A short break from Social Media is important.
                  </h4>
                  <p className={styles.stay_motivated__item__text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua minim veniam.
                  </p>
                </div>
              </li>
              <li className={styles.stay_motivated__item}>
                <img
                  className={styles.stay_motivated__item__img}
                  src={section_stay_motivated_img_3}
                  alt="Stay motivated image"
                />
                <div className={styles.stay_motivated__item__content}>
                  <h4 className={styles.stay_motivated__item__title}>
                    How to be 1% Better Every Day
                  </h4>
                  <p className={styles.stay_motivated__item__text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua minim veniam.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.stay_motivated__bottom}>
            <div className={styles.stay_motivated__action}>
              <Button enementCenter>Read more blogs</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionStayMotivated;
