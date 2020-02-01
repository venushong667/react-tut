import React, { useState, useEffect } from "react";
import LoginForm from "../src/components/LoginForm";
import { CARAPI1 } from "../api/carapi";
import cookie from "js-cookie";
import redirect from "../src/utils/redirect";
import loginAuth from "../src/utils/auth";

const login = () => {
  const submitForm = (values, { setSubmitting }) => {
    const carapi = CARAPI1();
    setTimeout(() => {
      setSubmitting(false);

      carapi
        .userLogin(values.email, values.password)
        .then(async response => {
          const data = response.data;
          const token = data.token;
          const user = data.user;
          const userId = user && user._id;

          //utils/auth to set header & set cookies
          loginAuth({ token, userId });

          return response;
        })
        .catch(error => {
          return error;
        });
    });
  };

  return <LoginForm onSubmit={submitForm} />;
};

export default login;
