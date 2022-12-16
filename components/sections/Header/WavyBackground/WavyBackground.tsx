import { memo } from 'react';

import classNames from 'classnames';

import styles from './WavyBackground.module.css';

const WavyBackground: React.FC = () => {
  return (
    <div className={styles.waveBackground} aria-hidden>
      <svg>
        <defs>
          {['primary', 'secondary'].map((type) => (
            <pattern
              key={type}
              id={`wave_${type}`}
              width="280"
              height="102"
              patternUnits="userSpaceOnUse"
            >
              <path
                fill={
                  type === 'primary'
                    ? 'var(--theme-primary-bright)'
                    : 'var(--theme-secondary-dark)'
                }
                className={styles.wavePattern}
                d="M 0 47.8 C 50.432 47.8 90.43 0 139.988 0 C 189.548 0 229.545 47.8 279.977 47.8 L 279.977 48.938 C 229.545 48.938 189.548 1.138 139.988 1.138 C 90.43 1.138 50.432 48.938 0 48.938 Z"
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
            width="100%"
            height="100%"
            fill="url(#wave_primary)"
            className={classNames(styles.wave, styles.wavePrimary)}
          />
        </g>
        <g
          style={{
            transform: 'translate(-100px, 51px)',
          }}
        >
          <rect
            width="100%"
            height="100%"
            fill="url(#wave_secondary)"
            className={classNames(styles.wave, styles.waveSecondary)}
          />
        </g>
      </svg>
    </div>
  );
};

export default memo(WavyBackground);
