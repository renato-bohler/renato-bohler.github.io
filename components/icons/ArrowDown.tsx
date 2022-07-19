const ArrowDownIcon: React.FC<{
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
    <g transform="rotate(-90 12 12)">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="14"
          strokeDashoffset="14"
          d="M19 12H5.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.3s"
            values="14;0"
          />
        </path>
        <path
          strokeDasharray="8"
          strokeDashoffset="8"
          d="M5 12L10 17M5 12L10 7"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.3s"
            dur="0.2s"
            values="8;0"
          />
        </path>
      </g>
    </g>
  </svg>
);

export default ArrowDownIcon;
