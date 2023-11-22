import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-">
      <Container>
        <Navbar.Brand style={{ color: "#d4b996ff" }} href="/">
          {" "}
          Book Library
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link
              style={{ textDecoration: "none", color: "#d4b996ff" }}
              to="/get-started/register"
            >
              Get started
            </Link>
          </Nav>
          <div style={{ color: "#d4b996ff" }}>/</div>
          <Nav>
            <Link
              style={{ textDecoration: "none", color: "#d4b996ff" }}
              to="/get-started/login"
            >
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
