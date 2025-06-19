import React from "react";
import styles from '../../styles/transform/index.module.scss';

const SectionTransform: React.FC = () => {
  return (
    <section className={styles.transform}>
      <div className="container">
        <div className={styles.transform__inner}>
          <div className={styles.transform__left}>
            <div className="tag">How does it work?</div>
            <h2 className="section-title">
              Are you ready to transform your life?
            </h2>
            <p className={styles.transform__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
          <div className={styles.transform__right}>
            <ul className={styles.transform__right_list}>
              <li className={`${styles.transform__right_item} ${styles.online_white}`}>
                <div className={styles.transform__right_item_content}>
                  <h4 className={styles.transform__right_item_title}>
                    Online consultation
                  </h4>
                  <p className={styles.transform__right_item_text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </li>
              <li className={`${styles.transform__right_item} ${styles.ready_white}`}>
                <div className={styles.transform__right_item_content}>
                  <h4 className={styles.transform__right_item_title}>
                    Ready to start? Let’s talk!
                  </h4>
                  <p className={styles.transform__right_item_text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTransform;
