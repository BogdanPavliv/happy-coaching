import { motion } from "framer-motion";
import Button from "../../components/Button/Button.tsx";
import section_home_img_1 from "../../img/section-home/section-home-img-1.jpg";
import waves_img from "../../img/section-home/waves.svg";
import sight_img from "../../img/section-home/sight.svg";
import styles from '../../styles/home/index.module.scss';

const SectionHome: React.FC = () => {
  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.home__inner}>
          <div className={styles.home__left}>
            <div className={`suptitle ${styles.page_home__subtitle}`}>
              Proven strategies backed by science for success.
            </div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type: "ease-in" }}
              className="title"
            >
              Live life at the full potential
            </motion.h1>
            <p className={styles.home__text}>
              I help people to discover their true potential and live a
              fulfilling life... Discover the simple 3 steps that I discovered
              to hack productivity. It just works and it is begin using backed
              by science. Wanna transform your life?
            </p>
            <div className={styles.home__action}>
              <Button enementCenter={false}>Get your free guide now</Button>
            </div>
          </div>
          <div className={styles.home__right}>
            <motion.img
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
              className={`${styles.home__img} ${styles.page_home__img}`}
              src={section_home_img_1}
              alt="Home image"
            />
            <motion.div
              initial={{ x: "14rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
              className={styles.badge}
            >
              <img className={styles.badge__img} src={sight_img} alt="Badge image" />
              <div className={styles.badge__content}>
                <div className={styles.badge__title}>100%</div>
                <div className={styles.badge__subtitle}>Success rate this year</div>
              </div>
            </motion.div>
          </div>
          <img className={styles.waves_img} src={waves_img} alt="Waves image" />
        </div>
      </div>
    </section>
  );
};

export default SectionHome;
