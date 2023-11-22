import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <h4>Login</h4>
      <p className="mb-5">Login to get started</p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Enter Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Enter Password" />
        </Form.Group>

        <Button type="submit" style={{ width: "100%" }}>
          {" "}
          Login
        </Button>
      </Form>

      <p className="mt-3">
        {" "}
        Don't have an account ?
        <Link to={"/get-started/register"}> Register </Link>{" "}
      </p>
    </Fragment>
  );
};

export default Login;
