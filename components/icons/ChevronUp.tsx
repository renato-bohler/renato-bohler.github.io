const ChevronUpIcon: React.FC<{
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
      d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41Z"
    />
  </svg>
);

export default ChevronUpIcon;
