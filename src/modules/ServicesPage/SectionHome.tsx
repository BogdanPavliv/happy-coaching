import { motion } from "framer-motion";
import section_home_img_2 from "../../img/section-home/section-home-img-2.jpg";
import styles from '../../styles/home/index.module.scss';

const SectionHome: React.FC = () => {
  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.home__inner}>
          <div className={styles.home__left}>
            <div className={`suptitle ${styles.page_home__subtitle}`}>
              I can help you in these patricular areas.
            </div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type: "ease-in" }}
              className="title"
            >
              I help people to discover their true potential
            </motion.h1>
            <p className={styles.home__text}>
              I help people to discover their true potential and live a
              fulfilling life... Discover the simple 3 steps that I discovered
              to hack productivity. It just works and it is begin using backed
              by science. Wanna transform your life?
            </p>
          </div>
          <div className={styles.home__right}>
            <motion.img
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
              className={styles.home__img}
              src={section_home_img_2}
              alt="Home image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHome;
