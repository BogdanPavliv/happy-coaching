import { accordionData } from "../../utils/accordion.ts";
import Accordion from "../../components/Accordion/Accordion.tsx";
import Button from "../../components/Button/Button.tsx";

const SectionGoodToKnow: React.FC = () => {
  return (
    <section className="good-to-know">
      <div className="container">
        <div className="good-to-know__inner">
          <div className="good-to-know__top">
            <div className="good-to-know__top--inner">
              <h2 className="section-title text-center">Good to know.</h2>
              <p className="good-to-know__text">
                Everything you need to know about the my services.
              </p>
            </div>
          </div>
          <div className="good-to-know__middle">
            <Accordion sections={accordionData} />
          </div>
          <div className="good-to-know__bottom">
            <div className="good-to-know__bottom--wrapper">
              <h4 className="good-to-know__bottom--title">
                Still have questions?
              </h4>
              <p className="good-to-know__bottom--text">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
              <div className="good-to-know__action">
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
