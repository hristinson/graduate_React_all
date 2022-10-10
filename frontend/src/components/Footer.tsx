import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <div>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Nav className="footer">
          <div className="navbar-nav ml-auto">
            <Nav.Link href="https://github.com/hristinson/graduate_React">Star Wars shop graduate work and test task from Oleg Martynov for Github/hristinson</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>

    </div>
  );
}

export default Footer;