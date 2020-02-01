import React from "react";
import {
  Button,
  Dialog,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const theme = createMuiTheme();

const Confirm = props => {
  const cont = e => {
    e.preventDefault();
    props.nextStep();
    console.log(props);
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  const {
    values: { firstName, lastName, email, occupation, city, bio, brand, car }
  } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Brand " secondary={brand} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Car" secondary={car} />
            </ListItem>
          </List>
          <br />

          <Button color="secondary" variant="contained" onClick={back}>
            Back
          </Button>

          <Button color="primary" variant="contained" onClick={cont}>
            Confirm & Continue
          </Button>
        </Dialog>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default Confirm;
