const ChevronLeftIcon: React.VFC<{
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
      stroke="currentColor"
      strokeDasharray="8"
      strokeDashoffset="8"
      strokeLinecap="round"
      strokeWidth="2"
      d="M9 12L14 7M9 12L14 17"
      fill="currentColor"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="0.3s"
        values="8;0"
      />
    </path>
  </svg>
);

export default ChevronLeftIcon;
