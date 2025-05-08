"use client";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import Grapdetails from "../../component/grapDetails/Grapdetails";

import { Col, Container, Row, InputGroup, Form } from "react-bootstrap";
import "./indices_details.style.css";
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
              <h1 className="section_text">Ribbit Meme Index</h1>
              <p className="pera_list">
                The Ribbit Meme Index tracks the top 10 meme coins by market
                capitalization, equally weighted for balanced exposure.
                Combining community-driven appeal with financial potential, the
                index captures the pulse of the meme coin narrative in the
                market.
              </p>
              <div className="search_form_box">
                <p className="cunt_p">24.123</p>
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
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                      >
                        <path
                          d="M6.1259 13.5413L11.7909 0.458618H0.460938L6.1259 13.5413Z"
                          fill="#F24B4B"
                        />
                      </svg>
                      <span className="cd2 red_cd">1.1%</span>
                    </li>
                  </ul>
                </div>
                <p className="last_p">
                  Last update <span>10 min ago</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section_garp">
        <Container>
          <Row>
            <Col sm="12" lg="8">
              <div className="index_grap">
                <Grapdetails />
              </div>
            </Col>

            <Col lg="4">
              <Col lg="12">
                <div className="index_grap_tabel">
                  <ul>
                    <li>
                      <span>24h Range</span> <span>150.00-160.00</span>
                    </li>
                    <li>
                      <span>24h Range</span> <span>150.00-160.00</span>
                    </li>
                    <li>
                      <span>24h Range</span> <span>150.00-160.00</span>
                    </li>
                    <li>
                      <span>24h Range</span> <span>150.00-160.00</span>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm="12" lg="12">
                <div className="index_grap_tabel">
                  <p className="gr_hd">Constituents</p>
                  <p className="gr_hd2">
                    <span>Asset</span> <span>Weight</span>
                  </p>
                  <ul>
                    <li>
                      <span>DOGE/USDT</span> <span>10%</span>
                    </li>
                    <li>
                      <span>DOGE/USDT</span> <span>10%</span>
                    </li>
                    <li>
                      <span>DOGE/USDT</span> <span>10%</span>
                    </li>
                    <li>
                      <span>DOGE/USDT</span> <span>10%</span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Col>

            <Col sm="12" lg="12">
              <div className="index_grap_box_text">
                <h1>Onchain transactions of the index</h1>
                <ul>
                  <li>
                    <span>Timestamp </span> <span>01 Apr, 2025</span>
                  </li>
                  <li>
                    <span>Type </span> <span>Create Index </span>
                  </li>
                  <li>
                    <span>Data Pairs </span>{" "}
                    <span>
                      DOGE/USDT, PEPE/USDT, SHIB/USDT, FLOKI/USDT, BONK/USDT,
                      WIF/USDT, MOG/USDT, PNUT/USDT, POPCAT/USDT, BRETT/USDT
                    </span>
                  </li>
                  <li>
                    <span>Weight </span>{" "}
                    <span>
                      10%, 10%, 10%, 10%, 10%, 10%, 10%, 10%, 10%, 10%{" "}
                    </span>
                  </li>
                </ul>
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
