import { memo } from 'react';

import classNames from 'classnames';

import styles from './WavyBackground.module.css';

const Waves = () => (
  <div aria-hidden className={styles.waveBackground}>
    <svg>
      <defs>
        <path
          d="M 0 47.8 C 50.432 47.8 90.43 0 139.988 0 C 189.548 0 229.545 47.8 279.977 47.8 L 279.977 48.938 C 229.545 48.938 189.548 1.138 139.988 1.138 C 90.43 1.138 50.432 48.938 0 48.938 Z"
          id="wave_path"
        />
        {['primary', 'secondary'].map((type) => (
          <pattern
            height="102"
            id={`wave_${type}`}
            key={type}
            patternUnits="userSpaceOnUse"
            width="280"
          >
            <use
              className={styles.wavePattern}
              fill={
                type === 'primary'
                  ? 'var(--theme-primary-bright)'
                  : 'var(--theme-secondary-dark)'
              }
              xlinkHref="#wave_path"
            />
          </pattern>
        ))}
      </defs>

      <g
        style={{
          transform: 'translateX(-100px)',
        }}
      >
        <rect
          className={classNames(styles.wave, styles.wavePrimary)}
          fill="url(#wave_primary)"
          height="100%"
          width="100%"
        />
      </g>
      <g
        style={{
          transform: 'translate(-100px, 51px)',
        }}
      >
        <rect
          className={classNames(styles.wave, styles.waveSecondary)}
          fill="url(#wave_secondary)"
          height="100%"
          width="100%"
        />
      </g>
    </svg>
  </div>
);

export const WavyBackground = memo(Waves);
