import React, { useState } from "react";
import { Formik, Form } from "formik";
import {
  FormControl,
  TextField,
  Button,
  AppBar,
  Typography,
  Toolbar,
  InputLabel,
  Input,
  MenuItem,
  IconButton,
  InputAdornment
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

//onSubmit for post login api in Parents
const LoginForm = ({ onSubmit }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState({
    email: "",
    password: "",
    showPassword: false
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) =>
        onSubmit(values, { setSubmitting })
      }
    >
      {({ handleSubmit, handleChange, isSubmitting }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <AppBar position="static" color="primary">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">User Details</Typography>
              </Toolbar>
            </AppBar>

            <FormControl>
              <TextField
                type="email"
                name="email"
                label="Enter Email"
                onChange={handleChange("email")}
              />
            </FormControl>
            <FormControl>
              <InputLabel>Password </InputLabel>
              <Input
                type={state.showPassword ? "text" : "password"}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => {}} />
                  </InputAdornment>
                }
              ></Input>
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                onClick={() => {}}
              >
                Submit
              </Button>
            </FormControl>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
