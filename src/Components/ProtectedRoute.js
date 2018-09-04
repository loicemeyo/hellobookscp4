import React from "react";
import { Route, Redirect } from "react-router";

/**
 * This Component protect urls so that they cannot be accessed before login
 */

const ProtectedRoute = ({ component: Values, Component, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      window.localStorage.getItem("access_token")?
        (<Values{...props}/>):
        (<Redirect to={{pathname: "/login"}}/>)
    )}
  />
);
export default ProtectedRoute;