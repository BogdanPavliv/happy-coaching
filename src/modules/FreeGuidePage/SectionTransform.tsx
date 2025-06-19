const SectionTransform: React.FC = () => {
  return (
    <section className="transform">
      <div className="container">
        <div className="transform__inner">
          <div className="transform__left">
            <div className="tag">How does it work?</div>
            <h2 className="section-title">
              Are you ready to transform your life?
            </h2>
            <p className="are-you-ready__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
          <div className="transform__right">
            <ul className="transform__right-list">
              <li className="transform__right-item online-white">
                <div className="transform__right-item-content">
                  <h4 className="transform__right-item-title">
                    Online consultation
                  </h4>
                  <p className="transform__right-item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </li>
              <li className="transform__right-item ready-white">
                <div className="transform__right-item-content">
                  <h4 className="transform__right-item-title">
                    Ready to start? Let’s talk!
                  </h4>
                  <p className="transform__right-item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTransform;
