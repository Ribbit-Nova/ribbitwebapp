"use client";
import Header from "../../component/header/header";
import Footer from "../../component/footer/Footer";
import Loader from "../../component/Loader/Loader";

import { Col, Container, Row } from "react-bootstrap";
import "./terms.style.css";

import Link from "next/link";

function Terms() {
  const isApp = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("app") !== "true";
  return (
    <>
      <Loader />
      {isApp && <Header />}

      <section className={`section_8${!isApp ? " app_terms" : ""}`}>
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

                  <h1>1. Description of Services</h1>
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
                  <h1>2. Non-Custodial Wallet Disclaimer</h1>
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
                  <h1>3. User Responsibilities</h1>
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
                  <h1>4. Third-Party Services and dApps</h1>
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
                  <h1>5. Payments, On-Ramps, and Off-Ramps</h1>
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
                  <h1>6. KYC and Compliance</h1>
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
                  <h1>7. Token and Crypto Activity Disclaimer</h1>
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

                  <h1>8. Prohibited Activities</h1>
                  <p>
                    By using the Services, you agree not to engage in any of the
                    following activities:
                  </p>
                  <ul>
                    <li>
                      Using the Services for any unlawful purpose or in
                      violation of any applicable law or regulation
                    </li>
                    <li>
                      Attempting to gain unauthorized access to any part of the
                      platform, infrastructure, or other user accounts
                    </li>
                    <li>
                      Uploading or transmitting viruses, malware, or any harmful
                      code Engaging in fraud, scams, or deceptive practices,
                      including phishing or impersonation
                    </li>
                    <li>
                      Using automated scripts, bots, or scrapers that interfere
                      with the proper functioning of the Services
                    </li>
                    <li>
                      Using the Services in a manner that could damage, disable,
                      or impair our systems or disrupt other users
                    </li>
                    <li>
                      Attempting to reverse engineer, decompile, or extract
                      source code from the platform
                    </li>
                    <li>
                      Using the Services to facilitate money laundering,
                      terrorist financing, or other financial crimes
                    </li>
                    <li>
                      Violating the intellectual property or privacy rights of
                      Ribbit or any third party
                    </li>
                    <li>
                      Circumventing or attempting to circumvent any restrictions
                      or controls applied by Ribbit or its partners
                    </li>
                  </ul>
                  <p>
                    Ribbit reserves the right to investigate and take
                    appropriate action, including disabling your access to the
                    Services, if any prohibited activity is detected.
                  </p>

                  <h1>9. Intellectual Property</h1>
                  <p>
                    All content and materials made available through the
                    Services, including but not limited to the Ribbit name,
                    logo, design elements, graphics, software, website content,
                    and documentation, are the property of Ribbit Technologies
                    Limited or its licensors and are protected by copyright,
                    trademark, and other applicable laws.
                  </p>
                  <p>
                    You are granted a limited, non-exclusive, non-transferable,
                    and revocable license to use the Services solely for their
                    intended purpose. This license does not give you any
                    ownership or intellectual property rights in the platform or
                    its content.
                  </p>
                  <p>
                    You agree not to copy, reproduce, distribute, modify, or
                    create derivative works of any part of the Services without
                    our prior written permission.
                  </p>
                  <p>
                    All third-party marks and content appearing on the platform
                    are the property of their respective owners and used with
                    permission or under license where applicable.
                  </p>
                  <h1>10. Disclaimer of Warranties</h1>
                  <p>
                    The Services are provided on an “as is” and “as available”
                    basis, without warranties of any kind, either express or
                    implied.
                  </p>
                  <p>
                    To the fullest extent permitted by law, Ribbit disclaims all
                    warranties, whether express, implied, statutory, or
                    otherwise, including but not limited to any implied
                    warranties of merchantability, fitness for a particular
                    purpose, title, and non-infringement.
                  </p>
                  <p>
                    We do not guarantee that the Services will be uninterrupted,
                    secure, or free from errors, bugs, or harmful components. We
                    also do not warrant the accuracy or reliability of any
                    content, data, or results obtained through the Services.
                  </p>
                  <p>
                    Your use of the Services is at your own risk. You
                    acknowledge that digital assets are volatile and that
                    transactions made through the Services are irreversible and
                    may carry financial risk.
                  </p>
                  <h1>11. Limitation of Liability</h1>
                  <p>
                    To the maximum extent permitted by law, Ribbit Technologies
                    Limited and its affiliates, directors, officers, employees,
                    and agents will not be liable for any indirect, incidental,
                    special, consequential, or punitive damages, including but
                    not limited to loss of profits, data, goodwill, or other
                    intangible losses, resulting from:
                  </p>
                  <ul>
                    <li>
                      Your access to or use of, or inability to access or use,
                      the Services
                    </li>
                    <li>
                      Any unauthorized access to or use of your wallet, private
                      key, or recovery phrase
                    </li>
                    <li>
                      Errors, bugs, viruses, or other harmful code that may be
                      transmitted through the Services
                    </li>
                    <li>
                      Your interactions with third-party applications, smart
                      contracts, or platforms
                    </li>
                    <li>
                      Any content or conduct of any third party using the
                      Services
                    </li>
                    <li>
                      Any decisions you make based on information made available
                      through the Services
                    </li>
                  </ul>
                  <p>
                    Our total liability to you for any claim arising out of or
                    relating to these Terms or the Services is limited to the
                    amount you may have paid to use the Services, if any, in the
                    six months prior to the event giving rise to the claim.
                  </p>
                  <p>
                    Some jurisdictions do not allow the exclusion or limitation
                    of certain damages, so these limitations may not apply to
                    you in full.
                  </p>
                  <h1>12. Indemnification</h1>
                  <p>
                    You agree to defend, indemnify, and hold harmless Ribbit
                    Technologies Limited, its affiliates, and their respective
                    officers, directors, employees, contractors, and agents from
                    and against any claims, damages, obligations, losses,
                    liabilities, costs, or expenses (including legal fees)
                    arising from:
                  </p>
                  <ul>
                    <li>Your use of or access to the Services</li>
                    <li>
                      Your violation of these Terms or any applicable law or
                      regulation
                    </li>
                    <li>
                      Any content or data you submit or transmit through the
                      Services
                    </li>
                    <li>
                      Your use of third-party applications, platforms, or
                      services in connection with the Services
                    </li>
                    <li>
                      Any fraudulent or unauthorized activity carried out under
                      your wallet or account
                    </li>
                  </ul>
                  <p>
                    We reserve the right to take over the exclusive defense and
                    control of any matter subject to indemnification by you. In
                    that case, you agree to cooperate with our defense as
                    reasonably requested.
                  </p>
                  <h1>13. Modifications to the Services or Terms</h1>
                  <p>
                    We may modify, update, or discontinue parts of the Services
                    at any time, with or without notice. This includes adding or
                    removing features, updating functionality, or changing the
                    way the Services operate.
                  </p>
                  <p>
                    We may also revise these Terms from time to time. If we make
                    material changes, we will provide notice through the app,
                    website, or other communication channels. The revised Terms
                    will become effective once posted, unless a later date is
                    specified.
                  </p>
                  <p>
                    By continuing to use the Services after any changes become
                    effective, you agree to be bound by the updated Terms. If
                    you do not agree to the revised Terms, you must stop using
                    the Services.
                  </p>
                  <h1>14. Termination</h1>
                  <p>
                    You may stop using the Services at any time and are
                    responsible for properly securing or exporting any wallet
                    data or recovery information before doing so.
                  </p>
                  <p>
                    We may suspend or terminate your access to the Services at
                    our discretion, without prior notice, if we reasonably
                    believe that:
                  </p>
                  <ul>
                    <li>You have violated these Terms or applicable laws</li>
                    <li>
                      Your use of the Services poses a security risk or
                      potential harm to other users
                    </li>
                    <li>
                      You engage in fraud, abuse, or illegal activity using the
                      Services
                    </li>
                    <li>
                      Continued use would expose us or our partners to
                      regulatory or legal issues
                    </li>
                  </ul>
                  <p>
                    Upon termination, your right to access or use the Services
                    will immediately cease. Any sections of these Terms that by
                    their nature should survive termination (including, but not
                    limited to, ownership, disclaimers, limitation of liability,
                    and indemnification) will remain in effect.
                  </p>
                  <h1>15. Governing Law and Dispute Resolution</h1>
                  <p>
                    These Terms and any dispute or claim arising out of or in
                    connection with the Services shall be governed by and
                    construed in accordance with the laws of the State of
                    Delaware, United States, without regard to its conflict of
                    law principles.
                  </p>
                  <p>
                    If a dispute arises, we encourage you to first contact us to
                    try and resolve the issue informally. If we are unable to
                    reach a resolution, you agree that any dispute related to
                    these Terms or your use of the Services will be submitted to
                    the exclusive jurisdiction of the courts located in
                    Delaware.
                  </p>
                  <p>
                    You waive any right to a jury trial and agree not to bring
                    any claim as part of a class action or representative
                    proceeding, unless otherwise required by applicable law.
                  </p>
                  <p>
                    The venue, rules of arbitration (if applicable), and
                    enforcement mechanisms will be determined based on the
                    governing jurisdiction listed above.
                  </p>
                  <p>
                    You agree to waive any right to a trial by jury or to
                    participate in a class action or representative proceeding
                    unless prohibited by applicable law.
                  </p>
                  <h1>Contact Information</h1>
                  <p>
                    If you have any questions about this terms of agreement, you
                    may contact us at:
                  </p>
                  <p>
                    Email:
                    <Link href="#">support@ribbitwallet.com</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {isApp && <Footer />}
    </>
  );
}

export default Terms;
