import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Button , Nav, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

function Header() {
  return (
    <>
 <Navbar bg="body-tertiary" expand="lg">
      <Container>
        <Navbar.Brand className="navbarTitle">JANELLE BROWN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor : 'grey'}} />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="nav1">
            <Nav.Link className="aboutStyle">ABOUT</Nav.Link>
            <Nav.Link className="workStyle">WORK</Nav.Link>
          </Nav>
          <Nav className="nav2">
            <Nav.Item className="connectStyle mt-4" >LET'S CONNECT</Nav.Item>
            <Button variant="light" className="pt-2 pb-2 mt-3 mb-3 emailStyle">syediqran2004@gmail.com</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;
