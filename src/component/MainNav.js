import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import imglogo from "../image/funiturelogo.webp";

const MainNav = () => {
  return (
    <div className="header">
      <Container className="header1">
        <Navbar.Brand href="/">
          <img src={imglogo} alt="" />
        </Navbar.Brand>
        <Nav className="navlink">
          <Link className="navlink1" to="/">
            HOME
          </Link>
          <Link className="navlink1" to="/about">
            ABOUT
          </Link>
          <Link className="navlink1" to="/service">
            SERVICE
          </Link>
          <div className="auth">
            <Link className="auth1" to="/getstarted/register">
              GET STARTED
            </Link>
            /
            <Link className="auth1" to="/login">
              LOGIN
            </Link>
          </div>
        </Nav>
        <Link className="icon" to="">
          <i class="fa-solid fa-cart-shopping"></i>
        </Link>
      </Container>
    </div>
  );
};

export default MainNav;
