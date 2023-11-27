import useTheme from '~/hooks/useTheme';

const EmailIcon: React.FC<{
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
      <path
        d="M12 11L4 6H20L12 11Z"
        fill="currentColor"
        fillOpacity="0"
      >
        <animate
          attributeName="fill-opacity"
          begin={getReducedMotionDuration('1s')}
          dur={getReducedMotionDuration('0.15s')}
          fill="freeze"
          values="0;0.3"
        />
      </path>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1}
      >
        <rect
          height="14"
          rx="1"
          strokeDasharray="64"
          strokeDashoffset="64"
          width="18"
          x="3"
          y="5"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur={getReducedMotionDuration('0.6s')}
            fill="freeze"
            values="64;0"
          />
        </rect>
        <path
          d="M3 6.5L12 12L21 6.5"
          strokeDasharray="24"
          strokeDashoffset="24"
        >
          <animate
            attributeName="stroke-dashoffset"
            begin={getReducedMotionDuration('0.6s')}
            dur={getReducedMotionDuration('0.4s')}
            fill="freeze"
            values="24;0"
          />
        </path>
      </g>
    </svg>
  );
};

export default EmailIcon;
