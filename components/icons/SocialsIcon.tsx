import { useTheme } from '~/hooks/useTheme';

export const SocialsIcon: React.FC<{
  className?: string;
  style?: React.CSSProperties;
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
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path
          d="M3 21V20C3 17.7909 4.79086 16 7 16H11C13.2091 16 15 17.7909 15 20V21"
          strokeDasharray="20"
          strokeDashoffset="20"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur={getReducedMotionDuration('0.4s')}
            fill="freeze"
            values="20;0"
          />
        </path>
        <path
          d="M9 13C7.34315 13 6 11.6569 6 10C6 8.34315 7.34315 7 9 7C10.6569 7 12 8.34315 12 10C12 11.6569 10.6569 13 9 13Z"
          strokeDasharray="20"
          strokeDashoffset="20"
        >
          <animate
            attributeName="stroke-dashoffset"
            begin={getReducedMotionDuration('0.5s')}
            dur={getReducedMotionDuration('0.4s')}
            fill="freeze"
            values="20;0"
          />
        </path>
        <path d="M15 6H21" strokeDasharray="8" strokeDashoffset="8">
          <animate
            attributeName="stroke-dashoffset"
            begin={getReducedMotionDuration('1s')}
            dur={getReducedMotionDuration('0.2s')}
            fill="freeze"
            values="8;0"
          />
        </path>
        <path d="M18 3V9" strokeDasharray="8" strokeDashoffset="8">
          <animate
            attributeName="stroke-dashoffset"
            begin={getReducedMotionDuration('1.2s')}
            dur={getReducedMotionDuration('0.2s')}
            fill="freeze"
            values="8;0"
          />
        </path>
      </g>
    </svg>
  );
};
