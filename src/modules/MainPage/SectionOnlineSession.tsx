import Button from "../../components/Button/Button";
import online_session_img from "../../img/section-online-session/online-session-img.jpg";
import styles from '../../styles/online-session/index.module.scss';

const SectionOnlineSession: React.FC = () => {
  return (
    <section className={styles.online_session}>
      <div className="container">
        <div className={styles.online_session__inner}>
          <div className={styles.online_session__left}>
            <h4 className={styles.online_session__title}>
              Get 15-Minutes Complimentary online session.
            </h4>
            <p className={styles.online_session__text}>
              Limited Period Offer. Claim Now.
            </p>
            <div className={styles.online_session__action}>
              <Button enementCenter={false}>Book now</Button>
            </div>
          </div>
          <div className={styles.online_session__right}>
            <img
              className={styles.online_session__img}
              src={online_session_img}
              alt="Online session image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOnlineSession;
