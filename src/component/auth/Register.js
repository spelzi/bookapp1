import React, { Fragment, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../lib/redux/authApi";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [generalError, setGeneralError] = useState("");

  const navigate = useNavigate();

  const [registerUser, response] = useRegisterUserMutation();

  const onCreateNewUser = async (event) => {
    event.preventDefault();
    if (!email || !firstName || !lastName || !password) {
      return setGeneralError("All input fields are required");
    }

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.match(regex)) {
      return setGeneralError("Invalid email address");
    }

    const regData = {
      email,
      firstName,
      lastName,
      password,
    };

    setGeneralError("");
    await registerUser(regData);
  };

  const { isLoading, isError, error, isSuccess, data } = response;

  useEffect(() => {
    if (isSuccess) {
      navigate("/get-started/login");
    }
  }, [isSuccess]);
  return (
    <Fragment>
      <h4>Register</h4>
      <p className="mb-5">Register to get started</p>

      {isError && (
        <div className="alert alert-danger text-center" role="alert">
          {error?.data?.error || "Something went wrong"}
        </div>
      )}
      {generalError && (
        <div className="alert alert-danger text-center" role="alert">
          {generalError}
        </div>
      )}
      <Form onSubmit={onCreateNewUser}>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="First Name"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Last Name"
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </Form.Group>

        <Button type="submit" style={{ width: "100%" }}>
          {" "}
          {isLoading ? "Please wait..." : "Register"}
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
