import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import self_esteem_img from "../../img/section-self-esteem/self-esteem-img.jpg";
import waves_img from "../../img/section-home/waves.svg";
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
              Self Esteem Therapy
            </motion.h1>
            <p className={styles.home__text}>
              I help people to discover their true potential and live a
              fulfilling life... Discover the simple 3 steps that I discovered
              to hack productivity. It just works and it is begin using backed
              by science. Wanna transform your life?
            </p>
            <div className={styles.home__action}>
              <Button enementCenter={false}>Claim your spot</Button>
            </div>
          </div>
          <div className={styles.home__right}>
            <motion.img
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
              className={`${styles.home__img} ${styles.page_home__img}`}
              src={self_esteem_img}
              alt="Home image"
            />
          </div>
          <img className={styles.waves_img} src={waves_img} alt="Waves image" />
        </div>
      </div>
    </section>
  );
};

export default SectionHome;
