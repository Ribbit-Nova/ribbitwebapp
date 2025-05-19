"use client";
import Header from "../../component/header/header";
import Footer from "../../component/footer/Footer";
import Loader from "../../component/Loader/Loader";

import { Col, Container, Row } from "react-bootstrap";
import "./policy.style.css";

import Link from "next/link";

function Terms() {
  return (
    <>
      <Loader />
      <Header />

      <section className="section_8">
        <Container>
          <Row>
            <Col lg="12">
              <div className="faq_box">
                <p className="f_text_1"> Privacy Policy</p>
              </div>
            </Col>

            <Col lg="12">
              <div className="terms_box">
                <div className="terms_c1">
                  <p>
                    Ribbitnova Inc. ("Ribbit", "we", "us", or "our") provides a
                    non-custodial, multi-chain wallet and payments platform that
                    includes a mobile application, browser extension, and
                    related tools that allow users to (i) store and manage
                    digital assets, (ii) connect to decentralized applications,
                    (iii) use stablecoins for real-world payments via linked
                    cards, (iv) access financial tools including staking, token
                    swaps, indices, and NFTs, and (v) any other features made
                    available through our software (collectively, the
                    "Services").
                  </p>
                  <p>
                    This Privacy Policy (“Policy”) explains how we collect, use,
                    store, and share personal information when you use our
                    Services, including any websites, applications, features, or
                    content we make available.
                  </p>
                  <p>
                    By using the Services, you agree to the terms of this
                    Privacy Policy. If you do not agree, you should not use the
                    Services.
                  </p>
                  <p>
                    Please also refer to the Ribbit Terms of Service, which
                    govern your use of the Services.
                  </p>
                </div>

                <div className="terms_c1">
                  <h1>1. Information We Collect</h1>
                  <p>
                    We collect limited information to operate and improve the
                    Services. The types of information we may collect fall into
                    three main categories:
                  </p>
                  <h2>a. Information You Provide</h2>
                  <p>
                    When you use our Services, you may choose to provide us with
                    certain information, including:
                  </p>

                  <ul>
                    <li>
                      Wallet information imported into or created through the
                      Services
                    </li>
                    <li>
                      Contact details provided when you submit a support ticket
                      or application form (e.g., email address, social handles)
                    </li>
                    <li>
                      Responses submitted through promotional forms, ambassador
                      applications, surveys, or user feedback tools
                    </li>
                    <li>
                      Any information you voluntarily provide to us in direct
                      communications
                    </li>
                  </ul>
                  <p>
                    Ribbit does not require you to create an account, share your
                    real name, phone number, or government-issued ID to use the
                    core wallet functions.
                  </p>
                  <h2>b. Information Collected Automatically</h2>
                  <p>
                    We may automatically collect certain technical data when you
                    access or use the Services, including:
                  </p>
                  <ul>
                    <li>IP address</li>
                    <li>Device type, OS version, and browser type</li>
                    <li>
                      App usage logs (e.g., feature clicks, navigation flow)
                    </li>
                    <li>Time and duration of access</li>
                    <li>Referring and exit pages</li>
                    <li>
                      Wallet address (used to provide Services but not linked to
                      personal identity)
                    </li>
                  </ul>
                  <p>
                    This data helps us understand how users interact with the
                    app and improve performance and reliability.
                  </p>
                  <h2>c. Information from Third Parties</h2>
                  <p>
                    We may receive limited information from third-party service
                    providers, including:
                  </p>
                  <ul>
                    <li>
                      Analytics providers that help us monitor app performance
                    </li>
                    <li>
                      Payment processors or card issuers involved in
                      fiat-to-crypto services
                    </li>
                    <li>
                      KYC or fraud prevention services (if you access features
                      that require identity verification)
                    </li>
                  </ul>
                  <p>
                    We only use such information to enable features you actively
                    use and to meet our legal or contractual obligations.
                  </p>

                  <h1>2. How We Use Your Information</h1>
                  <p>
                    We use the information we collect for the following
                    purposes:
                  </p>
                  <ul>
                    <li>To provide, operate, and improve the Services</li>
                    <li>
                      To respond to your inquiries, feedback, or support
                      requests
                    </li>
                    <li>
                      To personalize your experience based on your activity or
                      preferences
                    </li>
                    <li>
                      To enable certain features such as card payments, staking,
                      indices, and NFT support
                    </li>

                    <li>
                      To communicate with you about updates, product changes, or
                      community programs (e.g., Ribbit Rangers)
                    </li>
                    <li>
                      To ensure the security and integrity of the Services
                    </li>
                    <li>
                      To comply with legal obligations, including anti-fraud,
                      AML, and regulatory requirements (where applicable)
                    </li>
                    <li>
                      To analyze usage trends and measure engagement for service
                      improvement
                    </li>
                  </ul>
                  <p>
                    We do not use your personal information for advertising or
                    marketing without your explicit consent.
                  </p>
                  <h1>3. How We Share Your Information</h1>
                  <p>We do not sell your personal information.</p>
                  <p>
                    We may share your information only under the following
                    circumstances:
                  </p>
                  <ul>
                    <li>
                      Service Providers: We may share limited information with
                      third-party vendors that help us operate the Services,
                      such as infrastructure providers, analytics tools,
                      customer support platforms, or payment processors.
                    </li>
                    <li>
                      Compliance Partners: If you use features that require KYC,
                      fiat payments, or regulatory clearance, we may share your
                      information with licensed partners for verification or
                      compliance purposes.
                    </li>
                    <li>
                      Legal Obligations: We may disclose your information if
                      required by law, regulation, legal process, or government
                      request.
                    </li>
                    <li>
                      Business Transfers: In the event of a merger, acquisition,
                      or asset sale, your information may be transferred as part
                      of that transaction, subject to the terms of this Policy.
                    </li>

                    <li>
                      With Your Consent: In cases where you provide explicit
                      consent, we may share your information for purposes not
                      covered above.
                    </li>
                  </ul>
                  <p>
                    We require all third parties to handle your information
                    responsibly and in compliance with applicable data
                    protection laws.
                  </p>
                  <h1>4. Your Rights and Choices</h1>
                  <p>
                    Depending on your location, you may have certain rights
                    regarding your personal information. These may include:
                  </p>
                  <ul>
                    <li>
                      The right to access the information we hold about you
                    </li>
                    <li>
                      The right to correct inaccurate or incomplete information
                    </li>
                    <li>The right to request deletion of your personal data</li>
                    <li>
                      The right to restrict or object to certain processing
                      activities
                    </li>
                    <li>
                      The right to withdraw consent where processing is based on
                      consent
                    </li>
                    <li>
                      The right to lodge a complaint with a data protection
                      authority
                    </li>
                  </ul>
                  <p>
                    You can exercise these rights by contacting us using the
                    details provided in the Contact Information section. We may
                    need to verify your identity before fulfilling your request.
                  </p>
                  <p>
                    If you have opted into any communication or marketing lists,
                    you may opt out at any time by following the instructions
                    provided in the message or by contacting us directly.
                  </p>

                  <h1>5. How We Store and Protect Your Data</h1>
                  <p>
                    We use reasonable technical and organizational measures to
                    protect the information we collect and store. These include:
                  </p>

                  <ul>
                    <li>End-to-end encryption for sensitive data</li>
                    <li>Secure key management within the app</li>
                    <li>
                      Cloud-based encrypted backups (only when enabled by the
                      user)
                    </li>
                    <li>
                      Strict access controls and audit logs for administrative
                      systems
                    </li>
                    <li>
                      Regular monitoring for unauthorized access or suspicious
                      activity
                    </li>
                  </ul>
                  <p>
                    We store your data only as long as it is necessary for the
                    purposes described in this Policy or as required by law.
                    When no longer needed, we delete or anonymize the data
                    securely.
                  </p>
                  <p>
                    Despite our efforts, no system can guarantee complete
                    security. You are responsible for keeping your recovery
                    phrase, private key, and login credentials secure and
                    private.
                  </p>

                  <h1>6. Cookies and Tracking Tools</h1>
                  <p>
                    Ribbit may use cookies or similar technologies on its
                    website to enhance user experience and gather limited
                    analytics data. These tools help us understand how visitors
                    use our site, improve navigation, and monitor performance.
                  </p>
                  <p>
                    The Ribbit wallet app and browser extension do not rely on
                    cookies. However, we may use third-party tools (such as
                    anonymized analytics) to monitor app performance or errors.
                    These tools do not collect personal identifiers unless
                    explicitly enabled by you.
                  </p>
                  <p>
                    You can manage or disable cookies through your browser
                    settings. If you disable cookies, some parts of the website
                    may not function as intended.
                  </p>

                  <h1>7. Children’s Privacy</h1>
                  <p>
                    The Services are not intended for use by individuals under
                    the age of 18. We do not knowingly collect personal
                    information from children.
                  </p>
                  <p>
                    If we learn that we have collected data from someone under
                    the age of 18 without proper consent, we will take steps to
                    delete that information as quickly as possible.
                  </p>
                  <p>
                    If you believe that a child has provided us with personal
                    information, please contact us using the details below.
                  </p>

                  <h1>8. International Users and Data Transfers</h1>
                  <p>
                    Ribbit is a global product. If you access or use the
                    Services from outside the country where our servers are
                    located, your information may be transferred to and
                    processed in other countries that may have different data
                    protection laws than your own.
                  </p>
                  <p>
                    Where required by applicable law, we will ensure appropriate
                    safeguards are in place before transferring personal data,
                    including standard contractual clauses or equivalent legal
                    mechanisms.
                  </p>
                  <p>
                    Where required by applicable law, we will ensure appropriate
                    safeguards are in place before transferring personal data,
                    including standard contractual clauses or equivalent legal
                    mechanisms.
                  </p>
                  <h1>9. Changes to This Policy</h1>
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices, technology, or legal
                    requirements.
                  </p>
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices, technology, or legal
                    requirements.
                  </p>
                  <p>
                    We encourage you to review this Policy periodically to stay
                    informed about how your information is handled.
                  </p>
                  <h1>10. GDPR-Aligned Data Practices</h1>
                  <p>
                    Ribbit is committed to handling personal data in accordance
                    with the principles of the General Data Protection
                    Regulation (GDPR), regardless of where our users are
                    located.
                  </p>
                  <p>This means we aim to:</p>
                  <ul>
                    <li>
                      Collect only the data that is necessary to provide and
                      improve our Services
                    </li>
                    <li>Use data for clear and limited purposes</li>
                    <li>Keep your data accurate and up to date</li>
                    <li>
                      Store data securely using appropriate technical and
                      organizational safeguards
                    </li>
                    <li>
                      Allow users to access, modify, or delete their personal
                      information where possible
                    </li>
                    <li>
                      Maintain transparency in how we collect, use, and share
                      data
                    </li>
                  </ul>

                  <h1>Contact Information</h1>
                  <p>
                    If you have any questions about this terms of agreement, you
                    may contact us at:
                  </p>
                  <p>
                    Email:
                    <Link href="#">support@ribbitwallet.com</Link>
                  </p>
                  <p>
                    Official Website:
                    <Link href="#">https://ribbitwallet.com</Link>
                  </p>
                  <p>
                    Mailing Address:
                    <Link href="#">
                      Ribbitnova Inc 8 The Green, Ste A, Dover, Delaware 19901
                    </Link>
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
