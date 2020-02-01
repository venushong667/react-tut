import React from "react";
import { Link as RouteLink } from "../configs/routes";
// import PropTypes from "prop-types";
// import * as Yup from "yup";
import { Formik, Form } from "formik";
import {
  Button,
  AppBar,
  Typography,
  Toolbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import * as Yup from "yup";

// const Schema = Yup.object().shape({
//   password: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string()
//     .email("Invalid email")
//     .required("Required")
// });

const Basic1 = props => {
  const { values, handleChange, cars, brands } = props;

  const cont = e => {
    e.preventDefault();
    props.nextStep();
  };

  // Get from Props which is from UserForm

  const Schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required!")
  });

  return (
    <Formik
      initialValues={{
        email: "",
        brand: "",
        firstName: "",
        lastName: "",
        car: ""
      }}
      validationSchema={Schema}
      onSubmit={(values, { setSubmitting }) => props(values, { setSubmitting })}
    >
      {({
        errors,
        touched,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => {
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
                required
                fullWidth
                type="email"
                name="email"
                label="Enter Email"
                onChange={handleChange("email")}
                onBlur={handleBlur}
                value={values.email}
                style={{ marginRight: "1em" }}
              />

              {errors.email && errors.email}
              <br />
              <FormControl>
                <InputLabel htmlFor="brand-select">Brand</InputLabel>
                <Select
                  id="brand-select"
                  value={values.brand}
                  onChange={handleChange("brand")}
                >
                  {brands.map(data => {
                    return (
                      <MenuItem value={data._id} key={data._id}>
                        {data.brandname}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <br />
              <FormControl>
                <InputLabel htmlFor="car-select">Car</InputLabel>
                <Select
                  id="car-select"
                  value={values.car}
                  onChange={handleChange("car")}
                >
                  {cars.map(data => {
                    return (
                      <MenuItem value={data._id} key={data._id}>
                        {data.title}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <br />
              <TextField
                required
                fullWidth
                type="firstName"
                name="firstName"
                label="Enter firstName"
                onChange={handleChange("firstName")}
                onBlur={handleBlur}
                value={values.firstName}
                style={{ marginRight: "1em" }}
              />
              <br />
              <TextField
                required
                fullWidth
                type="lastName"
                name="lastName"
                label="Enter lastName"
                onChange={handleChange("lastName")}
                onBlur={handleBlur}
                value={values.lastName}
                style={{ marginRight: "1em" }}
              />

              <br />
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                onClick={cont}
              >
                Submit
              </Button>
            </FormControl>

            <RouteLink route="home">
              <Button variant="contained" color="secondary">
                HOME
              </Button>
            </RouteLink>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Basic1;
