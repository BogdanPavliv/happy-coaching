import guarantee_img from "../../img/section-guarantee/guarantee-img.svg";
import styles from '../../styles/guarantee/index.module.scss';

const SectionGuarantee: React.FC = () => {
  return (
    <section className={styles.guarantee}>
      <div className="container">
        <div className={styles.guarantee__inner}>
          <img className={styles.guarantee__img} src={guarantee_img} alt="Guarantee image" />
          <h4 className={styles.guarantee__title}>Guarantee</h4>
          <p className={styles.guarantee__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionGuarantee;
