import company_img_1 from "../../img/section-companies/company-img-1.png";
import company_img_2 from "../../img/section-companies/company-img-2.png";
import company_img_3 from "../../img/section-companies/company-img-3.png";
import company_img_4 from "../../img/section-companies/company-img-4.png";
import company_img_5 from "../../img/section-companies/company-img-5.png";
import styles from '../../styles/companies/index.module.scss';

const SectionCompanies: React.FC = () => {
  return (
    <section className={styles.companies}>
      <div className="container">
        <div className={styles.companies__inner}>
          <div className={styles.companies__top}>
            <div className={`suptitle ${styles.companies__subtitle}`}>
              Proven strategies backed by science for success.
            </div>
          </div>
          <div className={styles.companies__bottom}>
            <ul className={styles.companies__items}>
              <li className={styles.companies__item}>
                <a className={styles.companies__link} href="#">
                  <img className={styles.companies__img} src={company_img_1} alt="Company image" />
                </a>
              </li>
              <li className={styles.companies__item}>
                <a className={styles.companies__link} href="#">
                  <img className={styles.companies__img} src={company_img_2} alt="Company image" />
                </a>
              </li>
              <li className={styles.companies__item}>
                <a className={styles.companies__link} href="#">
                  <img className={styles.companies__img} src={company_img_3} alt="Company image" />
                </a>
              </li>
              <li className={styles.companies__item}>
                <a className={styles.companies__link} href="#">
                  <img className={styles.companies__img} src={company_img_4} alt="Company image" />
                </a>
              </li>
              <li className={styles.companies__item}>
                <a className={styles.companies__link} href="#">
                  <img className={styles.companies__img} src={company_img_5} alt="Company image" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCompanies;
