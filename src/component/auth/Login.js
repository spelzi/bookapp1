import React, { Fragment, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLoginUserMutation } from "../../lib/redux/authApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation();

  const { user } = useSelector((state) => state.userState);

  const onLoginUser = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return;
    }

    return await loginUser({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/books");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (user) {
      navigate("/books");
    }
  }, [user]);

  return (
    <Fragment>
      <h4>Login</h4>
      <p className="mb-5">Login to get started</p>

      {isError && (
        <div className="alert alert-danger text-center" role="alert">
          {error?.data?.error || "Something went wrong"}
        </div>
      )}
      <Form onSubmit={onLoginUser}>
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
          {isLoading ? "Please wait..." : "Login"}
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
