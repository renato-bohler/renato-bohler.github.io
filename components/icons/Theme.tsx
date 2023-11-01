const ThemeIcon: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className, style }) => (
  <svg
    aria-hidden
    className={className}
    fill="currentColor"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    style={style}
    viewBox="0 0 24 24"
    width="1em"
  >
    <path
      d="M 3.943 7.815 C 4.88 5.683 8.227 2.75 12.437 3.021 C 16.639 3.292 21.772 6.3 20.806 12.405 C 20.635 13.483 18.667 18.094 13.336 16.297 C 11.297 15.609 15.277 19.333 12.678 20.847 C 11.677 21.43 6.902 20.524 4.391 16.874 C 2.972 14.811 2.293 11.516 3.944 7.795 Z"
      fill="none"
      stroke="currentColor"
      strokeDasharray="60"
      strokeDashoffset="60"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="0.6s"
        fill="freeze"
        values="60;0"
      />
    </path>
    <circle cx="6.909" cy="12.838" fillOpacity="0" r="1.5">
      <animate
        attributeName="fill-opacity"
        begin="0.8s"
        dur="0.1s"
        fill="freeze"
        values="0;1"
      />
    </circle>
    <circle cx="7.94" cy="8.791" fillOpacity="0" r="1.5">
      <animate
        attributeName="fill-opacity"
        begin="0.9s"
        dur="0.1s"
        fill="freeze"
        values="0;1"
      />
    </circle>
    <circle cx="11.925" cy="6.762" fillOpacity="0" r="1.5">
      <animate
        attributeName="fill-opacity"
        begin="1s"
        dur="0.1s"
        fill="freeze"
        values="0;1"
      />
    </circle>
    <circle cx="15.957" cy="8.765" fillOpacity="0" r="1.5">
      <animate
        attributeName="fill-opacity"
        begin="1.1s"
        dur="0.1s"
        fill="freeze"
        values="0;1"
      />
    </circle>
  </svg>
);

export default ThemeIcon;
