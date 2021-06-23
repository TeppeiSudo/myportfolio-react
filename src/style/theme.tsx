import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#282c34",
    },
    secondary: {
      main: grey[50],
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 1000,
    },
    body1: {
      fontSize: 35,
      fontWeight: 500,
    },
  },
});

export default theme;
