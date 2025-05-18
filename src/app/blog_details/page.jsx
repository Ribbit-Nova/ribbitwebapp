"use client";
import Header from "../../component/header/header";
import Footer from "../../component/footer/Footer";
import Loader from "../../component/Loader/Loader";

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
      <Loader />
      <Header />
      <section className="section_1">
        <Container>
          <Row>
            <Col lg="12"></Col>
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
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default indices;
