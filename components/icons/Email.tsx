const EmailIcon: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className, style }) => (
  <svg
    aria-hidden
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    className={className}
    style={style}
  >
    <path
      d="M12 11L4 6H20L12 11Z"
      fill="currentColor"
      fillOpacity="0"
    >
      <animate
        attributeName="fill-opacity"
        values="0;0.3"
        begin="1s"
        dur="0.15s"
        fill="freeze"
      />
    </path>
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="1"
        strokeDasharray="64"
        strokeDashoffset="64"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="64;0"
          dur="0.6s"
          fill="freeze"
        />
      </rect>
      <path
        d="M3 6.5L12 12L21 6.5"
        strokeDasharray="24"
        strokeDashoffset="24"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="24;0"
          begin="0.6s"
          dur="0.4s"
          fill="freeze"
        />
      </path>
    </g>
  </svg>
);

export default EmailIcon;
