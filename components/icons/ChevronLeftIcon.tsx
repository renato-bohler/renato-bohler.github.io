import { useTheme } from '~/hooks/useTheme';

export const ChevronLeftIcon: React.FC<{
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
        d="M9 12L14 7M9 12L14 17"
        fill="currentColor"
        stroke="currentColor"
        strokeDasharray="8"
        strokeDashoffset="8"
        strokeLinecap="round"
        strokeWidth="2"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur={getReducedMotionDuration('0.3s')}
          fill="freeze"
          values="8;0"
        />
      </path>
    </svg>
  );
};
