import { useState } from 'react';

import classNames from 'classnames';
import { Tabbable } from 'reakit/Tabbable';
import SwipeCore, {
  Autoplay,
  Controller,
  EffectCards,
  Navigation,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import TestimonialCard from './TestimonialCard/TestimonialCard';
import testimonials from './testimonials.const';
import styles from './Testimonials.module.css';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

const Testimonials: React.VFC = () => {
  const [swiper, setSwiper] = useState<SwipeCore>();

  const handleCardFocus = (index: number) => {
    swiper?.slideTo(index);
    swiper?.autoplay.stop();
  };

  const handleCardBlur = () => {
    swiper?.autoplay.start();
  };

  return (
    <>
      <div id="testimonials" className={styles.anchor} aria-hidden />

      <svg
        className={styles.divider}
        viewBox="-6.4 143 1600 116.2"
        preserveAspectRatio="xMinYMax slice"
      >
        <path
          fill="var(--theme-primary-dark)"
          d="M1594.5 142.9c1.6-.3 1 .9 1 1.5 0 37.4 0 74.8.1 112.3 0 2.2-.4 3-2.6 2.5-.6-.1-1.3 0-2 0-531.6 0-1063.1 0-1594.7.1-3.8 0-4.6-.8-4.6-4.6.2-33.9.1-67.8.1-101.7.6.2 1.3.3 1.9.5 27.9 12 56.1 23.3 83.5 36.2 37.8 17.7 77.3 26 118.9 25.1 31.2-.7 62-5.6 92.9-10.1 24.1-3.5 48.3-6.7 72.7-5.5 22.5 1.1 44 6.2 63.7 17.7 14.2 8.3 28.8 15.8 44.2 21.8 34.6 13.5 70 18 106.8 11.6 24.4-4.3 47.4-12.5 70.2-21.8 27.8-11.4 54.9-24.2 83.4-33.9 21.5-7.4 43.6-11.3 65.9-15.2 23.9-4.2 47.6-9.5 71.5-13.5 26.6-4.4 53.4-8.1 80.3-9.6 26.4-1.5 52.7-1.2 78.9 2.9 27.1 4.2 53.3 12.2 79.5 20.2 31.9 9.8 63.3 20.9 96.9 24 30.2 2.8 59.9 1.4 89.3-6 25.1-6.4 48.9-16.7 73.4-25 24.1-8.2 48.5-15.3 74.4-14.7 41.1 1 82.1-.5 122.6-7.9 10.6-1.8 21.5-3.2 31.8-6.9z"
        />
      </svg>

      <section className={styles.section}>
        <h2 className={styles.title}>
          What my colleagues have to say about me?
        </h2>

        <Swiper
          modules={[Autoplay, Controller, EffectCards, Navigation]}
          effect="cards"
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          navigation
          grabCursor
          loop
          onSwiper={setSwiper}
          className={styles.swiper}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.author.name}>
              {/* TODO: cards shoudln't be tabbable */}
              <Tabbable
                onFocus={() => handleCardFocus(index + 1)}
                onBlur={handleCardBlur}
              >
                <TestimonialCard
                  authorName={testimonial.author.name}
                  authorPicture={testimonial.author.picture}
                  authorRole={testimonial.author.role}
                >
                  {testimonial.quote}
                </TestimonialCard>
              </Tabbable>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <svg
        className={classNames(
          styles.divider,
          styles['divider-bottom'],
        )}
        viewBox="-6.4 143 1600 116.2"
        preserveAspectRatio="xMinYMax slice"
      >
        <path
          fill="var(--theme-secondary-bright)"
          d="M1594.5 142.9c1.6-.3 1 .9 1 1.5 0 37.4 0 74.8.1 112.3 0 2.2-.4 3-2.6 2.5-.6-.1-1.3 0-2 0-531.6 0-1063.1 0-1594.7.1-3.8 0-4.6-.8-4.6-4.6.2-33.9.1-67.8.1-101.7.6.2 1.3.3 1.9.5 27.9 12 56.1 23.3 83.5 36.2 37.8 17.7 77.3 26 118.9 25.1 31.2-.7 62-5.6 92.9-10.1 24.1-3.5 48.3-6.7 72.7-5.5 22.5 1.1 44 6.2 63.7 17.7 14.2 8.3 28.8 15.8 44.2 21.8 34.6 13.5 70 18 106.8 11.6 24.4-4.3 47.4-12.5 70.2-21.8 27.8-11.4 54.9-24.2 83.4-33.9 21.5-7.4 43.6-11.3 65.9-15.2 23.9-4.2 47.6-9.5 71.5-13.5 26.6-4.4 53.4-8.1 80.3-9.6 26.4-1.5 52.7-1.2 78.9 2.9 27.1 4.2 53.3 12.2 79.5 20.2 31.9 9.8 63.3 20.9 96.9 24 30.2 2.8 59.9 1.4 89.3-6 25.1-6.4 48.9-16.7 73.4-25 24.1-8.2 48.5-15.3 74.4-14.7 41.1 1 82.1-.5 122.6-7.9 10.6-1.8 21.5-3.2 31.8-6.9z"
        />
      </svg>
    </>
  );
};

export default Testimonials;
