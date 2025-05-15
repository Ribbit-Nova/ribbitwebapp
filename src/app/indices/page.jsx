"use client";
import { useEffect, useState } from "react";
import Header from "../../component/header/header";
import Footer from "../../component/footer/Footer";
import { Col, Container, Row, InputGroup, Form } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import rb from "../../asets/img/rb.png";
import "./indices.style.css";

import Grap from "../../component/grap/Grap";

function Indices() {
  const [indices, setIndices] = useState([]);

  useEffect(() => {
    fetch("https://testnet.ribbitwallet.com/indices")
      .then((res) => res.json())
      .then((data) => setIndices(data))
      .catch((err) => console.error("Failed to fetch indices", err));
  }, []);

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
                  <Form.Control placeholder="Search.." />
                </InputGroup>
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
            {indices.map((index, idx) => (
              <Col lg="4" key={idx}>
                <div className="index_grap">
                <Link href={`/indicesDetails/${index.address}`} style={{ textDecoration: 'none' }}>
                  <p className="tx_1">
                    <Image src={rb} alt="icon" width={28} height={28} /> {index.name}
                  </p>
                  </Link>
                  <p className="tx_2">{index.price.toFixed(2)}</p>
                  <div className="qnt">
                    <ul>
                      <li>
                        <span className="cd1">24h %</span>
                        <span className="cd2">{index.changed_24h}%</span>
                      </li>
                      <li>
                        <span className="cd1">7d %</span>
                        <span className="cd2">{index.changed_7d}%</span>
                      </li>
                      <li>
                        <span className="cd1">1m %</span>
                        <span className="cd2">{index.changed_1m}%</span>
                      </li>
                    </ul>
                  </div>
                  <Grap address={index.address} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Indices;
