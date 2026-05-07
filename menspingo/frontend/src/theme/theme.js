import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#155EEF',
    },
    secondary: {
      main: '#7C3AED',
    },
    info: {
      main: '#06B6D4',
    },
    success: {
      main: '#16A34A',
    },
    text: {
      primary: '#0B1220',
      secondary: 'rgba(11,18,32,0.72)',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    divider: 'rgba(11,18,32,0.10)',
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 800 },
    h4: { fontWeight: 800 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            'radial-gradient(1200px 700px at 10% 0%, rgba(21,94,239,0.08), transparent 60%), radial-gradient(1000px 650px at 90% 10%, rgba(124,58,237,0.06), transparent 55%), linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(255,255,255,1) 55%)',
        },
        a: {
          color: 'inherit',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 18,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
})

export const theme = responsiveFontSizes(baseTheme)
