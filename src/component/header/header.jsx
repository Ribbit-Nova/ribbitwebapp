"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { Nav, Navbar, Col, Container, Row } from "react-bootstrap";
import "./header.style.css";
import Image from "next/image";
import logo from "../../asets/img/logo.png";
import TrackClick from "../TrackClick";
<link rel="icon" href="/favicon.ico" />;

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  console.log(pathname);
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
              <TrackClick
                action="click_logo"
                category="navigation"
                label="Top Nav Logo for Home Page"
              >
                <a onClick={handleClick}>
                  <Image src={logo} alt="Logo" width={125} height={30} />
                </a>
              </TrackClick>
            </div>
          </Col>
          <Col>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <TrackClick
                    action="click_features"
                    category="navigation"
                    label="Top Nav Features"
                  >
                    <Nav.Link
                      href="/features"
                      className={
                        pathname == "/features"
                          ? "active_menu"
                          : "text-gray-700"
                      }
                    >
                      Features{" "}
                    </Nav.Link>
                  </TrackClick>
                  <TrackClick
                    action="click_indices"
                    category="navigation"
                    label="Top Nav indices"
                  >
                    <Nav.Link
                      href="/indices"
                      className={
                        pathname === "/indices"
                          ? "active_menu"
                          : "text-gray-700"
                      }
                    >
                      Indices
                    </Nav.Link>
                  </TrackClick>
                  <TrackClick
                    action="click_gitbook"
                    category="navigation"
                    label="Top Nav GitBook"
                  >
                    <Nav.Link
                      href="https://ribbit-wallet.gitbook.io/ribbit-wallet-whitepaper"
                      className={"text-gray-700"}
                    >
                      Documents
                    </Nav.Link>
                  </TrackClick>
                  <TrackClick
                    action="click_support"
                    category="navigation"
                    label="Top Nav Support"
                  >
                    <Nav.Link
                      href="mailto:support@ribbitwallet.com?subject=Support Request&body=Hi Support Team,%0D%0A%0D%0AI need help with..."
                      className="get_call"
                    >
                      Get Support
                    </Nav.Link>
                  </TrackClick>
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
