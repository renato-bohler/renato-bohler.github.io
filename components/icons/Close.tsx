const CloseIcon: React.VFC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className, style }) => (
  <svg
    aria-hidden
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    strokeWidth="3"
    className={className}
    style={style}
  >
    <line
      stroke="currentColor"
      strokeDashoffset="12"
      strokeDasharray="12"
      x1="15.592"
      y1="15.592"
      x2="8.337"
      y2="8.337"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="1.1s"
        values="0;0;12"
        keyTimes="0;0.5;1"
      />
    </line>

    <line
      stroke="currentColor"
      strokeDashoffset="8"
      strokeDasharray="8"
      transform="matrix(-1, 0, 0, -1, 27.585, 19.012)"
      x1="14.891"
      y1="7.729"
      x2="12.87"
      y2="9.75"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="1.3s"
        values="0;0;0;8"
        keyTimes="0;0;0.75;1"
      />
    </line>
    <line
      stroke="currentColor"
      strokeDashoffset="8"
      strokeDasharray="8"
      transform="matrix(-1, 0, 0, -1, 20.589001, 27.451)"
      x1="11.305"
      y1="12.717"
      x2="9.284"
      y2="14.734"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="1.7s"
        values="0;0;4;8"
        keyTimes="0;0.25;0.85;1"
      />
    </line>
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm2.71 11.29a1 1 0 0 1 0 1.42a1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0a1 1 0 0 1 0-1.42l1.3-1.29l-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3l1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12Z"
    />
  </svg>
);

export default CloseIcon;
