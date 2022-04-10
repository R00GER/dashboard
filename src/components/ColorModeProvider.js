import {
  createContext,
  useMemo,
  useState,
  cloneElement,
  Children,
} from 'react';
import { darkTheme, lightTheme } from '../theme';

export const ColorModeContext = createContext();

function ColorModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const memoizedValue = useMemo(() => ({
    darkMode,
    setDarkMode,
  }));

  const childrenWithTheme = Children.map(children, child =>
    cloneElement(child, {
      theme: darkMode ? darkTheme : lightTheme,
    }),
  );

  return (
    <ColorModeContext.Provider value={memoizedValue}>
      {childrenWithTheme}
    </ColorModeContext.Provider>
  );
}

export default ColorModeProvider;
