"use client";

import Header from "../../component/header/Header";
import Footer from "../../component/footer/Hooter";
import { Col, Container, Row } from "react-bootstrap";
import "./download.style.css";
import Link from "next/link";
import Image from "next/image";
import desktop from "../../asets/img/desktop.png";
import phone from "../../asets/img/phone.png";
import an from "../../asets/img/an.png";
import a from "../../asets/img/a.png";

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
                  Download for <br></br>
                  <span>desktop</span>
                </h1>
              </Col>

              <Col lg="12">
                <div className="browser_btn">
                  <Image
                    className="btn_iocn"
                    src={desktop}
                    alt="desktop"
                    width={1195}
                    height={601}
                  />{" "}
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
              <h1 className="section_text">
                Download for <br></br>
                <span>mobile</span>
              </h1>
            </Col>

            <Col lg="12">
              <div className="mobile_img">
                <Image
                  className="mobile_01"
                  src={phone}
                  alt="phone"
                  width={286}
                  height={622}
                />
                <div className="mobile_img_link">
                  <Link href="#" className="as1">
                    {" "}
                    <Image
                      className="link_a"
                      src={a}
                      alt="a"
                      width={50}
                      height={50}
                    />
                    <span>iOS</span>
                  </Link>{" "}
                  <Link href="#" className="as1">
                    {" "}
                    <Image
                      className="link_a"
                      src={an}
                      alt="an"
                      width={50}
                      height={50}
                    />
                    <span>Android</span>
                  </Link>
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
