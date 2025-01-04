'use client';
import { useMemo, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { palette } from './palette';
import { shadows } from './shadows';
import { overrides } from './overrides';
import { typography } from './typography';
import { customShadows } from './custom-shadows';

// ----------------------------------------------------------------------

interface PaletteColorOptionsCustom {
  lighter: string;
  light: string;
  less_dark: string;
  dark: string;
  darker: string;
}

interface PaletteSupportColorOptionsCustom {
  100: string;
  300: string;
  500: string;
  900: string;
}

declare module '@mui/material/styles' {
  interface Palette {
    main_theme: PaletteColorOptionsCustom;
    red: PaletteSupportColorOptionsCustom
    yellow: PaletteSupportColorOptionsCustom
    purple: PaletteSupportColorOptionsCustom
    dark_purple: PaletteSupportColorOptionsCustom
    dark_red: PaletteSupportColorOptionsCustom
    green_support: PaletteSupportColorOptionsCustom
  }
  interface PaletteOptions {
    main_theme: PaletteColorOptionsCustom;
    red: PaletteSupportColorOptionsCustom
    yellow: PaletteSupportColorOptionsCustom
    purple: PaletteSupportColorOptionsCustom
    dark_purple: PaletteSupportColorOptionsCustom
    dark_red: PaletteSupportColorOptionsCustom
    green_support: PaletteSupportColorOptionsCustom
  }
}

export default function ThemeProvider({ children }: PropsWithChildren) {
  const memoizedValue: any = useMemo(
    () => ({
      palette: palette(),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(memoizedValue);

  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
