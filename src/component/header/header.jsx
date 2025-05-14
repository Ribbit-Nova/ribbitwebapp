"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import classNames from "classnames";
import { Nav, Navbar, Col, Container, Row } from "react-bootstrap";
import "./header.style.css";
import Image from "next/image";
import logo from "../../asets/img/logo.png";
<link rel="icon" href="/favicon.ico" />;

function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    router.push("/"); // redirect to /about
  };
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
              <a onClick={handleClick}>
                <Image src={logo} alt="Logo" width={125} height={30} />
              </a>
            </div>
          </Col>
          <Col>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/features">Features</Nav.Link>
                  <Nav.Link target="_blank" href="https://ribbit-wallet.gitbook.io/ribbit-wallet-whitepaper">Documents</Nav.Link>
                  <Nav.Link target="_blank" href="https://discord.gg/Ebk6rqTS" className="get_call">
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