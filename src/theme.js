import { createTheme } from '@mui/material';

const themeDefaults = {
  typography: {
    fontFamily: 'Open Sans',
    body1: {},
    h3: {
      fontSize: '1.5rem',
      fontWeight: '700',
    },
  },
};

// const overrides = {
//   components: {

// };
const COLOR_MEDIUM_DARK = '#2d2d30';
const COLOR_PRIMARY_MAIN = '#007acc';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'var(--color-darkest)',
    },
    primary: {
      main: COLOR_PRIMARY_MAIN,
    },
    secondary: {
      main: '#fff',
      bg: COLOR_MEDIUM_DARK,
    },
  },
  typography: {
    body1: {
      ...themeDefaults.typography.body1,
      color: '#f2f2f2',
    },
    h3: {
      ...themeDefaults.typography.h3,
      color: '#f2f2f2',
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '18px',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: 'var(--color-primary-main)',
        },
      },
    },
  },
});

console.log(darkTheme);

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f2f2f2',
    },
    ...themeDefaults,
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '18px',
        },
      },
    },
  },
});
