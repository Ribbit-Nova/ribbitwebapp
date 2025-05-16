"use client";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/Footer";
import CardSlider from "../HomeSlider/CardSlider";

import { Col, Container, Row, Carousel, Accordion } from "react-bootstrap";
import "./home.style.css";
import Link from "next/link";
import Image from "next/image";
import an from "../../asets/img/an.gif";
import iconsn from "../../asets/img/icons.png";
import supra from "../../asets/img/supra.svg";
import Layer_1 from "../../asets/img/Layer_1.png";
import phone_1 from "../../asets/img/phone_1.png";
import k1 from "../../asets/img/k1.svg";
import k2 from "../../asets/img/k2.svg";
import k4 from "../../asets/img/k4.svg";
import ic_arrow_left_bk from "../../asets/img/ic_arrow_left_bk.svg";
import ar1 from "../../asets/img/ar1.svg";
import homepage from "../../asets/img/homepage.svg";
import browser from "../../asets/img/browser.svg";
import wallet from "../../asets/img/wallet.svg";
import wallet2 from "../../asets/img/wallet2.svg";
import card_graphic from "../../asets/img/Card-graphic.gif";
import real_world_rewards from "../../asets/img/Real-world-rewards.gif";
import hicon from "../../asets/img/hicon.png";
import app_animation from "../../asets/img/app_animation.gif";

const items = [
  {
    title: "Multi-Chain Support",
    img: "slider_img/icon1.png",
  },
  {
    title: "AI-Powered Portfolio",
    img: "slider_img/icon2.png",
  },
  {
    title: "Limit order on Dex",
    img: "slider_img/icon3.png",
  },
  {
    title: "DeFi Without Complexity",
    img: "slider_img/icon4.png",
  },
  {
    title: "Loyalty Rewards",
    img: "slider_img/icon5.png",
  },
  {
    title: "Dapp Browser",
    img: "slider_img/icon6.png",
  },
];

// Split into groups of 4

