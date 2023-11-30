import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgetPass = () => {
  return (
    <div className="containe">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="forms">
            <div>
              <h1>Forget Password</h1>
              <p>Enter Email to reset your password</p>
            </div>
            <Form>
              <Form.Group className="formgroup">
                <Form.Control placeholder="Email" className="" />
              </Form.Group>
              <Button style={{ width: "100%" }}> Submit </Button>
              <div className="foott">
                Go back to login ?{" "}
                <Link className="signs" to={"/login"}>
                  Sign In
                </Link>
              </div>
            </Form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
