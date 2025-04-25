"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { Nav, Navbar, Col, Container, Row } from "react-bootstrap";
import "./header.style.css";
import Image from "next/image";
import logo from "../../asets/img/logo.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={classNames("header_menu fixed  transition-all duration-300", {
        "shadow-md": scrolled,
        "bg-transparent": !scrolled,
      })}
    >
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
      </Container>
    </header>
  );
}

export default Header;
