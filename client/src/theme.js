import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: { main: '#274967' },
    secondary: { light: '#479a83', main: '#0b6b56' }
  }
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});
