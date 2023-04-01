const PauseIcon: React.FC<{
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
    viewBox="0 0 512 512"
    className={className}
    style={style}
  >
    <path
      fill="currentColor"
      d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256s114.6 256 256 256zm-32-320v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"
    />
  </svg>
);

export default PauseIcon;
