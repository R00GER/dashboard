import { createTheme } from '@mui/material';

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

const theme = createTheme({
  palette: {
    ...getDesignTokens('dark'),
    typography: {
      fontFamily: 'Open Sans',
    },
  },
});

export default theme;
