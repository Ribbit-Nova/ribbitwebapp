"use client";
import { Nav, Navbar, Col, Container, Row } from "react-bootstrap";
import "./header.style.css";
import Image from "next/image";
import logo from "../../asets/img/logo.png";

function Header() {
  return (
    <header className="header_menu">
      <Container>
        <Row>
          <Col lg="6">
            <div className="logo_header">
              {" "}
              <Image src={logo} alt="Logo" width={125} height={30} />
            </div>
          </Col>
          <Col lg="6">
            <Nav className="me-auto">
              <Nav.Link href="#">Features</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Documents</Nav.Link>
              <Nav.Link href="#">Learn</Nav.Link>
              <Nav.Link href="#" className="get_call">
                Get Support
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
