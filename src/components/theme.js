/// https://material-ui.com/customization/theming/
/// https://material-ui.com/customization/default-theme/

import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#673ab7"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    text: {
      primary: "#424242",
      black87: "rgba(0, 0, 0, 0.87)"
    }
  }
});
