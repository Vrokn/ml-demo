import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#140077',
    },
    secondary: {
      main: '#E8183A',
    }
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(',')
  },
});
