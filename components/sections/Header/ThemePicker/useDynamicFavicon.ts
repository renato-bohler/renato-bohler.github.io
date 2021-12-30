import { useEffect, useState } from 'react';

import { Theme } from './themes.const';

const FAVICON_DIMENSION = 256;
const FONT_SIZE = 256 * 1.4375;
const BLANK =
  'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

const useDynamicFavicon = (theme: Theme): void => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement>();

  useEffect(() => {
    if (!canvas) {
      const newCanvas = document.createElement('canvas');
      newCanvas.width = FAVICON_DIMENSION;
      newCanvas.height = FAVICON_DIMENSION;
      setCanvas(newCanvas);
      return;
    }

    const image = new Image();
    image.src = BLANK;
    image.onload = () => drawFavicon(canvas, image, theme);
  }, [theme, canvas]);
};

const drawFavicon = async (
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  theme: Theme,
) => {
  // Makes sure the font is available
  await new FontFace(
    'Major Mono Display',
    `
      local(''),
      url('/fonts/major-mono-display-v7-latin-regular.woff2') format('woff2'),
      url('/fonts/major-mono-display-v7-latin-regular.woff') format('woff')
    `,
  ).load();

  const isBrowserDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  const selectedTheme = isBrowserDarkMode ? theme.dark : theme.light;

  const context = canvas.getContext('2d');
  const favicon = document.querySelector(
    'link[rel=icon]',
  ) as HTMLLinkElement;
  if (!context || !favicon) return;

  context.drawImage(image, 0, 0);

  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.font = `${FONT_SIZE}px Major Mono Display`;

  // B
  const gradient = context.createLinearGradient(0, 0, 0, FONT_SIZE);
  gradient.addColorStop(0, selectedTheme['primary-bright']);
  gradient.addColorStop(1, selectedTheme['secondary-bright']);
  context.fillStyle = gradient;
  context.fillText(
    'B',
    (41.2 * FONT_SIZE) / 100,
    (29.6 * FONT_SIZE) / 100,
  );

  // r
  context.fillStyle = selectedTheme.text;
  context.fillText(
    'r',
    (24.6 * FONT_SIZE) / 100,
    (29.6 * FONT_SIZE) / 100,
  );

  favicon.href = canvas.toDataURL('image/x-icon');
};

export default useDynamicFavicon;
