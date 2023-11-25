import useTheme from '~/hooks/useTheme';

const DarkIcon: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className, style }) => {
  const { getReducedMotionDuration } = useTheme();

  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      style={style}
      viewBox="0 0 24 24"
      width="1em"
    >
      <path
        d="M 17.33 17.97 C 14.394323356833752 17.801226662614525 11.621006235215415 16.56745609794605 9.53 14.5 C 7.36 12.31 6.275 9.5 6.04 6.68 C 3.23 9.82 3.34 14.64 6.35 17.66 C 9.37 20.67 14.19 20.78 17.33 17.97 L 17.33 17.97 Z"
        strokeDasharray="44"
        strokeDashoffset="44"
        strokeWidth="2"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur={getReducedMotionDuration('0.6s')}
          fill="freeze"
          values="44;88"
        />
      </path>
      <path
        d="M 13.5 1 L 14.56 4 L 17.75 4.09 L 15.22 6.03 L 16.13 9.09 L 13.5 7.28 L 10.87 9.09 L 11.78 6.03 L 9.25 4.09 L 12.44 4 Z"
        strokeDasharray="34"
        strokeDashoffset="34"
      >
        <animate
          attributeName="stroke-dashoffset"
          begin={getReducedMotionDuration('0.5s')}
          dur={getReducedMotionDuration('0.6s')}
          fill="freeze"
          values="34;0"
        />
        <animateTransform
          attributeName="transform"
          begin="1.1s"
          dur="50s"
          from="360 13.4 5.3"
          repeatCount="indefinite"
          to="0 13.4 5.3"
          type="rotate"
        />
      </path>
      <path
        d="M 18.5 9 L 19.19 10.95 L 21.25 11 L 19.61 12.25 L 20.2 14.23 L 18.5 13.06 L 16.8 14.23 L 17.39 12.25 L 15.75 11 L 17.81 10.95 Z"
        strokeDasharray="21"
        strokeDashoffset="21"
      >
        <animate
          attributeName="stroke-dashoffset"
          begin={getReducedMotionDuration('1s')}
          dur={getReducedMotionDuration('0.6s')}
          fill="freeze"
          values="21;0"
        />
        <animateTransform
          attributeName="transform"
          begin="1.6s"
          dur="25s"
          from="0 18.5 11.8"
          repeatCount="indefinite"
          to="360 18.5 11.8"
          type="rotate"
        />
      </path>
    </svg>
  );
};

export default DarkIcon;
