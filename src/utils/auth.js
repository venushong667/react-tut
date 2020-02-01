import React, { useEffect } from "react";
import cookie from "js-cookie";
import redirect from "./redirect";
import { CARAPI1 } from "../../api/carapi";

const loginAuth = ({ token, userId }) => {
  const carapi = CARAPI1();

  cookie.set("token", token, {
    expires: 1
  });
  cookie.set("userId", userId, {
    expires: 1
  });

  //setauth(Bearer {token})
  carapi.setAuthHeader(token);

  redirect(null, "home");
};

export default loginAuth;
