const ChevronTripleUpIcon: React.VFC<{
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
      d="M16.59 9.42L12 4.83L7.41 9.42L6 8l6-6l6 6l-1.41 1.42m0 6L12 10.83l-4.59 4.59L6 14l6-6l6 6l-1.41 1.42m0 6L12 16.83l-4.59 4.59L6 20l6-6l6 6l-1.41 1.42Z"
    />
  </svg>
);

export default ChevronTripleUpIcon;
