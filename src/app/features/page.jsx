"use client";
import Header from "../../component/header/header";
import Footer from "../../component/footer/Footer";
import {
  Col,
  Container,
  Row,
  Carousel,
  Card,
  Accordion,
} from "react-bootstrap";
import "./features.style.css";
import Link from "next/link";
import Image from "next/image";
import iconsn from "../../asets/img/icons.png";
import coin_1 from "../../asets/img/coin_1.gif";
import graphic1 from "../../asets/img/graphic1.svg";
import dex_logos from "../../asets/img/dex_logos.png";
import graphic3 from "../../asets/img/graphic3.svg";
import graphic4 from "../../asets/img/graphic4.svg";
import c1 from "../../asets/img/c1.gif";
import card from "../../asets/img/card.svg";
import coin from "../../asets/img/coin.gif";
import graphic from "../../asets/img/graphic.png";
import hotel from "../../asets/img/hotel.png";
import graphic5 from "../../asets/img/graphic5.png";
import graphic6 from "../../asets/img/graphic6.png";

function Fatures() {
  return (
    <>
      <Header />
      <section className="section_1">
        <div className="section_top">
          <Container>
            <Row>
              <Col lg="12">
                <h1 className="section_text">
                  Next-generation multi-chain wallet and payments app that makes
                  crypto simple, secure, and usable in daily life.
                </h1>
              </Col>

              <Col lg="12">
                <div className="browser_btn">
                  <Link href="/download">
                    {" "}
                    <Image
                      className="btn_iocn"
                      src={iconsn}
                      alt="iconsn"
                      width={60}
                    />{" "}
                    Browser extension
                  </Link>
                  <Link href="/download">Download mobile app</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="section_4">
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="section_text_2">
                Do more with your crypto <br></br> with Ribbit super app
              </h1>
            </Col>

            <Col lg="7">
              <div className="ribbit_box">
                <div className="ribbit_box_text ch1">
                  <p className="bx_text_1">Multi-Chain Support</p>
                  <p className="bx_text_2">
                    Keep all your crypto in one place. No need to download
                    multiple wallets.
                  </p>
                </div>
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={coin_1}
                    alt="coin_1"
                    width={400}
                    height={215}
                  />{" "}
                </div>
              </div>
            </Col>
            <Col lg="5">
              <div className="ribbit_box pow_1">
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={graphic1}
                    alt="graphic1"
                    width={100}
                    height={100}
                  />{" "}
                </div>
                <div className="ribbit_box_text">
                  <p className="bx_text_1">AI-Powered Portfolio</p>
                  <p className="bx_text_2">
                    Smart insights and automation to help you manage your
                    assets.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="5">
              <div className="ribbit_box pow_1">
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={dex_logos}
                    alt="dex_logos"
                    width={216}
                    height={50}
                  />{" "}
                </div>
                <div className="ribbit_box_text">
                  <p className="bx_text_1">Limit order on Dex</p>
                  <p className="bx_text_2">
                    Set orders for buying, selling or trading at a specific
                    price and forget. Execute trades while you’re sleeping.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="7">
              <div className="ribbit_box">
                <div className="ribbit_box_text ch1">
                  <p className="bx_text_1">DeFi Without Complexity</p>
                  <p className="bx_text_2">
                    Stake or provide liquidity without connecting your wallet on
                    any website. Earn yield seamlessly.
                  </p>
                </div>
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={graphic3}
                    alt="graphic3"
                    width={400}
                    height={215}
                  />{" "}
                </div>
              </div>
            </Col>

            <Col lg="7">
              <div className="ribbit_box">
                <div className="ribbit_box_text ch1">
                  <p className="bx_text_1">Loyalty Rewards</p>
                  <p className="bx_text_2">
                    We value our froggie community. Earn points and get rewarded
                    for everything you do on Ribbit.
                  </p>
                </div>
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={graphic4}
                    alt="graphic4"
                    width={350}
                    height={225}
                  />{" "}
                </div>
              </div>
            </Col>

            <Col lg="5">
              <div className="ribbit_box pow_1">
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={c1}
                    alt="c1"
                    width={48}
                    height={48}
                  />{" "}
                </div>
                <div className="ribbit_box_text">
                  <p className="bx_text_1">Dapps Browser</p>
                  <p className="bx_text_2">
                    Smart insights and automation to help you manage your
                    assets.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section_4 section_new_5">
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="section_text_2">
                Do more with your crypto <br></br> with Ribbit super app
              </h1>
            </Col>

            <Col lg="6">
              <div className="ribbit_box">
                <div className="ribbit_box_text">
                  <p className="bx_text_1">Real world payments</p>
                  <p className="bx_text_2">
                    Keep your crypto in one place and make payments in real
                    world smoothly with VISA & Mastercard powered crypto card.
                  </p>
                </div>
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={card}
                    alt="card"
                    width={400}
                    height={218}
                  />{" "}
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="ribbit_box">
                <div className="ribbit_box_text">
                  <p className="bx_text_1">Real world rewards</p>
                  <p className="bx_text_2">
                    Earn real world rewards for making payments and bookings.
                  </p>
                </div>
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={graphic}
                    alt="graphic"
                    width={230}
                    height={182}
                  />{" "}
                  <Image
                    className="coin_img"
                    src={coin}
                    alt="coin"
                    width={78}
                    height={78}
                  />{" "}
                </div>
              </div>
            </Col>

            <Col lg="4">
              <div className="ribbit_box pow_1">
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={hotel}
                    alt="hotel"
                    width={89}
                    height={94}
                  />{" "}
                </div>
                <div className="ribbit_box_text">
                  <p className="bx_text_1">Hotel Bookings</p>
                  <p className="bx_text_2">
                    Travelling? No need to convert to fiat. Book directly with
                    your crypto.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="ribbit_box pow_1">
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={graphic5}
                    alt="graphic5"
                    width={134}
                    height={67}
                  />{" "}
                </div>
                <div className="ribbit_box_text">
                  <p className="bx_text_1">Flight Bookings</p>
                  <p className="bx_text_2">
                    Use your crypto to book your flight tickets in real world.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="ribbit_box pow_1">
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={graphic6}
                    alt="graphic6"
                    width={100}
                    height={91}
                  />{" "}
                </div>
                <div className="ribbit_box_text">
                  <p className="bx_text_1">Bill Payments</p>
                  <p className="bx_text_2">
                    Pay bills, shop online or offline directly with your crypto.
                  </p>
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

export default Fatures;
