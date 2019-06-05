import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import brown from '@material-ui/core/colors/brown';

export const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: brown
  }
});

export type Theme = typeof theme;
