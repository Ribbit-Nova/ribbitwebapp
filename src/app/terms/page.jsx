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
import "./terms.style.css";

import Image from "next/image";

function Terms() {
  return (
    <>
      <Header />

      <section className="section_8">
        <Container>
          <Row>
            <Col lg="12">
              <div className="faq_box">
                <p className="f_text_1">Terms of Service</p>
              </div>
            </Col>

            <Col lg="12">
              <div className="terms_box">
                <div className="terms_c1">
                  <h1>Ribbit Agreement to Terms</h1>
                  <p>
                    These Terms of Service (“Terms”) apply to your access to and
                    use of the services provided by Ribbitnova Inc. (“Ribbit,”
                    “we,” “us,” or “our”), including our mobile applications,
                    browser extensions, payment features, and related tools
                    (collectively, the “Services”).
                  </p>
                  <p>
                    By accessing or using the Services, you agree to be bound by
                    these Terms and our Privacy Policy. If you do not agree to
                    these Terms, you may not use the Services.
                  </p>
                  <p>
                    Ribbit provides a non-custodial, multi-chain crypto wallet
                    that enables users to store, manage, and interact with
                    digital assets, as well as a linked card product that allows
                    users to spend supported assets for real-world payments.
                  </p>
                  <p>
                    Please read these Terms carefully. They affect your legal
                    rights and include important information regarding
                    disclaimers, limitations of liability, and your obligations
                    as a user of the Services.
                  </p>
                </div>

                <div className="terms_c1">
                  <h1>3. Description of Services</h1>
                  <p>
                    Ribbit provides a range of tools to help users interact with
                    digital assets and blockchain-based services. The Services
                    include the following components:
                  </p>
                  <h2>a. Ribbit Wallet</h2>
                  <p>
                    Ribbit offers a non-custodial, multi-chain wallet that
                    allows users to generate, import, and manage wallets across
                    supported blockchains. Users can store, send, receive, and
                    swap supported cryptocurrencies. The wallet also includes
                    access to staking features, token indices, and NFT viewing
                    and management.
                  </p>
                  <h2>b. Ribbit Payment Card</h2>
                  <p>
                    Where available, Ribbit offers users access to a Visa or
                    Mastercard-branded payment card that can be loaded with
                    supported stablecoins. The card can be used to make payments
                    at merchants that accept card payments. Usage of the card
                    may be subject to additional terms, including KYC
                    verification and issuer-specific requirements.
                  </p>
                  <h2>c. Additional Features</h2>
                  <p>The Services may also include:</p>
                  <ul>
                    <li>
                      Access to token swaps using decentralized exchange (DEX)
                      integrations
                    </li>
                    <li>Participation in curated index-based investments</li>
                    <li>
                      Viewing and tracking of NFTs via third-party integrations
                    </li>
                    <li>
                      Loyalty points, ambassador programs, and user engagement
                      tools
                    </li>
                    <li>
                      In-app browser to connect to decentralized applications
                      (“dApps”)
                    </li>
                  </ul>
                  <p>
                    Ribbit may add, modify, or remove features at any time at
                    its sole discretion.
                  </p>
                  <h1>4. Non-Custodial Wallet Disclaimer</h1>
                  <p>
                    Ribbit is a non-custodial wallet. This means you are solely
                    responsible for securing your wallet, including any private
                    keys, seed phrases, recovery phrases, and access credentials
                    associated with your account
                  </p>
                  <p>
                    We do not store or have access to your private keys or
                    wallet recovery information. If you lose your recovery
                    phrase or private key, we cannot help you recover access to
                    your assets. You are solely responsible for backing up and
                    safeguarding your wallet credentials.
                  </p>
                  <p>
                    By using Ribbit, you acknowledge and accept the risk of
                    self-custody and agree that Ribbit is not liable for any
                    loss, theft, or unauthorized access resulting from the loss
                    or compromise of your credentials.
                  </p>
                  <h1>5. User Responsibilities</h1>
                  <p>By using the Services, you agree to:</p>
                  <ul>
                    <li>
                      Use the Services only for lawful purposes and in
                      accordance with these Terms
                    </li>
                    <li>
                      Maintain the security and confidentiality of your wallet
                      credentials
                    </li>
                    <li>
                      Monitor your wallet activity and immediately notify us if
                      you suspect any unauthorized use
                    </li>
                    <li>
                      Ensure you have adequate understanding of blockchain,
                      tokens, and digital asset risks before transacting
                    </li>
                    <li>
                      Comply with all applicable laws and regulations in your
                      jurisdiction
                    </li>
                    <li>
                      Comply with all applicable laws and regulations in your
                      jurisdiction
                    </li>
                  </ul>
                  <p>
                    You understand that blockchain transactions are irreversible
                    and that you are responsible for verifying all details
                    before initiating any transaction.
                  </p>
                  <h1>6. Third-Party Services and dApps</h1>
                  <p>
                    Ribbit may allow you to access third-party services,
                    including decentralized applications (“dApps”),
                    decentralized exchanges, NFT platforms, and other
                    blockchain-based tools through our in-app browser or
                    integrations.
                  </p>
                  <p>
                    These third-party services are not operated or controlled by
                    Ribbit. Your use of such services is subject to the terms
                    and policies of those third parties, not these Terms.
                  </p>
                  <p>
                    We do not guarantee the accuracy, functionality, or security
                    of third-party services. You are solely responsible for
                    evaluating and assuming any risks associated with
                    interacting with external applications. Ribbit is not liable
                    for any loss, damage, or dispute arising from your use of
                    third-party services accessed through the app or extension.
                  </p>
                  <h1>7. Payments, On-Ramps, and Off-Ramps</h1>
                  <p>
                    Ribbit may provide access to features that allow you to buy
                    or sell digital assets using fiat currency (“on-ramp” and
                    “off-ramp” services). These services may be provided by
                    regulated third-party partners and may require identity
                    verification (KYC) and compliance checks.
                  </p>
                  <p>
                    Additionally, Ribbit may offer a Visa or Mastercard-enabled
                    payment card that allows you to load supported stablecoins
                    and make purchases with participating merchants. These card
                    services are provided in partnership with licensed issuers
                    and may be subject to additional terms, including
                    transaction limits, fees, and usage restrictions.
                  </p>
                  <p>
                    Ribbit does not directly process fiat transactions. All fiat
                    services are provided through third-party processors, and
                    Ribbit is not responsible for any delays, errors, or issues
                    related to fiat transactions or card usage.
                  </p>
                  <p>
                    You are responsible for reviewing all applicable terms from
                    payment partners and card issuers before using these
                    services.
                  </p>
                  <h1>8. KYC and Compliance</h1>
                  <p>
                    Some features within the Ribbit platform, such as access to
                    the Ribbit payment card, on-ramp or off-ramp services, and
                    other regulated financial activities, may require Know Your
                    Customer (“KYC”) verification. This process may involve
                    submitting personal information and identity documents to a
                    licensed third-party provider.
                  </p>
                  <p>
                    By using these features, you agree to provide accurate and
                    complete information when required and to comply with any
                    identity verification procedures imposed by our partners.
                  </p>
                  <p>
                    We may restrict or deny access to certain services if KYC
                    requirements are not met or if your identity cannot be
                    verified under applicable laws.
                  </p>
                  <p>
                    You understand that Ribbit is required to comply with
                    anti-money laundering (AML), counter-terrorism financing
                    (CTF), and other financial regulations in certain
                    jurisdictions. We reserve the right to report suspicious
                    activity to relevant authorities, restrict access to
                    Services, or terminate your use of the platform to remain in
                    compliance.
                  </p>
                  <h1>9. Token and Crypto Activity Disclaimer</h1>
                  <p>
                    Ribbit provides tools to interact with blockchain networks,
                    but we do not issue, endorse, or guarantee the value of any
                    token, digital asset, or cryptocurrency accessed through the
                    Services.
                  </p>
                  <p>
                    Prices of digital assets are highly volatile and can change
                    rapidly. You are solely responsible for evaluating any
                    token, NFT, index, or staking opportunity before making a
                    transaction.
                  </p>
                  <p>
                    Ribbit does not provide financial, investment, tax, or legal
                    advice. Any information available through the app or related
                    channels is provided for general informational purposes only
                    and should not be relied upon as a recommendation.
                  </p>
                  <p>
                    You acknowledge that blockchain transactions are
                    irreversible and that you bear all risks associated with
                    interacting with smart contracts, protocols, or digital
                    assets.
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

export default Terms;
