import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Floater from "react-floater";
import Joyride from "react-joyride";

const Header = () => {
  const state = {
    steps: [
      {
        target: ".my-1-step",
        content:
          "People/Planets/Starships/Vehicles are section of type of persons from Star Wars",
        textAlign: "center",
        placement: "bottom" as const,
      },
      {
        target: ".my-2-step",
        content: "If you want to make a purchases, you must login first!",
        textAlign: "center",
      },
    ],
  };

  const { steps } = state;

  return (
    <div>
      <Joyride steps={steps} continuous={true} scrollToFirstStep={true} />
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Nav className="me-auto my-2 my-lg-0">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/people" className="nav-link  my-1-step">
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
            <Link to="/login" className="nav-link my-2-step">
              Login
            </Link>
            <Floater content="Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo. While the congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....">
              <Navbar.Brand className="d-flex">Star Wars shop</Navbar.Brand>
            </Floater>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
