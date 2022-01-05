import { renderToStaticMarkup } from 'react-dom/server';

import { Theme } from '~/consts/themes.const';

const FAVICON_DIMENSION = 256;
const FONT_SIZE = 367;
const FONT_FAMILY = 'Major Mono Display, monospace';

const FavIcon: React.VFC<{ theme: Theme }> = ({ theme }) => {
  const isBrowserDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  const selectedTheme = isBrowserDarkMode ? theme.dark : theme.light;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={FAVICON_DIMENSION}
      height={FAVICON_DIMENSION}
      style={{
        fontSize: FONT_SIZE,
        fontFamily: FONT_FAMILY,
      }}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="25%"
            style={{ stopColor: selectedTheme['primary-bright'] }}
          />
          <stop
            offset="100%"
            style={{ stopColor: selectedTheme['secondary-bright'] }}
          />
        </linearGradient>
      </defs>

      {/* B */}
      <text x="16" y={FAVICON_DIMENSION} fill="url(#grad1)">
        B
      </text>

      {/* r */}
      <text x="-45" y={FAVICON_DIMENSION} fill={selectedTheme.text}>
        r
      </text>
    </svg>
  );
};

const useDynamicFavicon = (theme: Theme): string => {
  if (typeof window === 'undefined') return '/favicon.ico';

  const svgMarkup = renderToStaticMarkup(<FavIcon theme={theme} />);
  const encodedMarkup = encodeURIComponent(svgMarkup);

  return `data:image/svg+xml,${encodedMarkup}`;
};

export default useDynamicFavicon;
