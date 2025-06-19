import ready_img from "../../img/section-are-you-ready/ready.svg";
import schedule2_img from "../../img/section-are-you-ready/schedule.svg";
import talk2_img from "../../img/section-are-you-ready/talk.svg";
import award_img from "../../img/section-are-you-ready/award.svg";
import bell_img from "../../img/section-are-you-ready/bell.svg";
import online_img from "../../img/section-are-you-ready/online.svg";
import styles from '../../styles/transform-life/index.module.scss';

const SectionTransformLife: React.FC = () => {
  return (
    <section className={styles.transform_life}>
      <div className="container">
        <div className={styles.transform_life__inner}>
          <div className={styles.transform_life__top}>
            <div className={styles.transform_life__top__inner}>
              <div className="tag tag-center">How does it work?</div>
              <h4 className={styles.transform_life__title}>
                Are you ready to transform your life?
              </h4>
              <p className={styles.transform_life__text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
          </div>
          <div className={styles.transform_life__bottom}>
            <ul className={styles.transform_life__bottom__list}>
              <li className={styles.transform_life__bottom_item}>
                <img
                  className={styles.transform_life__bottom__item_img}
                  src={ready_img}
                  alt=""
                />
                <h4 className={styles.transform_life__bottom__item_title}>
                  Ready to start? Let’s talk!
                </h4>
                <p className={styles.transform_life__bottom__item_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </li>
              <li className={styles.transform_life__bottom_item}>
                <img
                  className={styles.transform_life__bottom__item_img}
                  src={schedule2_img}
                  alt=""
                />
                <h4 className={styles.transform_life__bottom__item_title}>
                  Ready to start? Let’s talk!
                </h4>
                <p className={styles.transform_life__bottom__item_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </li>
              <li className={styles.transform_life__bottom_item}>
                <img
                  className={styles.transform_life__bottom__item_img}
                  src={talk2_img}
                  alt=""
                />
                <h4 className={styles.transform_life__bottom__item_title}>
                  Ready to start? Let’s talk!
                </h4>
                <p className={styles.transform_life__bottom__item_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </li>
              <li className={styles.transform_life__bottom_item}>
                <img
                  className={styles.transform_life__bottom__item_img}
                  src={award_img}
                  alt=""
                />
                <h4 className={styles.transform_life__bottom__item_title}>
                  Ready to start? Let’s talk!
                </h4>
                <p className={styles.transform_life__bottom__item_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </li>
              <li className={styles.transform_life__bottom_item}>
                <img
                  className={styles.transform_life__bottom__item_img}
                  src={bell_img}
                  alt=""
                />
                <h4 className={styles.transform_life__bottom__item_title}>
                  Ready to start? Let’s talk!
                </h4>
                <p className={styles.transform_life__bottom__item_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </li>
              <li className={styles.transform_life__bottom_item}>
                <img
                  className={styles.transform_life__bottom__item_img}
                  src={online_img}
                  alt=""
                />
                <h4 className={styles.transform_life__bottom__item_title}>
                  Ready to start? Let’s talk!
                </h4>
                <p className={styles.transform_life__bottom__item_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTransformLife;
