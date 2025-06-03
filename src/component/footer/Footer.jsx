"use client";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import "./footer.style.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../asets/img/logo.png";
import ar1 from "../../asets/img/ar1.svg";
import s01 from "../../asets/img/s01.svg";
import s1 from "../../asets/img/s1.svg";
import s3 from "../../asets/img/s3.png";
import s4 from "../../asets/img/s4.svg";

function footer() {
  const handleZipDownload = async () => {
    const response = await fetch("/brandkit/RibbitKit2025.zip"); // Ya koi URL jahan se zip mile
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "RibbitKit2025.zip"; // Downloaded filename
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };
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
              {/* <InputGroup className="newsletter">
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
              </InputGroup> */}
            </div>
          </Col>
          <Col lg="3">
            <div className="ft_menu">
              <p>Company</p>
              <ul>
                <li>
                  <Link
                    target="_blank"
                    href="https://ribbit-wallet.gitbook.io/ribbit-wallet-whitepaper"
                  >
                    {" "}
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link href="/terms-conditions">Terms</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
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
                  <Link href="/faq">Faq</Link>
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
                  <Link href="javascript:;" onClick={handleZipDownload}>
                    Brandkit
                  </Link>
                </li>
                <li>
                  <Link href="#">News</Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="12" className="mobile_m">
            <div className="accordion_box">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Company
                    <span>
                      {" "}
                      <Image
                        className="k_icon"
                        src={ar1}
                        alt="ar1"
                        width={14}
                        height={14}
                      />{" "}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
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
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Product
                    <span>
                      {" "}
                      <Image
                        className="k_icon"
                        src={ar1}
                        alt="ar1"
                        width={14}
                        height={14}
                      />{" "}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
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
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Resources
                    <span>
                      {" "}
                      <Image
                        className="k_icon"
                        src={ar1}
                        alt="ar1"
                        width={14}
                        height={14}
                      />{" "}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <Link href="#">Blog</Link>
                      </li>
                      <li>
                        <Link href="javascript:;" onClick={handleZipDownload}>
                          Brandkit
                        </Link>
                      </li>
                      <li>
                        <Link href="#">News</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col lg="12">
            {" "}
            <div className="link_list">
              <div className="copyright_text">
                <p>Copyright © Ribbit Wallet 2025</p>
              </div>
              <div className="social_link">
                <p>Follow us to get exclusive updates</p>

                <ul>
                  <li>
                    <Link target="_blank" href="https://t.me/+q6_7wewsa1phNjgy">
                      {" "}
                      <Image src={s01} alt="img" width={42} height={42} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://discord.com/invite/PQ96y6S9aS"
                    >
                      {" "}
                      <Image src={s1} alt="img" width={42} height={42} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/company/ribbit-wallet/"
                    >
                      {" "}
                      <Image src={s3} alt="img" width={42} height={42} />
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" href="https://x.com/ribbitwallet">
                      {" "}
                      <Image src={s4} alt="img" width={42} height={42} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default footer;
