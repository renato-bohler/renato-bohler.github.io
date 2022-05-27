const LinkedInIcon: React.VFC<{
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
    <circle
      cx="4"
      cy="4"
      r="1.75"
      fill="currentColor"
      fillOpacity="0"
    >
      <animate
        fill="freeze"
        attributeName="fill-opacity"
        begin="0.8s"
        dur="0.4s"
        values="0;1"
      />
    </circle>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="3"
    >
      <path strokeDasharray="12" strokeDashoffset="12" d="M4 10V20">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.2s"
          values="12;0"
        />
      </path>
      <path strokeDasharray="12" strokeDashoffset="12" d="M10 10V20">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.3s"
          dur="0.2s"
          values="12;0"
        />
      </path>
      <path
        strokeDasharray="24"
        strokeDashoffset="24"
        d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.5s"
          dur="0.3s"
          values="24;0"
        />
      </path>
    </g>
  </svg>
);

export default LinkedInIcon;
