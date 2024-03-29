import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { Button } from 'reakit/Button';
import type SwiperInstance from 'swiper';
import {
  Autoplay,
  Controller,
  EffectCards,
  Navigation,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AnimatedIcon } from '~/components/icons/AnimatedIcon/AnimatedIcon';
import { ChevronLeftIcon } from '~/components/icons/ChevronLeftIcon';
import { ChevronRightIcon } from '~/components/icons/ChevronRightIcon';
import { useTheme } from '~/hooks/useTheme';

import { TestimonialCard } from './TestimonialCard/TestimonialCard';
import { TestimonialDivider } from './TestimonialDivider/TestimonialDivider';
import { TestimonialSectionTransition } from './TestimonialSectionTransition/TestimonialSectionTransition';
import { testimonials } from './testimonials.const';

import styles from './Testimonials.module.css';

export const Testimonials = () => {
  const [ref, inView] = useInView();

  const [swiper, setSwiper] = useState<SwiperInstance>();

  const { isContrastMode } = useTheme();

  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(
    null,
  );
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(
    null,
  );

  const handleFocus = () => {
    swiper?.autoplay?.stop();
  };

  useEffect(() => {
    if (inView) swiper?.autoplay?.start();
    else swiper?.autoplay?.stop();
  }, [inView, swiper]);

  return (
    <div className={styles.container}>
      <div aria-hidden className={styles.anchor} id="testimonials" />

      <TestimonialDivider position="top" />

      <section className={styles.content}>
        <h2
          className={classNames(styles.title, {
            [styles.contrast]: isContrastMode,
          })}
        >
          What my colleagues have to say about me?
        </h2>

        <div className={styles.swiperContainer} ref={ref}>
          <Button
            aria-label="Previous testimonial"
            className={classNames(
              styles.navigationButton,
              styles.previousButton,
            )}
            onFocus={handleFocus}
            ref={setPrevEl}
          >
            <AnimatedIcon animationDelay={1000}>
              <ChevronLeftIcon />
            </AnimatedIcon>
          </Button>

          <Swiper
            autoplay={{ delay: 8000 }}
            className={styles.swiper}
            controller={{ control: swiper }}
            effect="cards"
            grabCursor
            loop
            modules={[Autoplay, Controller, EffectCards, Navigation]}
            navigation={{ nextEl, prevEl }}
            onFocus={handleFocus}
            onSwiper={(swiper) => setSwiper(swiper)}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.author.name}>
                <TestimonialCard
                  authorName={testimonial.author.name}
                  authorPicture={testimonial.author.picture}
                  authorRole={testimonial.author.role}
                  currentTestimonial={index + 1}
                  totalTestimonial={testimonials.length}
                >
                  {testimonial.quote}
                </TestimonialCard>
              </SwiperSlide>
            ))}
          </Swiper>

          <Button
            aria-label="Next testimonial"
            className={classNames(
              styles.navigationButton,
              styles.nextButton,
            )}
            onFocus={handleFocus}
            ref={setNextEl}
          >
            <AnimatedIcon animationDelay={1500}>
              <ChevronRightIcon />
            </AnimatedIcon>
          </Button>
        </div>

        <em className={styles.titleDescription}>
          All testimonials spontaneously provided by colleagues
        </em>
      </section>

      <TestimonialSectionTransition />
      <TestimonialDivider position="bottom" />
    </div>
  );
};
