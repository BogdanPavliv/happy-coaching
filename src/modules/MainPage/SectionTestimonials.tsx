import star_img from "../../img/section-testimonials/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { dataTimonials } from "../../utils/testimonials.ts";
import { sliderTestimonialsSettings } from "../../utils/common.ts";
import styles from '../../styles/testimonials/index.module.scss';

const SectionTestimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.testimonials__inner}>
          <div className={styles.testimonials__top}>
            <h2 className="section-title">
              Hear out what my clients say about me.
            </h2>
          </div>
          <div className={styles.testimonials__bottom}>
            <div className={styles.testimonials__slider__wrapper}>
              <Swiper
                {...sliderTestimonialsSettings}
                className={styles.swiper_testimonials}
              >
                {dataTimonials.map((card: any, i: any) => (
                  <SwiperSlide key={i}>
                    <div className={styles.testimonials__slide}>
                      <p className={styles.testimonials__slide__response}>
                        {card.response}
                      </p>
                      <div className={styles.testimonials__slide__name}>
                        {card.name}
                      </div>
                      <img
                        className={styles.testimonials__slide__img}
                        src={card.image}
                        alt={card.name}
                      />
                      <div className={styles.testimonials__slide__stars}>
                        <img
                          className={styles.testimonials__slide__star}
                          src={star_img}
                          alt="Star"
                        />
                        <img
                          className={styles.testimonials__slide__star}
                          src={star_img}
                          alt="Star"
                        />
                        <img
                          className={styles.testimonials__slide__star}
                          src={star_img}
                          alt="Star"
                        />
                        <img
                          className={styles.testimonials__slide__star}
                          src={star_img}
                          alt="Star"
                        />
                        <img
                          className={styles.testimonials__slide__star}
                          src={star_img}
                          alt="Star"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonials;
