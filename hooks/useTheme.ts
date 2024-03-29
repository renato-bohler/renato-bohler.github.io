import { useContext } from 'react';

import {
  ThemeContext,
  type ThemeContextType,
} from '~/components/Theme/ThemeProvider';

export const useTheme = (): ThemeContextType => {
  const theme = useContext(ThemeContext);
  return theme;
};
