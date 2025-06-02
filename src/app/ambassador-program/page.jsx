"use client";
import Header from "../../component/header/header";
import Footer from "../../component/footer/Footer";
import Loader from "../../component/Loader/Loader";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import "./ambassador-program.style.css";
import Link from "next/link";
import Image from "next/image";
import r1 from "../../asets/img/r1.svg";
import r2 from "../../asets/img/r2.svg";
import r3 from "../../asets/img/r3.svg";
import r4 from "../../asets/img/r4.svg";
import new_ar1 from "../../asets/img/new_ar1.png";
import new_ar2 from "../../asets/img/new_ar2.png";
import new_ar3 from "../../asets/img/new_ar3.png";
import new_ar4 from "../../asets/img/new_ar4.png";
import ar1 from "../../asets/img/ar1.svg";
import ic_arrow_left_bk from "../../asets/img/ic_arrow_left_bk.svg";
import animated_coins from "../../asets/img/animated_coins.svg";

function Fatures() {
  return (
    <>
      {" "}
      <Loader />
      <Header />
      <section className="section_1">
        <div className="section_top">
          <Container>
            <Row>
              <Col lg="12">
                <h1 className="section_text">
                  Become a{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="82"
                    height="48"
                    viewBox="0 0 82 48"
                    fill="none"
                  >
                    <path
                      d="M79.7738 22.0254C78.9787 20.8946 78.643 19.5165 78.855 18.1383C79.0493 16.8839 79.1023 15.5941 78.9787 14.2512C78.2719 6.8481 71.9819 0.893782 64.5434 0.54041C59.4019 0.310718 54.7903 2.66064 51.875 6.38872C50.6736 7.92589 48.73 8.66797 46.8041 8.52662C44.8783 8.38527 42.9877 8.3146 41.0088 8.3146C38.7296 8.3146 36.521 8.42061 34.3478 8.59729C32.6693 8.73864 31.0791 7.97889 30.072 6.61841C26.7326 2.14825 20.9373 -0.431363 14.6473 0.893782C9.32902 2.0069 4.92954 6.08835 3.39237 11.2829C2.7033 13.5975 2.57962 15.8591 2.89765 17.9617C3.14501 19.5695 2.77397 21.1597 1.89054 22.5378C0.671407 24.446 0 26.4779 0 28.5982C0 37.9095 12.527 47.3799 29.9836 47.6626C33.429 47.7156 37.6871 45.7544 42.228 45.8427C47.1222 45.9487 50.6559 47.5389 54.9494 47.6626C70.9748 48.175 82 37.3795 82 28.5982C82 26.2836 81.2049 24.075 79.7561 22.0254H79.7738ZM13.9052 22.9442C8.44559 22.9442 4.02844 18.5271 4.02844 13.0675C4.02844 7.60785 8.46326 3.17303 13.9229 3.17303C19.3825 3.17303 23.7996 7.59018 23.7996 13.0498C23.7996 18.5094 19.3825 22.9265 13.9229 22.9265L13.9052 22.9442ZM38.0935 27.0963C37.5281 27.0963 37.0687 26.5663 37.0687 25.8949C37.0687 25.2235 37.5281 24.7111 38.0935 24.7111C38.6589 24.7111 39.1183 25.2411 39.1183 25.8949C39.1183 26.5486 38.6589 27.0963 38.0935 27.0963ZM43.9242 27.0963C43.3588 27.0963 42.8994 26.5663 42.8994 25.8949C42.8994 25.2235 43.3588 24.7111 43.9242 24.7111C44.4896 24.7111 44.9489 25.2411 44.9489 25.8949C44.9489 26.5486 44.4896 27.0963 43.9242 27.0963ZM68.0065 22.9442C62.5469 22.9442 58.1297 18.5271 58.1297 13.0675C58.1297 7.60785 62.5469 3.1907 68.0065 3.1907C73.4661 3.1907 77.8832 7.60785 77.8832 13.0675C77.8832 18.5271 73.4661 22.9442 68.0065 22.9442Z"
                      fill="#A9FF7E"
                    />
                    <path
                      d="M16.8561 17.3604C19.237 17.3604 21.1672 15.4303 21.1672 13.0493C21.1672 10.6683 19.237 8.73816 16.8561 8.73816C14.4751 8.73816 12.5449 10.6683 12.5449 13.0493C12.5449 15.4303 14.4751 17.3604 16.8561 17.3604Z"
                      fill="#A9FF7E"
                    />
                    <path
                      d="M65.3912 17.3604C67.7722 17.3604 69.7024 15.4303 69.7024 13.0493C69.7024 10.6683 67.7722 8.73816 65.3912 8.73816C63.0102 8.73816 61.0801 10.6683 61.0801 13.0493C61.0801 15.4303 63.0102 17.3604 65.3912 17.3604Z"
                      fill="#A9FF7E"
                    />
                    <path
                      d="M79.7738 22.0254C78.9787 20.8946 78.643 19.5165 78.855 18.1383C79.0493 16.8839 79.1023 15.5941 78.9787 14.2512C78.2719 6.8481 71.9819 0.893782 64.5434 0.54041C59.4019 0.310718 54.7903 2.66064 51.875 6.38872C50.6736 7.92589 48.73 8.66797 46.8041 8.52662C44.8783 8.38527 42.9877 8.3146 41.0088 8.3146C38.7296 8.3146 36.521 8.42061 34.3478 8.59729C32.6693 8.73864 31.0791 7.97889 30.072 6.61841C26.7326 2.14825 20.9373 -0.431363 14.6473 0.893782C9.32902 2.0069 4.92954 6.08835 3.39237 11.2829C2.7033 13.5975 2.57962 15.8591 2.89765 17.9617C3.14501 19.5695 2.77397 21.1597 1.89054 22.5378C0.671407 24.446 0 26.4779 0 28.5982C0 37.9095 12.527 47.3799 29.9836 47.6626C33.429 47.7156 37.6871 45.7544 42.228 45.8427C47.1222 45.9487 50.6559 47.5389 54.9494 47.6626C70.9748 48.175 82 37.3795 82 28.5982C82 26.2836 81.2049 24.075 79.7561 22.0254H79.7738ZM13.9052 22.9442C8.44559 22.9442 4.02844 18.5271 4.02844 13.0675C4.02844 7.60785 8.46326 3.17303 13.9229 3.17303C19.3825 3.17303 23.7996 7.59018 23.7996 13.0498C23.7996 18.5094 19.3825 22.9265 13.9229 22.9265L13.9052 22.9442ZM38.0935 27.0963C37.5281 27.0963 37.0687 26.5663 37.0687 25.8949C37.0687 25.2235 37.5281 24.7111 38.0935 24.7111C38.6589 24.7111 39.1183 25.2411 39.1183 25.8949C39.1183 26.5486 38.6589 27.0963 38.0935 27.0963ZM43.9242 27.0963C43.3588 27.0963 42.8994 26.5663 42.8994 25.8949C42.8994 25.2235 43.3588 24.7111 43.9242 24.7111C44.4896 24.7111 44.9489 25.2411 44.9489 25.8949C44.9489 26.5486 44.4896 27.0963 43.9242 27.0963ZM68.0065 22.9442C62.5469 22.9442 58.1297 18.5271 58.1297 13.0675C58.1297 7.60785 62.5469 3.1907 68.0065 3.1907C73.4661 3.1907 77.8832 7.60785 77.8832 13.0675C77.8832 18.5271 73.4661 22.9442 68.0065 22.9442Z"
                      fill="#A9FF7E"
                    />
                    <path
                      d="M16.8561 17.3604C19.237 17.3604 21.1672 15.4303 21.1672 13.0493C21.1672 10.6683 19.237 8.73816 16.8561 8.73816C14.4751 8.73816 12.5449 10.6683 12.5449 13.0493C12.5449 15.4303 14.4751 17.3604 16.8561 17.3604Z"
                      fill="#A9FF7E"
                    />
                    <path
                      d="M65.3912 17.3604C67.7722 17.3604 69.7024 15.4303 69.7024 13.0493C69.7024 10.6683 67.7722 8.73816 65.3912 8.73816C63.0102 8.73816 61.0801 10.6683 61.0801 13.0493C61.0801 15.4303 63.0102 17.3604 65.3912 17.3604Z"
                      fill="#A9FF7E"
                    />
                  </svg>{" "}
                  Ribbit Ranger
                </h1>
                <p className="am_pera">
                  Rangers help spread the word about Ribbit, create content,
                  take part in early growth activities, <br></br> level up and
                  earn rewards.
                </p>
                <div className="coom_btn">
                  <Link className="cm_1" href="#">
                    Apply Now
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="section_6">
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="section_text_2">What do Ribbit Rangers do?</h1>
            </Col>

            <Col lg="3">
              <div className="keys_box">
                <div className="keys_box_img">
                  {" "}
                  <Image
                    className="k_icon"
                    src={r1}
                    alt="k1"
                    width={48}
                    height={48}
                  />{" "}
                </div>
                <p className="k_text_1">
                  Talk about <br></br>Ribbit
                </p>
                <p className="k_text_2">
                  Post about Ribbit on Twitter, Telegram, Discord, Reddit, and
                  anywhere you are active.
                </p>
              </div>
            </Col>

            <Col lg="3">
              <div className="keys_box">
                <div className="keys_box_img">
                  {" "}
                  <Image
                    className="k_icon"
                    src={r2}
                    alt="k1"
                    width={48}
                    height={48}
                  />{" "}
                </div>
                <p className="k_text_1">Share Ribbit</p>
                <p className="k_text_2">
                  Share news, updates, and cool features with your community.
                </p>
              </div>
            </Col>

            <Col lg="3">
              <div className="keys_box">
                <div className="keys_box_img">
                  {" "}
                  <Image
                    className="k_icon"
                    src={r3}
                    alt="k3"
                    width={48}
                    height={48}
                  />{" "}
                </div>
                <p className="k_text_1">Grow Ribbit</p>
                <p className="k_text_2">
                  Help new users discover Ribbit and show them how easy crypto
                  can be.
                </p>
              </div>
            </Col>

            <Col lg="3">
              <div className="keys_box">
                <div className="keys_box_img">
                  {" "}
                  <Image
                    className="k_icon"
                    src={r4}
                    alt="k1"
                    width={48}
                    height={48}
                  />{" "}
                </div>
                <p className="k_text_1">Support Ribbit</p>
                <p className="k_text_2">
                  Take part in missions and campaigns posted inside the Ranger
                  Discord.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section_4">
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="section_text_2">Growing up as a Ranger</h1>
              <p className="section_text_pera_2">
                Your contribution matters in our pond. As you contribute more,
                you level up as a ranger.
              </p>
            </Col>

            <Col lg="6">
              <div className="ribbit_box">
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={new_ar1}
                    alt="coin_1"
                    width={90}
                    height={90}
                  />{" "}
                </div>
                <div className="ribbit_box_text ch1">
                  <p className="bx_text_1">Ribbit Ranger</p>
                  <p className="bx_text_2">
                    Welcome to the squad. You can start completing missions.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="ribbit_box">
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={new_ar2}
                    alt="coin_1"
                    width={103}
                    height={74}
                  />{" "}
                </div>
                <div className="ribbit_box_text ch1">
                  <p className="bx_text_1">Senior Ranger</p>
                  <p className="bx_text_2">
                    You completed 5 missions. Great job. Keep up the progress.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="ribbit_box">
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={new_ar3}
                    alt="coin_1"
                    width={103}
                    height={74}
                  />{" "}
                </div>
                <div className="ribbit_box_text ch1">
                  <p className="bx_text_1">Ranger Captain</p>
                  <p className="bx_text_2">
                    You completed 20 missions. You’re a natural hopper.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="ribbit_box">
                <div className="ribbit_box_img">
                  {" "}
                  <Image
                    className="card_gif"
                    src={new_ar4}
                    alt="coin_1"
                    width={103}
                    height={74}
                  />{" "}
                </div>
                <div className="ribbit_box_text ch1">
                  <p className="bx_text_1">Ranger in command</p>
                  <p className="bx_text_2">
                    You are the top of the pond. Extra rewards are on the way.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section_coin">
        <Image
          className="coin_gif"
          src={animated_coins}
          alt="coin_1"
          width={1440}
          height={363}
        />
        <Container>
          <Row>
            <Col lg="12">
              <div className="coin_box_text">
                <h3>$5000 Reward Pool</h3>
                <p>
                  Rangers earn from every mission they complete and by spreading
                  the word about Ribbit.<br></br> The higher your level, the
                  more the rewards you get.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section_apply_program">
        <Container>
          <Row>
            <Col lg="12">
              <div className="program_box_text">
                <h3>Apply for the Ribbit Ranger Program</h3>
                <p>
                  Ready to hop in and take Ribbit to the moon? Apply now and
                  start your journey to become a<br></br> ranger in command and
                  earn rewards.
                </p>
                <div className="btn_app">
                  <Link href="#"> Apply Now </Link>
                </div>
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
}

export default Fatures;
