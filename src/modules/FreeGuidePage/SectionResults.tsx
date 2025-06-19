import Button from "../../components/Button/Button";
import results_img from "../../img/section-results/results-img.jpg";
import star_img from "../../img/section-results/star.svg";

const SectionResults: React.FC = () => {
  return (
    <section className="results">
      <div className="container">
        <div className="results__top">
          <div className="results__top--wrapper">
            <div className="results__top--content">
              <div className="tag">Testimonials</div>
              <h2 className="section-title">
                Results that speak for themselves
              </h2>
            </div>
            <div className="results__top--action">
              <Button enementCenter={false}>Get started</Button>
            </div>
          </div>
        </div>
        <div className="results__bottom">
          <div className="results__cards">
            <div className="results__card">
              <div className="results__card--response">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </div>
              <img className="results__card--img" src={results_img} alt="" />
              <div className="results__card--name">Naam</div>
              <div className="results__card--role">Bedrijf</div>
              <div className="results__card--stars">
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
              </div>
            </div>
            <div className="results__card">
              <div className="results__card--response">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </div>
              <img className="results__card--img" src={results_img} alt="" />
              <div className="results__card--name">Naam</div>
              <div className="results__card--role">Bedrijf</div>
              <div className="results__card--stars">
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
              </div>
            </div>
            <div className="results__card">
              <div className="results__card--response">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </div>
              <img className="results__card--img" src={results_img} alt="" />
              <div className="results__card--name">Naam</div>
              <div className="results__card--role">Bedrijf</div>
              <div className="results__card--stars">
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
              </div>
            </div>
            <div className="results__card">
              <div className="results__card--response">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </div>
              <img className="results__card--img" src={results_img} alt="" />
              <div className="results__card--name">Naam</div>
              <div className="results__card--role">Bedrijf</div>
              <div className="results__card--stars">
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
                <img className="results__card--star" src={star_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionResults;
