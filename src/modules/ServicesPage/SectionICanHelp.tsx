import coaching_img from "../../img/section-can-help/coaching.svg";
import consultation_img from "../../img/section-can-help/consultation.svg";
import group_img from "../../img/section-can-help/group.svg";
import styles from '../../styles/i-can-help/index.module.scss';

const SectionICanHelp: React.FC = () => {
  return (
    <section className={styles.i_can_help}>
      <div className="container">
        <div className={styles.i_can_help__inner}>
          <div className={styles.i_can_help__top}>
            <div className={styles.i_can_help__top_title_wrapper}>
              <h2 className="section-title">
                I can help you in these particular areas.
              </h2>
            </div>
          </div>
          <div className={styles.i_can_help__bottom}>
            <div className={styles.i_can_help__bottom__grid}>
              <div className={styles.i_can_help__bottom__row}>
                <div className={styles.i_can_help__bottom__item}>
                  <img
                    className={styles.i_can_help__bottom__item_img}
                    src={group_img}
                    alt="Group image"
                  />
                  <h3 className={styles.i_can_help__bottom__item_title}>
                    Group Coaching Sessions
                  </h3>
                  <p className={styles.i_can_help__bottom__item_text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua minim veniam.
                  </p>
                </div>
                <div className={styles.i_can_help__bottom__item}>
                  <img
                    className={styles.i_can_help__bottom__item_img}
                    src={coaching_img}
                    alt="Coaching image"
                  />
                  <h3 className={styles.i_can_help__bottom__item_title}>
                    Online course
                  </h3>
                  <p className={styles.i_can_help__bottom__item_text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua minim veniam.
                  </p>
                </div>
              </div>
              <div className={`${styles.i_can_help__bottom__row} ${styles.i_can_help__bottom__row_transform}`}>
                <div className={styles.i_can_help__bottom__item}>
                  <img
                    className={styles.i_can_help__bottom__item_img}
                    src={consultation_img}
                    alt="Consultation image"
                  />
                  <h3 className={styles.i_can_help__bottom__item_title}>
                    Consultation
                  </h3>
                  <p className={styles.i_can_help__bottom__item_text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua minim veniam.
                  </p>
                </div>
                <div className={styles.i_can_help__bottom__item}>
                  <img
                    className={styles.i_can_help__bottom__item_img}
                    src={coaching_img}
                    alt="Coaching image"
                  />
                  <h3 className={styles.i_can_help__bottom__item_title}>
                    1:1 Coaching
                  </h3>
                  <p className={styles.i_can_help__bottom__item_text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua minim veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionICanHelp;
