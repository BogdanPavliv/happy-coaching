import Button from "../../components/Button/Button.tsx";
import online_session_img from "../../img/section-online-session/online-session-img.jpg";

const SectionOnlineSession: React.FC = () => {
  return (
    <section className="online-session">
      <div className="container">
        <div className="online-session__inner">
          <div className="online-session__left">
            <h4 className="online-session__title">
              Get 15-Minutes Complimentary online session.
            </h4>
            <p className="online-session__text">
              Limited Period Offer. Claim Now.
            </p>
            <div className="online-session__action">
              <Button enementCenter={false}>Book now</Button>
            </div>
          </div>
          <div className="online-session__right">
            <img
              className="online-session__img"
              src={online_session_img}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOnlineSession;
