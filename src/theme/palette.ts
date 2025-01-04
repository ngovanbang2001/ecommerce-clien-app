import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS

export const grey = {
  0: '#FFFFFF',
  50: "#FBFBF9",
  100: '#EAEAE5',
  200: '#F4F6F8',
  300: '#D0D0C8',
  400: '#C4CDD5',
  500: '#9A9A98',
  600: '#637381',
  700: '#5D5D5B',
  800: '#212B36',
  900: '#363634',
};

export const green = {
  0: '#FFFFFF',
  100: '#F0FFF6',
  300: '#89F0B2',
  500: '#3DC674',
  700: '#349056',
  900: '#18442A',
};

export const main_theme = {
  lighter: green[100],
  light: green[300],
  less_dark: green[500],
  dark: green[700],
  darker: green[900]
}

export const primary = {
  lighter: '#D0ECFE',
  light: '#73BAFB',
  main: '#1877F2',
  dark: '#0C44AE',
  darker: '#042174',
  contrastText: '#FFFFFF',
};

export const secondary = {
  lighter: '#EFD6FF',
  light: '#C684FF',
  main: '#8E33FF',
  dark: '#5119B7',
  darker: '#27097A',
  contrastText: '#FFFFFF',
};

export const info = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

export const success = {
  lighter: '#C8FAD6',
  light: '#5BE49B',
  main: '#00A76F',
  dark: '#007867',
  darker: '#004B50',
  contrastText: '#FFFFFF',
};

export const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

export const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};


export const red = {
  100: '#FEF8F8',
  300: '#FEF8F8',
  500: '#F4CACA',
  900: '#DB4D4D',
};

export const yellow = {
  900: '#FEAF06',
};

export const green_support = {
  100: '#F6FDF7',
  500: '#AEEAB3',
  900: '#3ACB46',
};

export const purple = {
  900: '#C3099A',
};


export const dark_purple = {
  900: '#6B0861',
};

export const dark_red = {
  900: '#800202',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  main_theme,
  common,
  red,
  yellow,
  green_support,
  purple,
  dark_purple,
  dark_red,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette() {
  return {
    ...base,
    mode: 'light',
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: '#FFFFFF',
      default: grey[100],
      neutral: grey[200],
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };
}