const MultiCardCarousel = () => {
  const [slides, setSlides] = useState();
  useEffect(() => {
    const chunkArray = (arr) => {
      const result = [];
      let size = 4;

      if (window.innerWidth <= 767) {
        size = 1;
      }

      for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
      }
      return result;
    };
    setSlides(chunkArray(items));
  }, []);

  return (
    <>
      <Header />
      <section className="section_1">
        <Image
          className="animation_2"
          src={an}
          alt="an"
          width={336}
          height={336}
        />
        <Container>
          <Row>
            <Col lg="12">
              <span className="bc_3"></span>
              <h1 className="section_text">
                Next-generation multi-chain wallet and payments app that makes
                crypto simple, secure, and usable in daily life.
              </h1>
              <span className="bc_2"></span>
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
            <span className="bc_1"></span>
          </Row>
        </Container>
        <Image
          className="animation_1"
          src={an}
          alt="an"
          width={416}
          height={416}
        />
      </section>
      <section className="section_2">
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="section_text_2">
                Crypto without Confusion Say hello to Ribbit
              </h1>
              <p className="text_p1">
                Built on
                <Image
                  className="mobile_01"
                  src={supra}
                  alt="supra"
                  width={136}
                  height={29}
                />{" "}
              </p>
            </Col>

            <Col lg="12">
              <div className="mobile_img">
                <Image
                  className="mobile_01"
                  src={app_animation}
                  alt="app_animation"
                  width={550}
                  height={856}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <span>
          {" "}
          <Image
            className="line_01"
            src={Layer_1}
            alt="Layer_1"
            height={939}
          />{" "}
        </span>
      </section>

      <section className="section_3">
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="section_text_2">
                The only crypto app<br></br> you will ever need
              </h1>
            </Col>

            <Col lg="12">
              <div className="slider_card">
                <CardSlider />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section_4">
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
                    src={card_graphic}
                    alt="card payment"
                    width={197}
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
                    src={real_world_rewards}
                    alt="real world rewards"
                    width={163}
                    height={182}
                  />{" "}
                </div>
              </div>
            </Col>

            <div className="view_btn">
              <Link href="#">View All</Link>
            </div>
          </Row>
        </Container>
      </section>

      <section className="section_5">
        <Container>
          <Row>
            <Col lg="5">
              <div className="trck_text_img">
                {" "}
                <Image
                  className="phone_1"
                  src={phone_1}
                  alt="phone_1"
                  width={488}
                />{" "}
              </div>
            </Col>
            <Col lg="7">
              <div className="trck_text">
                <p className="track_text_1">
                  Track, trade, and invest in baskets with Indices
                </p>
                <p className="track_text_2">
                  Curated indices help you follow trends, sectors, and market
                  movements & invest in baskets
                </p>
                <Link href="#"> Explore Indices</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section_6">
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="section_text_2">
                You hold the keys.
                <br></br> Ribbit keeps it secure.
              </h1>
            </Col>

            <Col lg="3">
              <div className="keys_box">
                <div className="keys_box_img">
                  {" "}
                  <Image
                    className="k_icon"
                    src={k1}
                    alt="k1"
                    width={48}
                    height={48}
                  />{" "}
                </div>
                <p className="k_text_1">
                  Your keys. <br></br> Your crypto.
                </p>
                <p className="k_text_2">
                  100% Self custody of your funds. Not even Ribbit has the
                  access to what you own.
                </p>
              </div>
            </Col>

            <Col lg="3">
              <div className="keys_box">
                <div className="keys_box_img">
                  {" "}
                  <Image
                    className="k_icon"
                    src={k2}
                    alt="k1"
                    width={48}
                    height={48}
                  />{" "}
                </div>
                <p className="k_text_1">Say goodbye to Spam</p>
                <p className="k_text_2">
                  Ribbit detects spam and alerts you so you don’t click on any
                  malicious links.
                </p>
              </div>
            </Col>

            <Col lg="3">
              <div className="keys_box">
                <div className="keys_box_img">
                  {" "}
                  <Image
                    className="k_icon"
                    src={hicon}
                    alt="k3"
                    width={48}
                    height={48}
                  />{" "}
                </div>
                <p className="k_text_1">
                  Burn unknown <br></br>tokens
                </p>
                <p className="k_text_2">
                  Not sure about a token or it’s origin? Burn it in one tap on
                  Ribbit.
                </p>
              </div>
            </Col>

            <Col lg="3">
              <div className="keys_box">
                <div className="keys_box_img">
                  {" "}
                  <Image
                    className="k_icon"
                    src={k4}
                    alt="k1"
                    width={48}
                    height={48}
                  />{" "}
                </div>
                <p className="k_text_1">
                  24/7 <br></br>Support
                </p>
                <p className="k_text_2">
                  Have questions? Facing a problem? Get CEO level customer
                  support for all your queries.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section_8">
        <Container>
          <Row>
            <Col lg="6">
              <div className="faq_box">
                <p className="f_text_1">
                  Frequently asked<br></br> questions
                </p>
                <p className="f_text_2">
                  Got any questions? We’ve got answers.
                </p>
                <Link href="/faq">
                  {" "}
                  More FAQs
                  <Image
                    className="ic_arrow_left"
                    src={ic_arrow_left_bk}
                    alt="k1"
                    width={24}
                    height={24}
                  />{" "}
                </Link>
              </div>
            </Col>

            <Col lg="6">
              <div className="accordion_box">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      What is Ribbit wallet?
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
                      Ribbit is a multi-chain crypto wallet and payments app. It
                      lets you store, send, receive, stake, and swap crypto
                      tokens across popular blockchains. It also includes a Visa
                      or Mastercard that can be loaded with stablecoins for
                      real-world payments.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How does Ribbit wallet work?
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
                      Ribbit connects to multiple blockchains so you can manage
                      different tokens in one app. You can create or import
                      wallets, stake assets, track your portfolio, and make
                      payments using your Ribbit card. The app also supports
                      features like an in-app dApp browser, limit orders, NFT
                      support, AI Portfolio manager, and real world payments.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Can I import my Starkey wallet into Ribbit?
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
                      Yes, you can import your Starkey wallet into Ribbit using
                      your recovery phrase or private key. Ribbit supports
                      standard wallet formats and is built on Supra’s
                      infrastructure, which allows smooth multi-chain
                      compatibility. Once imported, your assets will be
                      accessible across supported chains, and you can use
                      features like staking, swapping, and payments directly
                      inside the app.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default MultiCardCarousel;
