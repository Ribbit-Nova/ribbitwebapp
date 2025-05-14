"use client";
import Header from "../../component/header/header";
import Footer from "../../component/footer/Footer";

import { Col, Container, Row, InputGroup, Form } from "react-bootstrap";
import "./blog.style.css";
import Link from "next/link";
import Image from "next/image";
import b1 from "../../asets/img/b1.jpg";
import user from "../../asets/img/user.png";
import sq from "../../asets/img/sq.svg";

function indices() {
  return (
    <>
      <Header />
      <section className="section_1">
        <Container>
          <Row>
            <Col lg="12">
              <div className="blog_box_list">
                <h1 className="section_text">The Ribbit Blog</h1>
                <p className="pera_list">
                  Explore the latest topics, trends and insights with in Crypto
                  and Web3 with Ribbit
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section_blig_menu">
        <Container>
          <Row>
            <Col sm="12" lg="9">
              <div className="menu_bolg">
                <ul>
                  <li>
                    <Link href="#">All</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="#">Crypto</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="#">Blockchain</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="#">Market Trends</Link>
                  </li>
                  <li>
                    <Link href="#">DeFi</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="#">Meme Coin</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="#">Indices</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="#">Multichain</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="#">Trade</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="#">Swap</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm="12" lg="3">
              <div className="search_form">
                <InputGroup>
                  <Form.Control
                    aria-label="Default"
                    placeholder="Search.."
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M11.5 19C15.9183 19 19.5 15.4183 19.5 11C19.5 6.58172 15.9183 3 11.5 3C7.08172 3 3.5 6.58172 3.5 11C3.5 15.4183 7.08172 19 11.5 19Z"
                    stroke="#828A99"
                    strokeWidth="2.01067"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.4999 21L17.1499 16.65"
                    stroke="#828A99"
                    strokeWidth="2.01067"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section_log_list">
        <Container>
          <Row>
            <Col sm="12" lg="3">
              <div className="blog_box">
                <Image src={b1} alt="img" width={300} height={231} />
                <div className="blog_box_text">
                  {" "}
                  <Link className="cr1" href="#">
                    Crypto
                  </Link>
                  <p>How to Buy Hot Tokens on Ribbit with Binance Connect?</p>
                </div>
                <div className="user_list">
                  <ul>
                    <li>
                      {" "}
                      <Image src={user} alt="img" width={20} height={20} />
                    </li>
                    <li>Abhinav Kumar</li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                      >
                        <circle
                          cx="1.96326"
                          cy="1.667"
                          r="1.63025"
                          fill="#828A99"
                        />
                      </svg>
                    </li>
                    <li>01 March, 2025</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col sm="12" lg="3">
              <div className="blog_box">
                <Image src={b1} alt="img" width={300} height={231} />
                <div className="blog_box_text">
                  {" "}
                  <Link className="cr1" href="#">
                    Crypto
                  </Link>
                  <p>How to Buy Hot Tokens on Ribbit with Binance Connect?</p>
                </div>
                <div className="user_list">
                  <ul>
                    <li>
                      {" "}
                      <Image src={user} alt="img" width={20} height={20} />
                    </li>
                    <li>Abhinav Kumar</li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                      >
                        <circle
                          cx="1.96326"
                          cy="1.667"
                          r="1.63025"
                          fill="#828A99"
                        />
                      </svg>
                    </li>
                    <li>01 March, 2025</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col sm="12" lg="3">
              <div className="blog_box">
                <Image src={b1} alt="img" width={300} height={231} />
                <div className="blog_box_text">
                  {" "}
                  <Link className="cr1" href="#">
                    Crypto
                  </Link>
                  <p>How to Buy Hot Tokens on Ribbit with Binance Connect?</p>
                </div>
                <div className="user_list">
                  <ul>
                    <li>
                      {" "}
                      <Image src={user} alt="img" width={20} height={20} />
                    </li>
                    <li>Abhinav Kumar</li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                      >
                        <circle
                          cx="1.96326"
                          cy="1.667"
                          r="1.63025"
                          fill="#828A99"
                        />
                      </svg>
                    </li>
                    <li>01 March, 2025</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col sm="12" lg="3">
              <div className="blog_box">
                <Image src={b1} alt="img" width={300} height={231} />
                <div className="blog_box_text">
                  {" "}
                  <Link className="cr1" href="#">
                    Crypto
                  </Link>
                  <p>How to Buy Hot Tokens on Ribbit with Binance Connect?</p>
                </div>
                <div className="user_list">
                  <ul>
                    <li>
                      {" "}
                      <Image src={user} alt="img" width={20} height={20} />
                    </li>
                    <li>Abhinav Kumar</li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                      >
                        <circle
                          cx="1.96326"
                          cy="1.667"
                          r="1.63025"
                          fill="#828A99"
                        />
                      </svg>
                    </li>
                    <li>01 March, 2025</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col sm="12" lg="3">
              <div className="blog_box">
                <Image src={b1} alt="img" width={300} height={231} />
                <div className="blog_box_text">
                  {" "}
                  <Link className="cr1" href="#">
                    Crypto
                  </Link>
                  <p>How to Buy Hot Tokens on Ribbit with Binance Connect?</p>
                </div>
                <div className="user_list">
                  <ul>
                    <li>
                      {" "}
                      <Image src={user} alt="img" width={20} height={20} />
                    </li>
                    <li>Abhinav Kumar</li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                      >
                        <circle
                          cx="1.96326"
                          cy="1.667"
                          r="1.63025"
                          fill="#828A99"
                        />
                      </svg>
                    </li>
                    <li>01 March, 2025</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col sm="12" lg="3">
              <div className="blog_box">
                <Image src={b1} alt="img" width={300} height={231} />
                <div className="blog_box_text">
                  {" "}
                  <Link className="cr1" href="#">
                    Crypto
                  </Link>
                  <p>How to Buy Hot Tokens on Ribbit with Binance Connect?</p>
                </div>
                <div className="user_list">
                  <ul>
                    <li>
                      {" "}
                      <Image src={user} alt="img" width={20} height={20} />
                    </li>
                    <li>Abhinav Kumar</li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                      >
                        <circle
                          cx="1.96326"
                          cy="1.667"
                          r="1.63025"
                          fill="#828A99"
                        />
                      </svg>
                    </li>
                    <li>01 March, 2025</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col sm="12" lg="3">
              <div className="blog_box">
                <Image src={b1} alt="img" width={300} height={231} />
                <div className="blog_box_text">
                  {" "}
                  <Link className="cr1" href="#">
                    Crypto
                  </Link>
                  <p>How to Buy Hot Tokens on Ribbit with Binance Connect?</p>
                </div>
                <div className="user_list">
                  <ul>
                    <li>
                      {" "}
                      <Image src={user} alt="img" width={20} height={20} />
                    </li>
                    <li>Abhinav Kumar</li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                      >
                        <circle
                          cx="1.96326"
                          cy="1.667"
                          r="1.63025"
                          fill="#828A99"
                        />
                      </svg>
                    </li>
                    <li>01 March, 2025</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col sm="12" lg="3">
              <div className="blog_box">
                <Image src={b1} alt="img" width={300} height={231} />
                <div className="blog_box_text">
                  {" "}
                  <Link className="cr1" href="#">
                    Crypto
                  </Link>
                  <p>How to Buy Hot Tokens on Ribbit with Binance Connect?</p>
                </div>
                <div className="user_list">
                  <ul>
                    <li>
                      {" "}
                      <Image src={user} alt="img" width={20} height={20} />
                    </li>
                    <li>Abhinav Kumar</li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                      >
                        <circle
                          cx="1.96326"
                          cy="1.667"
                          r="1.63025"
                          fill="#828A99"
                        />
                      </svg>
                    </li>
                    <li>01 March, 2025</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="12">
              <div className="page_na">
                <ul>
                  <li>
                    <Link href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="24"
                        viewBox="0 0 14 24"
                        fill="none"
                      >
                        <path
                          d="M13.4094 0.591025C13.2238 0.40375 13.0029 0.255105 12.7596 0.153666C12.5163 0.0522265 12.2553 0 11.9917 0C11.7281 0 11.4672 0.0522265 11.2238 0.153666C10.9805 0.255105 10.7597 0.40375 10.5741 0.591025L0.590618 10.5814C0.403471 10.7671 0.254929 10.9881 0.153559 11.2316C0.05219 11.4751 0 11.7362 0 12C0 12.2638 0.05219 12.5249 0.153559 12.7684C0.254929 13.0119 0.403471 13.2329 0.590618 13.4186L10.5741 23.409C10.7597 23.5962 10.9805 23.7449 11.2238 23.8463C11.4672 23.9478 11.7281 24 11.9917 24C12.2553 24 12.5163 23.9478 12.7596 23.8463C13.0029 23.7449 13.2238 23.5962 13.4094 23.409C13.5965 23.2232 13.7451 23.0022 13.8464 22.7588C13.9478 22.5153 14 22.2541 14 21.9903C14 21.7266 13.9478 21.4654 13.8464 21.2219C13.7451 20.9785 13.5965 20.7575 13.4094 20.5717L4.82361 12L13.4094 3.42828C13.5965 3.24254 13.7451 3.02155 13.8464 2.77807C13.9478 2.53458 14 2.27342 14 2.00965C14 1.74589 13.9478 1.48473 13.8464 1.24124C13.7451 0.99776 13.5965 0.776772 13.4094 0.591025Z"
                          fill="#828A99"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>Page 1</li>
                  <li>
                    <Link href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="24"
                        viewBox="0 0 14 24"
                        fill="none"
                      >
                        <path
                          d="M0.590618 0.591025C0.776237 0.40375 0.997072 0.255105 1.24039 0.153666C1.4837 0.0522265 1.74468 0 2.00827 0C2.27186 0 2.53284 0.0522265 2.77615 0.153666C3.01947 0.255105 3.2403 0.40375 3.42592 0.591025L13.4094 10.5814C13.5965 10.7671 13.7451 10.9881 13.8464 11.2316C13.9478 11.4751 14 11.7362 14 12C14 12.2638 13.9478 12.5249 13.8464 12.7684C13.7451 13.0119 13.5965 13.2329 13.4094 13.4186L3.42592 23.409C3.2403 23.5962 3.01947 23.7449 2.77615 23.8463C2.53284 23.9478 2.27186 24 2.00827 24C1.74468 24 1.4837 23.9478 1.24039 23.8463C0.997072 23.7449 0.776237 23.5962 0.590618 23.409C0.403471 23.2232 0.25493 23.0022 0.15356 22.7588C0.0521898 22.5153 0 22.2541 0 21.9903C0 21.7266 0.0521898 21.4654 0.15356 21.2219C0.25493 20.9785 0.403471 20.7575 0.590618 20.5717L9.17639 12L0.590618 3.42828C0.403471 3.24254 0.25493 3.02155 0.15356 2.77807C0.0521898 2.53458 0 2.27342 0 2.00965C0 1.74589 0.0521898 1.48473 0.15356 1.24124C0.25493 0.99776 0.403471 0.776772 0.590618 0.591025Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section_blog_subscribe">
        <Row>
          <Col lg="5" sm="12">
            <div className="sub_img">
              <Image src={sq} alt="img" width={570} height={448} />
            </div>
          </Col>
          <Col lg="7" sm="12">
            <div className="sub_text">
              <h2>Let us hope into your email!</h2>
              <p>
                Subscribe now to stay informed with the latest news and updates
                from Ribbit.
              </p>
              <InputGroup className="email_input">
                <Form.Control
                  placeholder="Enter your E-mail"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                />
                <button>Subscribe</button>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </section>

      <Footer />
    </>
  );
}

export default indices;
