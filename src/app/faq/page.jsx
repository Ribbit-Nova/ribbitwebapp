"use client";
import Header from "../../component/header/header";
import Footer from "../../component/footer/Footer";
import Loader from "../../component/Loader/Loader";

import {
  Col,
  Container,
  Row,
  Carousel,
  Card,
  Accordion,
} from "react-bootstrap";
import "./faq.style.css";

import Image from "next/image";
import ar1 from "../../asets/img/ar1.svg";

function Faq() {
  return (
    <>
      <Loader />
      <Header />

      <section className="section_8">
        <Container>
          <Row>
            <Col lg="12">
              <div className="faq_box">
                <p className="f_text_1">Frequently asked questions</p>
                <p className="f_text_2">
                  Got any questions? We’ve got answers.
                </p>
              </div>
            </Col>

            <Col lg="12">
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

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      How can I use my crypto for real-world payments with
                      Ribbit?
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
                      You can load your Ribbit Visa or Mastercard with
                      stablecoins like USDC. Once loaded, the card works like a
                      regular debit card and can be used for payments at any
                      store or website that accepts Visa or Mastercard. You can
                      also use it for travel bookings, bill payments, and other
                      services directly from the app.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      How does Ribbit multi-chain work?
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
                      Ribbit supports major chains including Bitcoin, Ethereum,
                      Solana, Sui, and more. All supported chains are
                      pre-integrated, so you don’t need to manually set up
                      networks. You can hold tokens across these chains in one
                      wallet with no extra steps.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      Which technology is Ribbit Wallet built on?
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
                      Ribbit is built using Supra’s Layer-1 blockchain
                      infrastructure. Supra offers high-speed transactions,
                      cross-chain support, and secure oracle feeds. This allows
                      Ribbit to support advanced features like real-time data,
                      low-latency swaps, and seamless multi-chain activity in
                      one wallet.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      Does Ribbit wallet support NFTs?
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
                      Yes, Ribbit supports NFTs across major blockchains. With
                      the help of our partner Crystara, the app displays both
                      on-chain and off-chain NFTs, including media, metadata,
                      and transaction history. You can view and track your NFT
                      collections directly inside the wallet.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="7">
                    <Accordion.Header>
                      Does Ribbit wallet include a dApp browser?
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
                      Yes, Ribbit has a built-in browser that lets you access
                      and interact with dApps directly from the app. You can
                      visit any supported platform, connect your Ribbit wallet,
                      and approve transactions without leaving the app. The
                      browser also keeps a history of visited sites and actions.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="8">
                    <Accordion.Header>
                      How does Ribbit support limit orders on DEXs?
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
                      Ribbit allows you to place limit orders on decentralized
                      exchanges. This means you can set the exact price at which
                      you want to buy or sell a token. The order is
                      automatically filled when the market hits your price. This
                      feature gives you more control over trades and helps avoid
                      slippage during market swings.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="9">
                    <Accordion.Header>
                      What are Ribbit Indices?
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
                      Ribbit Indices are curated token groups that help users
                      track and invest in specific areas of the crypto market.
                      Each index is based on a theme like DeFi, Layer-1
                      blockchains, memes, RWAs or stablecoins. Users can view
                      performance, token weights, and market trends in one
                      place. You can also invest directly into any index with a
                      single tap, and Ribbit will automatically distribute your
                      funds across the tokens in that index.
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

export default Faq;
