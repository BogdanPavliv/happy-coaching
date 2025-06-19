import ready_img from "../../img/section-are-you-ready/ready.svg";
import schedule2_img from "../../img/section-are-you-ready/schedule.svg";
import talk2_img from "../../img/section-are-you-ready/talk.svg";
import award_img from "../../img/section-are-you-ready/award.svg";
import bell_img from "../../img/section-are-you-ready/bell.svg";
import online_img from "../../img/section-are-you-ready/online.svg";

const SectionTransformLife: React.FC = () => {
  return (
    <section className="transform-life">
      <div className="container">
        <div className="transform-life__inner">
          <div className="transform-life__top">
            <div className="transform-life__top--inner">
              <div className="tag">How does it work?</div>
              <h4 className="transform-life__title">
                Are you ready to transform your life?
              </h4>
              <p className="transform-life__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
          </div>
          <div className="transform-life__bottom">
            <ul className="transform-life__bottom--list">
              <li className="transform-life__bottom--item">
                <img
                  className="transform-life__bottom--item-img"
                  src={ready_img}
                  alt=""
                />
                <h4 className="transform-life__bottom--item-title">
                  Ready to start? Let’s talk!
                </h4>
                <p className="transform-life__bottom--item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </li>
              <li className="transform-life__bottom--item">
                <img
                  className="transform-life__bottom--item-img"
                  src={schedule2_img}
                  alt=""
                />
                <h4 className="transform-life__bottom--item-title">
                  Ready to start? Let’s talk!
                </h4>
                <p className="transform-life__bottom--item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </li>
              <li className="transform-life__bottom--item">
                <img
                  className="transform-life__bottom--item-img"
                  src={talk2_img}
                  alt=""
                />
                <h4 className="transform-life__bottom--item-title">
                  Ready to start? Let’s talk!
                </h4>
                <p className="transform-life__bottom--item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </li>
              <li className="transform-life__bottom--item">
                <img
                  className="transform-life__bottom--item-img"
                  src={award_img}
                  alt=""
                />
                <h4 className="transform-life__bottom--item-title">
                  Ready to start? Let’s talk!
                </h4>
                <p className="transform-life__bottom--item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </li>
              <li className="transform-life__bottom--item">
                <img
                  className="transform-life__bottom--item-img"
                  src={bell_img}
                  alt=""
                />
                <h4 className="transform-life__bottom--item-title">
                  Ready to start? Let’s talk!
                </h4>
                <p className="transform-life__bottom--item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </li>
              <li className="transform-life__bottom--item">
                <img
                  className="transform-life__bottom--item-img"
                  src={online_img}
                  alt=""
                />
                <h4 className="transform-life__bottom--item-title">
                  Ready to start? Let’s talk!
                </h4>
                <p className="transform-life__bottom--item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTransformLife;
