import { CSSProperties, useEffect, useRef, useState } from 'react';

import styles from './Experience.module.css';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      if (!containerRef.current) return;
      const windowBottomY =
        document.documentElement.scrollTop + window.innerHeight;
      const targetHeight = containerRef.current.clientHeight;
      const targetY = containerRef.current.offsetTop;

      const percentage = Math.min(
        1,
        (windowBottomY - targetY) / targetHeight,
      );

      setProgress(Math.max(0, percentage));
    };
    document.addEventListener('scroll', scrollHandler);
    scrollHandler();

    return () =>
      document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <section className={styles.section}>
      <div id="experience" aria-hidden className={styles.anchor} />

      <h2 className={styles.title}>Experience</h2>

      <div ref={containerRef} className={styles.transitionContainer}>
        <div
          className={styles.transitionOverflow}
          style={{ '--scroll': `${progress}` } as CSSProperties}
        >
          <div className={styles.transitionLine} />
        </div>
      </div>

      <div className={styles.timeline}>
        <div className={styles.card}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque dictum odio sit amet orci imperdiet, in
          hendrerit enim fringilla. Aliquam imperdiet ut sapien et
          consequat. Phasellus rhoncus dolor ut ante eleifend, eu
          vulputate metus placerat. Donec eu lacus in nunc sodales
          efficitur a in risus. Nullam gravida in lectus eu convallis.
          Ut aliquet ultricies dolor, eu venenatis elit ultrices in.
          Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </div>

        <div className={styles.card}>
          Ut erat velit, suscipit eu leo in, facilisis posuere augue.
          Aliquam tincidunt ligula tortor, sed facilisis quam congue
          ut. Nunc augue felis, finibus sit amet metus et, vulputate
          egestas ex. Quisque congue velit efficitur ipsum bibendum,
          nec efficitur tellus consequat. Phasellus ullamcorper, enim
          a dictum mattis, urna dolor facilisis ante, id posuere diam
          libero sed urna. Sed ut ante mi. Nam eu ligula sit amet
          lectus ornare aliquam sed sed elit. Nam lobortis tellus vel
          aliquet ornare. Vestibulum fringilla tincidunt arcu, eu
          aliquet ante egestas a. Vestibulum scelerisque vitae enim ac
          luctus. Maecenas ultricies sollicitudin maximus. Vivamus
          eleifend quis justo id cursus. Quisque a ante hendrerit,
          scelerisque elit eu, gravida ex. Vestibulum imperdiet mi
          magna, eget commodo erat porta vel. Nunc faucibus, est id
          tempor consectetur, nibh quam egestas enim, id varius nunc
          nisl nec nunc. Etiam volutpat massa nulla, at commodo nisi
          tristique in.
        </div>

        <div className={styles.card}>
          Fusce non molestie massa. Suspendisse semper volutpat sapien
          sed dignissim. Vestibulum eleifend ornare sapien, id
          ultricies tortor posuere at. Proin pharetra leo quis massa
          congue vehicula. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
          Curabitur egestas consequat augue at dignissim. Fusce
          pulvinar consequat lobortis
        </div>
      </div>

      <div className={styles.endTransition} />
    </section>
  );
};

export default Experience;
