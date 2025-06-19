import { accordionData } from "../../utils/accordion.ts";
import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/Button/Button";
import styles from '../../styles/good-to-know/index.module.scss';

const SectionGoodToKnow: React.FC = () => {
  return (
    <section className={styles.good_to_know}>
      <div className="container">
        <div className={styles.good_to_know__inner}>
          <div className={styles.good_to_know__top}>
            <div className={styles.good_to_know__top__inner}>
              <h2 className="section-title text-center">Good to know.</h2>
              <p className={styles.good_to_know__text}>
                Everything you need to know about the my services.
              </p>
            </div>
          </div>
          <div className={styles.good_to_know__middle}>
            <Accordion sections={accordionData} />
          </div>
          <div className={styles.good_to_know__bottom}>
            <div className={styles.good_to_know__bottom__wrapper}>
              <h4 className={styles.good_to_know__bottom__title}>
                Still have questions?
              </h4>
              <p className={styles.good_to_know__bottom__text}>
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
              <div className={styles.good_to_know__action}>
                <Button enementCenter>Get in touch</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionGoodToKnow;
