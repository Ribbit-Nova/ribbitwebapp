"use client";
import { useState } from "react";
import { Nav, Navbar, Col, Container, Row } from "react-bootstrap";
import "./header.style.css";
import Image from "next/image";
import logo from "../../asets/img/logo.png";

function Header() {
  return (
    <header className="header_menu">
      <Container>
        <div className="web_menu">
          <Col>
            <div className="logo_header">
              {" "}
              <Image src={logo} alt="Logo" width={125} height={30} />
            </div>
          </Col>
          <Col>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#">Features</Nav.Link>
                  <Nav.Link href="#">Blog</Nav.Link>
                  <Nav.Link href="#">Documents</Nav.Link>
                  <Nav.Link href="#">Learn</Nav.Link>
                  <Nav.Link href="#" className="get_call">
                    Get Support
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </div>
        {/* <Row>
          <div className="mobile_menu">
            <Button variant="primary" onClick={handleShow} className="me-2">
              {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
          </div>{" "}
        </Row> */}
      </Container>
    </header>
  );
}

export default Header;
