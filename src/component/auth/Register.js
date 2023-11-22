import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Fragment>
      <h4>Register</h4>
      <p className="mb-5">Register to get started</p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Last Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Enter Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Enter Password" />
        </Form.Group>

        <Button type="submit" style={{ width: "100%" }}>
          {" "}
          Register
        </Button>
      </Form>

      <p className="mt-3">
        {" "}
        Already have an account ?<Link to={"/get-started/login"}>
          {" "}
          Login{" "}
        </Link>{" "}
      </p>
    </Fragment>
  );
};

export default Register;
