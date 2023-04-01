const DarkIcon: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className, style }) => (
  <svg
    aria-hidden
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1"
    strokeLinejoin="round"
    strokeLinecap="round"
    className={className}
    style={style}
  >
    <path
      strokeWidth="2"
      strokeDasharray="44"
      strokeDashoffset="44"
      d="M 17.33 17.97 C 14.394323356833752 17.801226662614525 11.621006235215415 16.56745609794605 9.53 14.5 C 7.36 12.31 6.275 9.5 6.04 6.68 C 3.23 9.82 3.34 14.64 6.35 17.66 C 9.37 20.67 14.19 20.78 17.33 17.97 L 17.33 17.97 Z"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="0.6s"
        values="44;88"
      />
    </path>
    <path
      strokeDasharray="34"
      strokeDashoffset="34"
      d="M 13.5 1 L 14.56 4 L 17.75 4.09 L 15.22 6.03 L 16.13 9.09 L 13.5 7.28 L 10.87 9.09 L 11.78 6.03 L 9.25 4.09 L 12.44 4 Z"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        begin="0.5s"
        dur="0.6s"
        values="34;0"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        begin="1.1s"
        from="360 13.4 5.3"
        to="0 13.4 5.3"
        dur="50s"
        repeatCount="indefinite"
      />
    </path>
    <path
      strokeDasharray="21"
      strokeDashoffset="21"
      d="M 18.5 9 L 19.19 10.95 L 21.25 11 L 19.61 12.25 L 20.2 14.23 L 18.5 13.06 L 16.8 14.23 L 17.39 12.25 L 15.75 11 L 17.81 10.95 Z"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        begin="1s"
        dur="0.6s"
        values="21;0"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        begin="1.6s"
        from="0 18.5 11.8"
        to="360 18.5 11.8"
        dur="25s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

export default DarkIcon;
