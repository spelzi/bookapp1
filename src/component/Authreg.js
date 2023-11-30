import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Authreg1 = () => {
  return (
    <div className="containe">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="formss">
            <div>
              <h1>Get started</h1>
              <p>Sign Up to get started</p>
            </div>
            <Form>
              <Form.Group className="formgroup">
                <Form.Control placeholder="First Name" className="" />
              </Form.Group>
              <Form.Group className="formgroup">
                <Form.Control placeholder="Last Name" className="" />
              </Form.Group>
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
              <Form.Group className="formgroup">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  className=""
                />
              </Form.Group>
              <Form.Group className="formgroup">
                <input type="checkbox" /> I have read the Terms,{" "}
                <a href="/condition/policy" className="signs">
                  Condition and policy
                </a>
              </Form.Group>
              <Button style={{ width: "100%" }}> Submit </Button>
              <div className="foot">
                Already have an account ?{" "}
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

export default Authreg1;
