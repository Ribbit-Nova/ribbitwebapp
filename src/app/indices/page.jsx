"use client";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Hooter";
import Grap from "../../component/grap/Grap";

import { Col, Container, Row, InputGroup, Form } from "react-bootstrap";
import "./indices.style.css";
import Link from "next/link";
import Image from "next/image";
import rb from "../../asets/img/rb.png";

function indices() {
  return (
    <>
      <Header />
      <section className="section_1">
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="section_text">Indices</h1>
              <p className="pera_list">
                Powered by Ribbit. Real-time insights, Accurate data.
              </p>
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
              <div className="doc_btn">
                <Link href="">View Doc</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section_garp">
        <Container>
          <Row>
            <Col sm="12" lg="4">
              <div className="index_grap">
                <p className="tx_1">
                  {" "}
                  <Image
                    className="icen_n"
                    src={rb}
                    alt="iconsn"
                    width={28}
                    height={28}
                  />
                  Ribbit Index
                </p>
                <p className="tx_2">24.123</p>
                <div className="qnt">
                  <ul>
                    <li>
                      <span className="cd1">1h %</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="7"
                        viewBox="0 0 6 7"
                        fill="none"
                      >
                        <path
                          d="M3.29199 0.0483398L5.89007 6.04834H0.693916L3.29199 0.0483398Z"
                          fill="#A9FF7E"
                        />
                      </svg>
                      <span className="cd2">1.1%</span>
                    </li>
                    <li>
                      <span className="cd1">1h %</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="7"
                        viewBox="0 0 6 7"
                        fill="none"
                      >
                        <path
                          d="M3.29199 0.0483398L5.89007 6.04834H0.693916L3.29199 0.0483398Z"
                          fill="#A9FF7E"
                        />
                      </svg>
                      <span className="cd2">1.1%</span>
                    </li>
                    <li>
                      <span className="cd1">1h %</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="7"
                        viewBox="0 0 6 7"
                        fill="none"
                      >
                        <path
                          d="M3.29199 0.0483398L5.89007 6.04834H0.693916L3.29199 0.0483398Z"
                          fill="#A9FF7E"
                        />
                      </svg>
                      <span className="cd2">1.1%</span>
                    </li>
                  </ul>
                </div>
                <Grap />
              </div>
            </Col>

            <Col lg="4">
              <div className="index_grap">
                <p className="tx_1">
                  {" "}
                  <Image
                    className="icen_n"
                    src={rb}
                    alt="iconsn"
                    width={28}
                    height={28}
                  />
                  Ribbit Meme Index
                </p>
                <p className="tx_2">24.123</p>
                <div className="qnt">
                  <ul>
                    <li>
                      <span className="cd1">1h %</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="7"
                        viewBox="0 0 6 7"
                        fill="none"
                      >
                        <path
                          d="M3.29199 0.0483398L5.89007 6.04834H0.693916L3.29199 0.0483398Z"
                          fill="#A9FF7E"
                        />
                      </svg>
                      <span className="cd2">1.1%</span>
                    </li>
                    <li>
                      <span className="cd1">1h %</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="7"
                        viewBox="0 0 6 7"
                        fill="none"
                      >
                        <path
                          d="M3.29199 0.0483398L5.89007 6.04834H0.693916L3.29199 0.0483398Z"
                          fill="#A9FF7E"
                        />
                      </svg>
                      <span className="cd2">1.1%</span>
                    </li>
                    <li>
                      <span className="cd1">1h %</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="7"
                        viewBox="0 0 6 7"
                        fill="none"
                      >
                        <path
                          d="M3.29199 0.0483398L5.89007 6.04834H0.693916L3.29199 0.0483398Z"
                          fill="#A9FF7E"
                        />
                      </svg>
                      <span className="cd2">1.1%</span>
                    </li>
                  </ul>
                </div>
                <Grap />
              </div>
            </Col>
            <Col lg="4">
              <div className="index_grap">
                <p className="tx_1">
                  {" "}
                  <Image
                    className="icen_n"
                    src={rb}
                    alt="iconsn"
                    width={28}
                    height={28}
                  />
                  Ribbit Move Index
                </p>
                <p className="tx_2">24.123</p>
                <div className="qnt">
                  <ul>
                    <li>
                      <span className="cd1">1h %</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="7"
                        viewBox="0 0 6 7"
                        fill="none"
                      >
                        <path
                          d="M3.29199 0.0483398L5.89007 6.04834H0.693916L3.29199 0.0483398Z"
                          fill="#A9FF7E"
                        />
                      </svg>
                      <span className="cd2">1.1%</span>
                    </li>
                    <li>
                      <span className="cd1">1h %</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="7"
                        viewBox="0 0 6 7"
                        fill="none"
                      >
                        <path
                          d="M3.29199 0.0483398L5.89007 6.04834H0.693916L3.29199 0.0483398Z"
                          fill="#A9FF7E"
                        />
                      </svg>
                      <span className="cd2">1.1%</span>
                    </li>
                    <li>
                      <span className="cd1">1h %</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="7"
                        viewBox="0 0 6 7"
                        fill="none"
                      >
                        <path
                          d="M3.29199 0.0483398L5.89007 6.04834H0.693916L3.29199 0.0483398Z"
                          fill="#A9FF7E"
                        />
                      </svg>
                      <span className="cd2">1.1%</span>
                    </li>
                  </ul>
                </div>
                <Grap />
              </div>
            </Col>
            <Col lg="4">
              <div className="index_grap">
                <p className="tx_1">
                  {" "}
                  <Image
                    className="icen_n"
                    src={rb}
                    alt="iconsn"
                    width={28}
                    height={28}
                  />
                  Ribbit Move Index
                </p>
                <p className="tx_2">24.123</p>
                <div className="qnt">
                  <ul>
                    <li>
                      <span className="cd1">1h %</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="7"
                        viewBox="0 0 6 7"
                        fill="none"
                      >
                        <path
                          d="M3.29199 0.0483398L5.89007 6.04834H0.693916L3.29199 0.0483398Z"
                          fill="#A9FF7E"
                        />
                      </svg>
                      <span className="cd2">1.1%</span>
                    </li>
                    <li>
                      <span className="cd1">1h %</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="7"
                        viewBox="0 0 6 7"
                        fill="none"
                      >
                        <path
                          d="M3.29199 0.0483398L5.89007 6.04834H0.693916L3.29199 0.0483398Z"
                          fill="#A9FF7E"
                        />
                      </svg>
                      <span className="cd2">1.1%</span>
                    </li>
                    <li>
                      <span className="cd1">1h %</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="7"
                        viewBox="0 0 6 7"
                        fill="none"
                      >
                        <path
                          d="M3.29199 0.0483398L5.89007 6.04834H0.693916L3.29199 0.0483398Z"
                          fill="#A9FF7E"
                        />
                      </svg>
                      <span className="cd2">1.1%</span>
                    </li>
                  </ul>
                </div>
                <Grap />
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
