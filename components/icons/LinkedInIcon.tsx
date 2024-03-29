import { type CSSProperties, type FC } from 'react';

import { useTheme } from '~/hooks/useTheme';

export const LinkedInIcon: FC<{
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
      style={style}
      viewBox="0 0 24 24"
      width="1em"
    >
      <circle
        cx="4"
        cy="4"
        fill="currentColor"
        fillOpacity="0"
        r="1.75"
      >
        <animate
          attributeName="fill-opacity"
          begin={getReducedMotionDuration('0.8s')}
          dur={getReducedMotionDuration('0.4s')}
          fill="freeze"
          values="0;1"
        />
      </circle>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
      >
        <path d="M4 10V20" strokeDasharray="12" strokeDashoffset="12">
          <animate
            attributeName="stroke-dashoffset"
            dur={getReducedMotionDuration('0.2s')}
            fill="freeze"
            values="12;0"
          />
        </path>
        <path
          d="M10 10V20"
          strokeDasharray="12"
          strokeDashoffset="12"
        >
          <animate
            attributeName="stroke-dashoffset"
            begin={getReducedMotionDuration('0.3s')}
            dur={getReducedMotionDuration('0.2s')}
            fill="freeze"
            values="12;0"
          />
        </path>
        <path
          d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"
          strokeDasharray="24"
          strokeDashoffset="24"
        >
          <animate
            attributeName="stroke-dashoffset"
            begin={getReducedMotionDuration('0.5s')}
            dur={getReducedMotionDuration('0.3s')}
            fill="freeze"
            values="24;0"
          />
        </path>
      </g>
    </svg>
  );
};
