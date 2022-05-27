const ChevronTripleDownIcon: React.VFC<{
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
}> = ({ className, style, 'aria-label': ariaLabel }) => (
  <svg
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    className={className}
    style={style}
  >
    <path
      fill="currentColor"
      d="M7.41 14.58L12 19.17l4.59-4.59L18 16l-6 6l-6-6l1.41-1.42m0-6L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42m0-6L12 7.17l4.59-4.59L18 4l-6 6l-6-6l1.41-1.42Z"
    />
  </svg>
);

export default ChevronTripleDownIcon;
