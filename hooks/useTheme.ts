import { useContext } from 'react';

import ThemeContext, {
  ThemeContextType,
} from '~/components/Theme/ThemeProvider';

const useTheme = (): ThemeContextType => {
  const theme = useContext(ThemeContext);
  return theme;
};

export default useTheme;
