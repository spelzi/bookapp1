import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

const AuthPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={3} sm={4}>
          {" "}
        </Col>
        <Col lg={6} sm={4}>
          <Outlet />;
        </Col>
        <Col lg={3} sm={4}></Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
