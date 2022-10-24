import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Nav className="me-auto my-2 my-lg-0">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/people" className="nav-link">
              People
            </Link>
            <Link to="/planets" className="nav-link">
              Planets
            </Link>
            <Link to="/starships" className="nav-link">
              Starships
            </Link>
            <Link to="/vehicles" className="nav-link">
              Vehicles
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Navbar.Brand className="d-flex">Star Wars shop</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
