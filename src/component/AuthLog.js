import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AuthLog1 = () => {
  return (
    <Fragment>
      <div className="containe">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="forms">
              <div>
                <div>
                  <h1>Get started</h1>
                  <p>Sign In to get started</p>
                </div>
                <Form>
                  <Form.Group className="formgroup">
                    <Form.Control placeholder="Email" className="" />
                  </Form.Group>
                  <Form.Group className="formgroup">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className=""
                    />
                  </Form.Group>
                  <Button style={{ width: "100%" }}> Submit </Button>
                  <div className="footerauth">
                    Don't have an account ?
                    <div className="auth222">
                      <Link className="sign" to={"/getstarted/register"}>
                        Sign Up
                      </Link>
                      <h1>/</h1>
                      <Link className="sign" to={"/login/forgetPassword"}>
                        Forget password
                      </Link>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthLog1;
