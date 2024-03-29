import { useTheme } from '~/hooks/useTheme';

export const ArrowDownIcon: React.FC<{
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
      <g transform="rotate(-90 12 12)">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path
            d="M19 12H5.5"
            strokeDasharray="14"
            strokeDashoffset="14"
          >
            <animate
              attributeName="stroke-dashoffset"
              dur={getReducedMotionDuration('0.3s')}
              fill="freeze"
              values="14;0"
            />
          </path>
          <path
            d="M5 12L10 17M5 12L10 7"
            strokeDasharray="8"
            strokeDashoffset="8"
          >
            <animate
              attributeName="stroke-dashoffset"
              begin={getReducedMotionDuration('0.3s')}
              dur={getReducedMotionDuration('0.2s')}
              fill="freeze"
              values="8;0"
            />
          </path>
        </g>
      </g>
    </svg>
  );
};
