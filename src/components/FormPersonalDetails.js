import React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Grid,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Formik, Form } from "formik";

const theme = createMuiTheme();

const FormPersonalDetails = props => {
  const cont = e => {
    e.preventDefault();
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, handleChange } = props;

  const Schema = Yup.object().shape({
    firstName: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Requiredddd"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "" }}
      validationSchema={Schema}
      onSubmit={(values, { setSubmitting }) => {
        JSON.stringify(values, null, 2);
        setSubmitting(false);
      }}
    >
      {({ errors, touched, handleBlur, handleSubmit, isSubmitting }) => {
        return (
          <MuiThemeProvider theme={theme}>
            <React.Fragment>
              <Form onSubmit={handleSubmit}>
                <AppBar position="static" color="primary">
                  <Toolbar>
                    <Typography variant="h6">User Details</Typography>
                  </Toolbar>
                </AppBar>
                <Grid container direction="column">
                  <Grid item xs={12} sm={8}>
                    <Grid
                      container
                      direction="column"
                      style={{ marginBottom: "3em" }}
                    >
                      <TextField
                        required
                        fullWidth
                        type="firstName"
                        name="firstName"
                        label="Enter First Name"
                        onChange={handleChange("firstName")}
                        onBlur={handleBlur("firstName")}
                        value={values.firstName}
                        style={{ marginRight: "1em" }}
                      />
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}

                      <br />
                      <TextField
                        required
                        fullWidth
                        type="lastName"
                        name="lastName"
                        label="Enter Last Name"
                        onChange={handleChange("lastName")}
                        onBlur={handleBlur("lastName")}
                        value={values.lastName}
                      />
                      <br />
                      <TextField
                        required
                        fullWidth
                        type="text"
                        name="occupation"
                        label="Enter Occupation"
                        onChange={handleChange("occupation")}
                        onBlur={handleBlur("occupation")}
                        value={values.occupation}
                        style={{ marginRight: "1em" }}
                      />
                      <br />
                      <TextField
                        required
                        fullWidth
                        type="text"
                        name="city"
                        label="Enter City"
                        onChange={handleChange("city")}
                        onBlur={handleBlur("city")}
                        value={values.city}
                        style={{ marginRight: "1em" }}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                    onClick={cont}
                  >
                    Continue
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                    onClick={back}
                  >
                    Back
                  </Button>
                </Grid>
              </Form>
            </React.Fragment>
          </MuiThemeProvider>
        );
      }}
    </Formik>
  );
};

//   render() {
//     const { values, handleChange } = this.props;
//     return (
//       <MuiThemeProvider>
//         <React.Fragment>
//           <AppBar title="Enter User Details" />
//           <TextField
//             hintText="Enter Your First Name"
//             floatingLabelText="First Name"
//             onChange={handleChange("firstName")}
//             defaultValue={values.firstName}
//           />
//           <br />
//           <TextField
//             hintText="Enter Your Last Name"
//             floatingLabelText="Last Name"
//             onChange={handleChange("lastName")}
//             defaultValue={values.lastName}
//           />
//           <br />
//           <TextField
//             hintText="Enter Your Email"
//             floatingLabelText="Email"
//             onChange={handleChange("email")}
//             defaultValue={values.email}
//           />
//           <br />
//           <RaisedButton
//             label="Continue"
//             primary={true}
//             style={styles.button}
//             onClick={this.continue}
//           />
//         </React.Fragment>
//       </MuiThemeProvider>
//     );
//   }
// }

// const styles = {
//   button: {
//     margin: 15
//   }
// };

export default FormPersonalDetails;
