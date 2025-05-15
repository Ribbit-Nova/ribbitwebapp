"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "../../../component/header/header";
import Footer from "../../../component/footer/Footer";
import Graphdetails from "../../../component/graphDetails/Graphdetails";
import { Col, Container, Row } from "react-bootstrap";
import "./indices_details.style.css";



function IndicesDetailPage() {
  const { address } = useParams();
  const [indexDetails, setIndexDetails] = useState(null);

  useEffect(() => {
    if (address) {
      fetch(`https://testnet.ribbitwallet.com/indices/${address}`)
        .then((res) => res.json())
        .then((data) => setIndexDetails(data))
        .catch((err) => console.error("Failed to fetch index details", err));
    }
  }, [address]);

  if (!indexDetails) return <p>Loading...</p>;

  const {
    name,
    description,
    price,
    changed_1h,
    changed_24h,
    changed_7d,
    high_24h,
    low_24h,
    initial_value,
    pair_ids,
    index_created_time,
  } = indexDetails;

  const pairs = pair_ids?.split(",") || [];
  const weights = Array(pairs.length).fill(`${(100 / pairs.length).toFixed(0)}%`);

  const formattedDate = new Date(index_created_time).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <Header />
      <section className="section_1">
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="section_text">{name}</h1>
              <p className="pera_list">{description}</p>
              <div className="search_form_box">
                <p className="cunt_p">{price.toFixed(2)}</p>
                <div className="qnt">
                  <ul>
                    <li>
                      <span className="cd1">1h %</span>
                      <span className="cd2">{changed_1h}%</span>
                    </li>
                    <li>
                      <span className="cd1">24h %</span>
                      <span className="cd2">{changed_24h}%</span>
                    </li>
                    <li>
                      <span className="cd1">7d %</span>
                      <span className="cd2 red_cd">{changed_7d}%</span>
                    </li>
                  </ul>
                </div>
                <p className="last_p">
                  Last update <span>just now</span>
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
              <div className="index_graph">
                <Graphdetails address={address} />
              </div>
            </Col>

            <Col lg="4">
              <Col lg="12">
                <div className="index_graph_tabel">
                  <ul>
                    <li>
                      <span>24h Range</span>
                      <span>{low_24h.toFixed(2)} - {high_24h.toFixed(2)}</span>
                    </li>
                    <li>
                      <span>Initial Value</span>
                      <span>{initial_value}</span>
                    </li>
                    <li>
                      <span>Start Date</span>
                      <span>{formattedDate}</span>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col sm="12" lg="12">
                <div className="index_graph_tabel">
                  <p className="gr_hd">Constituents</p>
                  <p className="gr_hd2">
                    <span>Asset</span> <span>Weight</span>
                  </p>
                  <ul>
                    {pairs.map((pair, i) => (
                      <li key={i}>
                        <span>{pair.toUpperCase()}</span> <span>{weights[i]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Col>

            <Col sm="12" lg="12">
              <div className="index_graph_box_text">
                <h1>Onchain transactions of the index</h1>
                <ul>
                  <li>
                    <span>Timestamp </span> <span>{formattedDate}</span>
                  </li>
                  <li>
                    <span>Type </span> <span>Create Index</span>
                  </li>
                  <li>
                    <span>Data Pairs </span> <span>{pairs.join(", ").toUpperCase()}</span>
                  </li>
                  <li>
                    <span>Weight </span> <span>{weights.join(", ")}</span>
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

export default IndicesDetailPage;
