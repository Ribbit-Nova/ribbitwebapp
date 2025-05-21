import Header from "../../component/header/header";
import Footer from "../../component/footer/Footer";
import { Col, Container, Row, InputGroup, Form } from "react-bootstrap";
import "./blog.style.css";
import Link from "next/link";
import Image from "next/image";
import user from "../../asets/img/user.png";
import sq from "../../asets/img/sq.svg";

import { getAllPosts } from "../../../lib/contentful";

export default async function BlogPage() {
  const posts = await getAllPosts();
  console.log("Posts:", posts);

  return (
    <>
      <Header />
      <section className="section_1">
        <Container>
          <Row>
            <Col lg="12">
              <div className="blog_box_list">
                <h1 className="section_text">The Ribbit Blog</h1>
                <p className="pera_list">
                  Explore the latest topics, trends and insights with in Crypto
                  and Web3 with Ribbit
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section_blig_menu">
        <Container>
          <Row>
            <Col sm="12" lg="9">
              <div className="menu_bolg">
                <ul>
                  {["All", "Crypto", "Blockchain", "Market Trends", "DeFi", "Meme Coin", "Indices", "Multichain", "Trade", "Swap"].map((cat) => (
                    <li key={cat}><Link href="#">{cat}</Link></li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col sm="12" lg="3">
              <div className="search_form">
                <InputGroup>
                  <Form.Control placeholder="Search.." />
                </InputGroup>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">
                  <path d="M11.5 19C15.9183 19 19.5 15.4183 19.5 11C19.5 6.58172 15.9183 3 11.5 3C7.08172 3 3.5 6.58172 3.5 11C3.5 15.4183 7.08172 19 11.5 19Z" stroke="#828A99" strokeWidth="2.01" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.4999 21L17.1499 16.65" stroke="#828A99" strokeWidth="2.01" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section_log_list">
        <Container>
          <Row>
            {posts.map((post) => {
              const fields = post.fields;
              const { title = "", category = "", author = "", publishedDate = "", slug = "", coverImage = {} } = fields;
              const coverImageUrl = coverImage.fields?.file?.url || ""; // Fallback to an empty string if coverImage or its nested properties are undefined

              return (
                <Col sm="12" lg="3" key={post.sys.id}>
                  <div className="blog_box">
                    <Image
                      src={"https:" + coverImage.fields.file.url}
                      alt={title}
                      width={300}
                      height={231}
                    />
                    <div className="blog_box_text">
                      <Link className="cr1" href={`/blog/${slug}`}>{category}</Link>
                      <p>{title}</p>
                    </div>
                    <div className="user_list">
                      <ul>
                        <li><Image src={user} alt="author" width={20} height={20} /></li>
                        <li>{author}</li>
                        <li><svg width="4" height="4"><circle cx="2" cy="2" r="2" fill="#828A99" /></svg></li>
                        <li>{new Date(publishedDate).toLocaleDateString("en-GB")}</li>
                      </ul>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="section_blog_subscribe">
        <Row>
          <Col lg="5" sm="12">
            <div className="sub_img">
              <Image src={sq} alt="subscribe" width={570} height={448} />
            </div>
          </Col>
          <Col lg="7" sm="12">
            <div className="sub_text">
              <h2>Let us hop into your email!</h2>
              <p>Subscribe now to stay informed with the latest news and updates from Ribbit.</p>
              <InputGroup className="email_input">
                <Form.Control placeholder="Enter your E-mail" />
                <button>Subscribe</button>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </section>

      <Footer />
    </>
  );
}
