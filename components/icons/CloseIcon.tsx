import { type CSSProperties, type FC } from 'react';

import { useTheme } from '~/hooks/useTheme';

export const CloseIcon: FC<{
  className?: string;
  style?: CSSProperties;
}> = ({ className, style }) => {
  const { getReducedMotionDuration } = useTheme();

  return (
    <svg
      aria-hidden
      className={className}
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      strokeWidth="3"
      style={style}
      viewBox="0 0 24 24"
      width="1em"
    >
      <line
        stroke="currentColor"
        strokeDasharray="12"
        strokeDashoffset="12"
        x1="15.592"
        x2="8.337"
        y1="15.592"
        y2="8.337"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur={getReducedMotionDuration('1.1s')}
          fill="freeze"
          keyTimes="0;0.5;1"
          values="0;0;12"
        />
      </line>

      <line
        stroke="currentColor"
        strokeDasharray="8"
        strokeDashoffset="8"
        transform="matrix(-1, 0, 0, -1, 27.585, 19.012)"
        x1="14.891"
        x2="12.87"
        y1="7.729"
        y2="9.75"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur={getReducedMotionDuration('1.3s')}
          fill="freeze"
          keyTimes="0;0;0.75;1"
          values="0;0;0;8"
        />
      </line>
      <line
        stroke="currentColor"
        strokeDasharray="8"
        strokeDashoffset="8"
        transform="matrix(-1, 0, 0, -1, 20.589001, 27.451)"
        x1="11.305"
        x2="9.284"
        y1="12.717"
        y2="14.734"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur={getReducedMotionDuration('1.7s')}
          fill="freeze"
          keyTimes="0;0.25;0.85;1"
          values="0;0;4;8"
        />
      </line>
      <path
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm2.71 11.29a1 1 0 0 1 0 1.42a1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0a1 1 0 0 1 0-1.42l1.3-1.29l-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3l1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
