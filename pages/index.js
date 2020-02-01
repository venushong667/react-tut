import React, { useState } from "react";
import { Link as RouteLink } from "../src/configs/routes";
import styled from "styled-components";
import {
  Link,
  MuiThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  MenuItem
} from "@material-ui/core";
import { ChevronLeft, Person as PersonIcon } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const TDDrawerSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 64px;
`;

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
});
const Home = () => {
  const [state, setState] = useState({ DrawerOpen: false });
  const classes = useStyles();
  const toggleDrawer = isOpen => event => {
    if (event.type === "keydown") {
      return;
    }
    setState({ ...state, DrawerOpen: isOpen });
  };

  const { DrawerOpen } = state;

  return (
    <MuiThemeProvider>
      <Drawer
        variant="temporary"
        anchor="left"
        className={classes.drawer}
        open={DrawerOpen}
        onClose={toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <TDDrawerSpace style={{ paddingRight: "10px" }}>
          <IconButton onClick={toggleDrawer(false)}>
            <ChevronLeft />
          </IconButton>
        </TDDrawerSpace>

        <Grid container justify="center" alignItems="center">
          <Avatar
            src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
            className={classes.bigAvatar}
          />
        </Grid>
        <RouteLink route="form">
          <MenuItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Form"></ListItemText>
          </MenuItem>
        </RouteLink>
        <RouteLink route="login">
          <MenuItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Login"></ListItemText>
          </MenuItem>
        </RouteLink>
        <List>
          {["Profile", "Sign Out"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Welcome!</Typography>
        </Toolbar>
      </AppBar>
      <Typography component="div" role="tabpanel">
        Welcome to Next.js!
      </Typography>
      <br />
      <RouteLink route="form">
        <Button className={classes.root}>FORM</Button>
      </RouteLink>
    </MuiThemeProvider>
  );
};

export default Home;
