import React, { useState, useEffect } from "react";

import FormPersonalDetails from "../src/components/FormPersonalDetails";
import Basic from "../src/components/nivo";
import Basic1 from "../src/components/Basic1";
import App from "../src/components/App";
import Confirm from "../src/components/Confirm";
import { CARAPI1 } from "../api/carapi";
import data from "../src/components/data";

//{state.currentFlow === 'student' && <StudentForm/>} or question
const UserForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    car: "",
    brand: ""
  });
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [stepCount, setStepCount] = useState(1);
  // Proceed to next step
  const nextStep = () => {
    setStepCount(stepCount + 1);
  };

  // Return to previous step
  const prevStep = () => {
    setStepCount(stepCount - 1);
  };

  //Handle fields change
  const handleChange = input => e => {
    setState({ ...state, [input]: e.target.value });
  };

  // const { firstName, lastName, email, occupation, city } = state;
  const values = { ...state };

  useEffect(() => {
    const CarApi = CARAPI1();

    CarApi.getCars()
      .then(async response => {
        const cars = await response.data.map(data => {
          return {
            ...data
          };
        });
        // const results = Promise.all(cars);
        setCars(cars);
        return response;
      })
      .catch(error => error);

    CarApi.getBrands()
      .then(async response => {
        const brands = await response.data.map(data => {
          return {
            ...data
          };
        });
        // const results = Promise.all(cars);
        setBrands(brands);
        return response;
      })
      .catch(error => error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null]);

  switch (stepCount) {
    case 1:
      return (
        <Basic1
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          cars={cars}
          brands={brands}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={state}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 4:
      return <h1>Success</h1>;
    default:
  }
};

export default UserForm;
