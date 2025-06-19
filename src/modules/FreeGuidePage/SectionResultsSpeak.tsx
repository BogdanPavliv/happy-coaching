import { useState, useEffect } from "react";
import are_you_ready_img from "../../img/section-dont-miss/are-you-ready-img.jpg";
import styles from '../../styles/results-speak/index.module.scss';

const SectionResultsSpeak: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emptyName, setEmptyName] = useState<string>("");

  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [emptyNameDirty, setEmptyNameDirty] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<string>("Email cannot be empty");
  const [emptyNameError, setEmptyNameError] = useState<string>(
    "The field cannot be empty"
  );

  const [formValid, setFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (emailError || emptyNameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, emptyNameError]);

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email!");
      setEmailDirty(true);
    } else {
      setEmailError("");
      setEmailDirty(false);
    }
  };

  const emptyNameHandler = (e: any) => {
    setEmptyName(e.target.value);
    if (!e.target.value) {
      setEmptyNameError("The field cannot be empty");
      setEmptyNameDirty(true);
    } else {
      setEmptyNameError("");
      setEmptyNameDirty(false);
    }
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "name":
        setEmptyNameDirty(true);
        break;
    }
  };
  return (
    <section className={styles.results_speak}>
      <div className="container-right">
        <div className={styles.results_speak__inner}>
          <div className={styles.results_speak__left}>
            <h2 className={`section-title ${styles.results_speak__title}`}>Results that speak for themselves</h2>
            <p className={styles.results_speak__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
            <div className={styles.form_wrapper}>
              <form className={styles.form} action="#">
                <input
                  onChange={(e) => emptyNameHandler(e)}
                  value={emptyName}
                  onBlur={(e) => blurHandler(e)}
                  className={
                    emptyNameDirty && emptyNameError
                      ? `${styles.form__input} ${styles.form__input__error}`
                      : `${styles.form__input}`
                  }
                  id="formName"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => emailHandler(e)}
                  value={email}
                  onBlur={(e) => blurHandler(e)}
                  className={
                    emailDirty && emailError
                      ? `${styles.form__input} ${styles.form__input__error}`
                      : `${styles.form__input}`
                  }
                  id="formEmail"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
                <p className={styles.form__text}>
                  We care about your data in our <a href="#">privacy policy</a>
                </p>
                <button
                  disabled={!formValid}
                  className={styles.form__btn}
                  type="submit"
                >
                  Get free guide
                </button>
              </form>
            </div>
          </div>
          <div className={styles.results_speak__right}>
            <div className={styles.results_speak__img__wrapper}>
              <img
                className={styles.results_speak__img}
                src={are_you_ready_img}
                alt="Are you ready image"
              />
              <div className={styles.circle}>Free guide!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionResultsSpeak;
