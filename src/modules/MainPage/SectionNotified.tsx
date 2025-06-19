import styles from '../../styles/notified/index.module.scss';

const SectionNotified: React.FC = () => {
  return (
    <section className={styles.notified}>
      <div className="container">
        <div className={styles.notified__inner}>
          <div className={styles.notified__left}>
            <h4 className={styles.notified__title}>
              Get notified when I publish new articles
            </h4>
            <p className={styles.notified__text}>
              Stay up to date with the latest news, announcements, and articles.
            </p>
          </div>
          <div className={styles.notified__right}>
            <form className={styles.notified__form} action="#">
              <input
                className={styles.notified__input}
                type="text"
                placeholder="Enter your email"
              />
              <button className={styles.notified__button} type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNotified;
