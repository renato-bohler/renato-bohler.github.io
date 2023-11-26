import useTheme from '~/hooks/useTheme';

const LightIcon: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className, style }) => {
  const { getReducedMotionDuration, isReducedMotion } = useTheme();

  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      viewBox="0 0 16 16"
      width="1em"
    >
      <circle
        cx="8"
        cy="8"
        r="2.5"
        strokeDasharray="21"
        strokeDashoffset="21"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur={getReducedMotionDuration('0.5s')}
          fill="freeze"
          values="21;0"
        />
      </circle>
      <g>
        <line
          strokeDasharray="2"
          strokeDashoffset="2"
          x1="8.013"
          x2="8.013"
          y1="2.539"
          y2="1.435"
        >
          <animate
            attributeName="stroke-dashoffset"
            begin={getReducedMotionDuration('0.4s')}
            dur={getReducedMotionDuration('0.6s')}
            fill="freeze"
            values="2;0"
          />
        </line>
        <line
          strokeDasharray="2"
          strokeDashoffset="2"
          x1="11.474"
          x2="12.534"
          y1="4.545"
          y2="3.462"
        >
          <animate
            attributeName="stroke-dashoffset"
            begin={getReducedMotionDuration('0.45s')}
            dur={getReducedMotionDuration('0.6s')}
            fill="freeze"
            values="2;0"
          />
        </line>
        <line
          strokeDasharray="2"
          strokeDashoffset="2"
          x1="13.486"
          x2="14.523"
          y1="8.007"
          y2="8.007"
        >
          <animate
            attributeName="stroke-dashoffset"
            begin={getReducedMotionDuration('0.5s')}
            dur={getReducedMotionDuration('0.6s')}
            fill="freeze"
            values="2;0"
          />
        </line>
        <line
          strokeDasharray="2"
          strokeDashoffset="2"
          x1="11.488"
          x2="12.487"
          y1="11.499"
          y2="12.502"
        >
          <animate
            attributeName="stroke-dashoffset"
            begin={getReducedMotionDuration('0.55s')}
            dur={getReducedMotionDuration('0.6s')}
            fill="freeze"
            values="2;0"
          />
        </line>
        <line
          strokeDasharray="2"
          strokeDashoffset="2"
          x1="8.013"
          x2="8.013"
          y1="14.568"
          y2="13.464"
        >
          <animate
            attributeName="stroke-dashoffset"
            begin={getReducedMotionDuration('0.6s')}
            dur={getReducedMotionDuration('0.6s')}
            fill="freeze"
            values="2;0"
          />
        </line>
        <line
          strokeDasharray="2"
          strokeDashoffset="2"
          x1="3.462"
          x2="4.522"
          y1="12.569"
          y2="11.486"
        >
          <animate
            attributeName="stroke-dashoffset"
            begin={getReducedMotionDuration('0.65s')}
            dur={getReducedMotionDuration('0.6s')}
            fill="freeze"
            values="2;0"
          />
        </line>
        <line
          strokeDasharray="2"
          strokeDashoffset="2"
          x1="1.479"
          x2="2.516"
          y1="8.007"
          y2="8.007"
        >
          <animate
            attributeName="stroke-dashoffset"
            begin={getReducedMotionDuration('0.7s')}
            dur={getReducedMotionDuration('0.6s')}
            fill="freeze"
            values="2;0"
          />
        </line>
        <line
          strokeDasharray="2"
          strokeDashoffset="2"
          x1="3.509"
          x2="4.508"
          y1="3.498"
          y2="4.501"
        >
          <animate
            attributeName="stroke-dashoffset"
            begin={getReducedMotionDuration('0.75s')}
            dur={getReducedMotionDuration('0.6s')}
            fill="freeze"
            values="2;0"
          />
        </line>

        <animateTransform
          attributeName="transform"
          attributeType="XML"
          begin={getReducedMotionDuration('0.4s')}
          dur={getReducedMotionDuration('20s')}
          fill="freeze"
          from="0 8 8"
          repeatCount={isReducedMotion ? 0 : 'indefinite'}
          to="360 8 8"
          type="rotate"
        />
      </g>
    </svg>
  );
};

export default LightIcon;
