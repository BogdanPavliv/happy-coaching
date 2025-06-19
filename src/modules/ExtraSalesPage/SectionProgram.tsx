import styles from '../../styles/program/index.module.scss';

const SectionProgram: React.FC = () => {
  return (
    <section className={styles.program}>
      <div className="container">
        <div className={styles.program__inner}>
          <div className={styles.program__top}>
            <div className={styles.program__top__inner}>
              <div className="tag tag-center">This is not for everyone!</div>
              <h2 className="section-title text-center">
                This program is perfect for you if...
              </h2>
            </div>
          </div>
          <div className={styles.program__bottom}>
            <div className={styles.program__bottom__wrapper}>
              <div className={styles.program__bottom__left}>
                <h4 className={styles.program__bottom__title}>
                  This is <span>NOT</span> for you if...
                </h4>
                <ul className={styles.program__bottom__list}>
                  <li className={`${styles.program__bottom__item} ${styles.unchecked}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li className={`${styles.program__bottom__item} ${styles.unchecked}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li className={`${styles.program__bottom__item} ${styles.unchecked}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li className={`${styles.program__bottom__item} ${styles.unchecked}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                </ul>
              </div>
              <div className={styles.program__bottom__right}>
                <h4 className={styles.program__bottom__title}>
                  This is for you if...
                </h4>
                <ul className={styles.program__bottom__list}>
                  <li className={`${styles.program__bottom__item} ${styles.checked}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li className={`${styles.program__bottom__item} ${styles.checked}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li className={`${styles.program__bottom__item} ${styles.checked}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li className={`${styles.program__bottom__item} ${styles.checked}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProgram;
