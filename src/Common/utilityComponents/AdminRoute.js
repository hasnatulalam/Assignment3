import React from "react";
import { Spinner } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../Assets/hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const {admin, user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin  ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default AdminRoute;
