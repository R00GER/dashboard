import { createContext, useMemo, useState } from 'react';
import { createTheme } from '@mui/material';

// https://snappywebdesign.net/blog/how-to-code-a-dark-theme-with-material-ui/

const getDesignTokens = mode => ({
  mode,
  ...(mode === 'dark'
    ? {
        background: {
          default: 'black',
        },
      }
    : { default: '#f6f6f6' }),
});

export const theme = createTheme({
  palette: {
    ...getDesignTokens('dark'),
    typography: {
      fontFamily: 'Open Sans',
    },
  },
});

export const ColorModeContext = createContext();

function ColorModeProvider({ children }) {
  const [mode, setMode] = useState('light');

  const memoizedValue = useMemo(() => ({
    mode,
    setMode,
  }));

  return (
    <ColorModeContext.Provider value={memoizedValue}>
      {children}
    </ColorModeContext.Provider>
  );
}

export default ColorModeProvider;
