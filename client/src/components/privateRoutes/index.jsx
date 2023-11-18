import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!document.cookie.includes("your_token_cookie_name");

  return isAuthenticated ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to="/customer-access/login" />
  );
};

export default PrivateRoute;
