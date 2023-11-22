import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetCurrentUserMutation } from "../lib/redux/userApi";
import { useLogoutUserMutation } from "../lib/redux/authApi";
import { useSelector } from "react-redux";

const MainNav = () => {
  const [getCurrentUser, { data }] = useGetCurrentUserMutation();
  const [logoutUser] = useLogoutUserMutation();

  const { user } = useSelector((state) => state.userState);

  useEffect(() => {
    const getCurrentUserData = async () => {
      await getCurrentUser();
    };

    getCurrentUserData();
  }, [user, getCurrentUser]);

  const onLogoutUser = () => {
    logoutUser();
  };
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
            {!user && (
              <Link
                style={{ textDecoration: "none", color: "#d4b996ff" }}
                to="/get-started/login"
              >
                Login
              </Link>
            )}

            {user && (
              <Link
                style={{ textDecoration: "none", color: "#d4b996ff" }}
                to=""
                onClick={onLogoutUser}
              >
                logout
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
