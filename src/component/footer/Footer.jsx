"use client";
import { Col, Container, Row, InputGroup, Form } from "react-bootstrap";
import "./footer.style.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../asets/img/logo.png";
import arow from "../../asets/img/arow.svg";

function Header() {
  return (
    <footer className="footer_menu">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo_footer">
              {" "}
              <Image src={logo} alt="Logo" width={125} height={30} />
              <p>
                Ribbit combines the best of a crypto wallet, DeFi hub, and
                real-world payments solution into one powerful app.
              </p>
              <InputGroup className="newsletter">
                <InputGroup.Text>Subscribe to our newsletter</InputGroup.Text>

                <div className="email_box">
                  <Form.Control
                    aria-label="Enter your E-mail"
                    placeholder="Enter your E-mail"
                  />{" "}
                  <Link href="#">
                    <Image src={arow} alt="arow" width={28} height={28} />
                  </Link>
                </div>
              </InputGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="ft_menu">
              <p>Company</p>
              <ul>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#"> Whitepaper</Link>
                </li>
                <li>
                  <Link href="#">Terms</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="3">
            <div className="ft_menu">
              <p>Product</p>
              <ul>
                <li>
                  <Link href="#">Browser Extension</Link>
                </li>
                <li>
                  <Link href="#">Mobile App</Link>
                </li>
                <li>
                  <Link href="#">Indices</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="2">
            <div className="ft_menu">
              <p>Resources</p>
              <ul>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Brandkit</Link>
                </li>
                <li>
                  <Link href="#">News</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="12">
            <div className="copyright_text">
              <p>Copyright © Ribbit Wallet 2025</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Header;
