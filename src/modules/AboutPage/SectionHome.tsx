import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import page_about_img from "../../img/page-about/page-about-img.jpg";
import schedule_img from "../../img/page-about/schedule.svg";
import talk_img from "../../img/page-about/talk.svg";
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
              src={page_about_img}
              alt="Home image"
            />
            <motion.div
              initial={{ x: "14rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
              className={styles.badge_talk}
            >
              <img className={styles.badge_talk__img} src={talk_img} alt="Badge talk image" />
              <div className={styles.badge_talk__content}>
                <div className={styles.badge_talk__title}>More than 250+</div>
                <div className={styles.badge_talk__subtitle}>Online Sessions</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "14rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
              className={styles.badge_schedule}
            >
              <img className={styles.badge_schedule__img} src={schedule_img} alt="Badge schedule image" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHome;
