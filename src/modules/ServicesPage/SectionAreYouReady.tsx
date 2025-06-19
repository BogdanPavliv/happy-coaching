import are_you_ready_img from "../../img/section-are-you-ready/are-you-ready-img.jpg";
import styles from '../../styles/are-you-ready/index.module.scss';

const SectionAreYouReady: React.FC = () => {
  return (
    <section className={styles.are_you_ready}>
      <div className="container">
        <div className={styles.are_you_ready__inner}>
          <div className={styles.are_you_ready__top}>
            <div className={styles.are_you_ready__top_inner}>
              <div className={styles.tag}>How does it work?</div>
              <h2 className="section-title">
                Are you ready to transform your life?
              </h2>
              <p className={styles.are_you_ready__text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
          </div>
          <div className={styles.are_you_ready__bottom}>
            <div className={styles.are_you_ready__bottom__inner}>
              <div className={styles.are_you_ready__bottom__left}>
                <ul className={styles.are_you_ready__bottom__list}>
                  <li className={`${styles.are_you_ready__bottom__item} ${styles.talk}`}>
                    <div className={styles.are_you_ready__bottom__item_content}>
                      <h4 className={styles.are_you_ready__bottom__item_title}>
                        Talk to me first
                      </h4>
                      <p className={styles.are_you_ready__bottom__item_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </li>
                  <li className={`${styles.are_you_ready__bottom__item} ${styles.schedule}`}>
                    <div className={styles.are_you_ready__bottom__item_content}>
                      <h4 className={styles.are_you_ready__bottom__item_title}>
                        Schedule a meeting
                      </h4>
                      <p className={styles.are_you_ready__bottom__item_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </li>
                  <li className={`${styles.are_you_ready__bottom__item} ${styles.online}`}>
                    <div className={styles.are_you_ready__bottom__item_content}>
                      <h4 className={styles.are_you_ready__bottom__item_title}>
                        Online consultation
                      </h4>
                      <p className={styles.are_you_ready__bottom__item_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </li>
                  <li className={`${styles.are_you_ready__bottom__item} ${styles.ready}`}>
                    <div className={styles.are_you_ready__bottom__item_content}>
                      <h4 className={styles.are_you_ready__bottom__item_title}>
                        Ready to start? Let’s talk!
                      </h4>
                      <p className={styles.are_you_ready__bottom__item_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.are_you_ready__bottom__right}>
                <img
                  className={styles.are_you_ready__bottom__img}
                  src={are_you_ready_img}
                  alt="Are you ready image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAreYouReady;
