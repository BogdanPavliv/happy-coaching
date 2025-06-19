import coaching_img from "../../img/section-can-help/coaching.svg";
import consultation_img from "../../img/section-can-help/consultation.svg";
import group_img from "../../img/section-can-help/group.svg";
import styles from '../../styles/can-help/index.module.scss';

const SectionCanHelp: React.FC = () => {
  return (
    <section className={styles.can_help}>
      <div className="container">
        <div className={styles.can_help__inner}>
          <div className={styles.can_help__top}>
            <div className={styles.can_help__top__left}>
              <h2 className="section-title">
                I can help you in these particular areas.
              </h2>
            </div>
            <div className={styles.can_help__top__right}>
              <p className={styles.can_help__top__right_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
              <p className={styles.can_help__top__right_text}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className={styles.can_help__bottom}>
            <ul className={styles.can_help__bottom__grid}>
              <li className={styles.can_help__bottom__item}>
                <img
                  className={styles.can_help__bottom__item_img}
                  src={coaching_img}
                  alt=""
                />
                <h3 className={styles.can_help__bottom__item_title}>1:1 Coaching</h3>
                <p className={styles.can_help__bottom__item_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  minim veniam.
                </p>
              </li>
              <li className={styles.can_help__bottom__item}>
                <img
                  className={styles.can_help__bottom__item_img}
                  src={consultation_img}
                  alt=""
                />
                <h3 className={styles.can_help__bottom__item_title}>Consultation</h3>
                <p className={styles.can_help__bottom__item_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  minim veniam.
                </p>
              </li>
              <li className={styles.can_help__bottom__item}>
                <img
                  className={styles.can_help__bottom__item_img}
                  src={group_img}
                  alt=""
                />
                <h3 className={styles.can_help__bottom__item_title}>
                  Group Coaching Sessions
                </h3>
                <p className={styles.can_help__bottom__item_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  minim veniam.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCanHelp;
