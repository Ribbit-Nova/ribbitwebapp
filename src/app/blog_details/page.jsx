"use client";
import Header from "../../component/header/header";
import Footer from "../../component/footer/Footer";
import Loader from "../../component/Loader/Loader";

import {
  Col,
  Container,
  Row,
  Breadcrumb,
  Popover,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
import "./blog_details.style.css";
import Link from "next/link";
import Image from "next/image";
import b1 from "../../asets/img/b1.jpg";
import user from "../../asets/img/user.png";

function indices() {
  return (
    <>
      <Loader />
      <Header />
      <section className="section_1">
        <Container>
          <Row>
            <Col lg="12">
              <div className="breadcrumb_list">
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Blog</Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    How to Buy Hot Tokens on Ribbit with Binance Connect
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>

            <Col lg="12">
              <div className="blog_dt">
                <Link href="#" className="crypto_tex">
                  Crypto
                </Link>
                <h1>How to Buy Hot Tokens on Ribbit with Binance Connect?</h1>
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <circle cx="12" cy="12.0952" r="12" fill="#D9D9D9" />
                    </svg>{" "}
                    Ribbit Wallet{" "}
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="5"
                      viewBox="0 0 4 5"
                      fill="none"
                    >
                      <circle cx="2" cy="2.09521" r="2" fill="#828A99" />
                    </svg>
                  </li>
                  <li>01 april ,2025</li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="5"
                      viewBox="0 0 4 5"
                      fill="none"
                    >
                      <circle cx="2" cy="2.09521" r="2" fill="#828A99" />
                    </svg>
                  </li>
                  <li>One minute read</li>
                </ul>
              </div>
            </Col>
            <Col lg="12">
              <div className="group_list">
                <div className="sh_list_1">
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.3635 11.671C21.1626 10.8594 21.6065 9.76351 21.5976 8.62454C21.5887 7.48557 21.1277 6.39679 20.3161 5.59771C19.9142 5.20205 19.4383 4.88942 18.9156 4.67767C18.3928 4.46593 17.8335 4.35921 17.2696 4.36362C16.1306 4.37252 15.0418 4.83351 14.2427 5.64518C14.0258 5.86216 13.75 6.1285 13.4155 6.44418L12.4854 7.32003L11.5553 6.44418C11.22 6.12774 10.9439 5.86141 10.7269 5.64518C9.92154 4.83981 8.82923 4.38736 7.69026 4.38736C6.55129 4.38736 5.45898 4.83981 4.6536 5.64518C2.99457 7.30534 2.97536 9.98939 4.59258 11.6575L12.4854 19.5503L20.3635 11.671ZM3.69412 4.68683C4.21885 4.16196 4.84184 3.7456 5.52751 3.46154C6.21317 3.17747 6.94808 3.03127 7.69026 3.03127C8.43244 3.03127 9.16735 3.17747 9.85301 3.46154C10.5387 3.7456 11.1617 4.16196 11.6864 4.68683C11.8921 4.89327 12.1584 5.15018 12.4854 5.45758C12.8109 5.15018 13.0772 4.89289 13.2844 4.6857C14.336 3.61791 15.7687 3.01161 17.2673 3.00016C18.766 2.98872 20.2078 3.57307 21.2755 4.62467C22.3433 5.67627 22.9496 7.10897 22.9611 8.6076C22.9725 10.1062 22.3882 11.548 21.3366 12.6158L13.2844 20.6691C13.0725 20.881 12.7851 21 12.4854 21C12.1857 21 11.8983 20.881 11.6864 20.6691L3.63197 12.6147C2.59907 11.5494 2.02663 10.1206 2.03826 8.63689C2.04989 7.15314 2.64466 5.73351 3.69412 4.68457V4.68683Z"
                          fill="#828A99"
                        />
                      </svg>
                      100
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89472 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3 13.488 3.36 14.89 4 16.127L3 21L7.873 20C9.109 20.639 10.513 21 12 21Z"
                          stroke="#828A99"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      10
                    </li>
                  </ul>
                </div>
                <div className="sh_list_2">
                  <ul>
                    <li>
                      <>
                        {["bottom"].map((placement) => (
                          <OverlayTrigger
                            trigger="click"
                            key={placement}
                            placement={placement}
                            overlay={
                              <Popover id={`popover-positioned-${placement}`}>
                                <Popover.Body>
                                  <ul className="list_sh">
                                    <li>
                                      {" "}
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="12"
                                          fill="#A9FF7E"
                                        />
                                        <path
                                          d="M7 12.7143L9.85714 15.5714L17 8.42859"
                                          stroke="black"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>{" "}
                                      Reading list
                                    </li>
                                    <li> Create new list</li>
                                  </ul>
                                </Popover.Body>
                              </Popover>
                            }
                          >
                            <Button variant="secondary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M12.5001 18.849L7.91575 20.8211C7.25513 21.1056 6.62761 21.0508 6.03321 20.6567C5.4388 20.2634 5.1416 19.7136 5.1416 19.0072V4.98189C5.1416 4.41692 5.33088 3.94557 5.70943 3.56783C6.08799 3.19009 6.55934 3.00082 7.12349 3H17.8779C18.4421 3 18.9134 3.18928 19.292 3.56783C19.6705 3.94638 19.8594 4.41774 19.8586 4.98189V19.0072C19.8586 19.7136 19.5614 20.2634 18.967 20.6567C18.3726 21.0508 17.7451 21.1056 17.0844 20.8211L12.5001 18.849ZM12.5001 17.4717L17.5713 19.6596C17.8223 19.77 18.0619 19.7467 18.29 19.5897C18.5181 19.4319 18.6322 19.2194 18.6322 18.952V4.98312C18.6322 4.79425 18.5537 4.62091 18.3967 4.46311C18.2397 4.30532 18.0664 4.22642 17.8767 4.22642H7.12349C6.93462 4.22642 6.76129 4.30491 6.60349 4.46189C6.44569 4.61887 6.3672 4.7922 6.36802 4.98189V18.9532C6.36802 19.2206 6.48207 19.4328 6.71019 19.5897C6.9383 19.7467 7.17786 19.77 7.42887 19.6596L12.5001 17.4717ZM12.5001 4.22642H6.36802H18.6322H12.5001Z"
                                  fill="#828A99"
                                />
                              </svg>
                            </Button>
                          </OverlayTrigger>
                        ))}
                      </>
                    </li>
                    <li>
                      <>
                        {["bottom"].map((placement) => (
                          <OverlayTrigger
                            trigger="click"
                            key={placement}
                            placement={placement}
                            overlay={
                              <Popover id={`popover-positioned-${placement}`}>
                                <Popover.Body>
                                  <ul className="link_c1">
                                    <li>
                                      <Link href="#">
                                        {" "}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          height="11"
                                          viewBox="0 0 20 11"
                                          fill="none"
                                        >
                                          <path
                                            d="M9 10.5H5C3.61667 10.5 2.43767 10.0123 1.463 9.037C0.488334 8.06167 0.000667349 6.88267 6.82594e-07 5.5C-0.000665984 4.11733 0.487001 2.93833 1.463 1.963C2.439 0.987667 3.618 0.5 5 0.5H9V2.5H5C4.16667 2.5 3.45833 2.79167 2.875 3.375C2.29167 3.95833 2 4.66667 2 5.5C2 6.33333 2.29167 7.04167 2.875 7.625C3.45833 8.20833 4.16667 8.5 5 8.5H9V10.5ZM6 6.5V4.5H14V6.5H6ZM11 10.5V8.5H15C15.8333 8.5 16.5417 8.20833 17.125 7.625C17.7083 7.04167 18 6.33333 18 5.5C18 4.66667 17.7083 3.95833 17.125 3.375C16.5417 2.79167 15.8333 2.5 15 2.5H11V0.5H15C16.3833 0.5 17.5627 0.987667 18.538 1.963C19.5133 2.93833 20.0007 4.11733 20 5.5C19.9993 6.88267 19.5117 8.062 18.537 9.038C17.5623 10.014 16.3833 10.5013 15 10.5H11Z"
                                            fill="#828A99"
                                          />
                                        </svg>{" "}
                                        Copy link
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="#">
                                        {" "}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          height="20"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                        >
                                          <mask
                                            id="mask0_227_812"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="20"
                                            height="20"
                                          >
                                            <path
                                              d="M0 0H20V20H0V0Z"
                                              fill="white"
                                            />
                                          </mask>
                                          <g mask="url(#mask0_227_812)">
                                            <path
                                              d="M15.75 0.937134H18.8171L12.1171 8.61428L20 19.0628H13.8286L8.99143 12.7271L3.46286 19.0628H0.392857L7.55857 10.8486L0 0.938562H6.32857L10.6943 6.72856L15.75 0.937134ZM14.6714 17.2228H16.3714L5.4 2.68142H3.57714L14.6714 17.2228Z"
                                              fill="#828A99"
                                            />
                                          </g>
                                        </svg>{" "}
                                        Twitter
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="#">
                                        {" "}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          height="20"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3.00914 20C2.2108 20 1.45244 19.6829 0.881177 19.1188C0.309911 18.5547 0 17.7892 0 16.9909V3.00914C0 2.2108 0.317052 1.45244 0.881177 0.881177C1.4453 0.309912 2.2108 0 3.00914 0H16.9909C17.7892 0 18.5476 0.317052 19.1188 0.881177C19.6901 1.4453 20 2.2108 20 3.00914V16.9909C20 17.7892 19.6829 18.5476 19.1188 19.1188C18.5547 19.6901 17.7892 20 16.9909 20H3.00914ZM15.2199 11.5596H13.1063V18.5433H16.9909C17.1949 18.5438 17.397 18.5041 17.5856 18.4263C17.7742 18.3484 17.9456 18.2341 18.0898 18.0898C18.2341 17.9456 18.3484 17.7742 18.4263 17.5856C18.5041 17.397 18.5438 17.1949 18.5433 16.9909V3.00914C18.5435 2.80522 18.5034 2.60327 18.4255 2.41483C18.3475 2.2264 18.2332 2.05519 18.089 1.911C17.9448 1.76681 17.7736 1.65246 17.5852 1.57451C17.3967 1.49656 17.1948 1.45654 16.9909 1.45673H3.00914C2.59776 1.45786 2.20356 1.62178 1.91267 1.91267C1.62178 2.20356 1.45786 2.59776 1.45673 3.00914V16.9909C1.45786 17.4022 1.62178 17.7964 1.91267 18.0873C2.20356 18.3782 2.59776 18.5421 3.00914 18.5433H10.7783V11.5596H8.45044V9.23165H10.7783V7.98058C10.7783 5.60983 11.9323 4.56727 13.906 4.56727C14.83 4.56727 15.327 4.63439 15.5627 4.66724L15.577 4.66867V6.8966H14.2345C13.5576 6.8966 13.2376 7.18652 13.1405 7.77064C13.1172 7.92279 13.1062 8.07658 13.1077 8.23051V9.22594H15.5498L15.2171 11.5538L15.2199 11.5596Z"
                                            fill="#828A99"
                                          />
                                        </svg>{" "}
                                        facebook
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="#">
                                        {" "}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          height="20"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                        >
                                          <path
                                            d="M5.85862 0.0698045C4.79445 0.119805 4.06778 0.289805 3.43362 0.538971C2.76671 0.791597 2.16275 1.18628 1.66362 1.69564C1.15636 2.19615 0.763967 2.80095 0.513615 3.46814C0.267782 4.1048 0.100282 4.83314 0.0536153 5.89647C0.00694868 6.95981 -0.00388465 7.30314 0.00111535 10.019C0.00611535 12.7348 0.0186153 13.0748 0.070282 14.1415C0.121115 15.2056 0.290282 15.9323 0.539449 16.5673C0.796115 17.2248 1.13945 17.7815 1.69612 18.3365C2.19711 18.8439 2.80249 19.2363 3.47028 19.4865C4.10612 19.7323 4.83362 19.8998 5.89778 19.9465C6.96278 19.9931 7.30528 20.004 10.0203 19.999C12.7353 19.994 13.0769 19.9815 14.1428 19.9306C15.2094 19.8806 15.9319 19.7098 16.5678 19.4615C17.2344 19.2087 17.8381 18.8141 18.3369 18.3048C18.8444 17.8038 19.2368 17.1984 19.4869 16.5306C19.7328 15.8948 19.9003 15.1673 19.9461 14.104C19.9928 13.0373 20.0044 12.6956 19.9986 9.98064C19.9936 7.26564 19.9819 6.92481 19.9311 5.85814C19.8811 4.79147 19.7111 4.06814 19.4611 3.4323C19.2086 2.76578 18.8142 2.16211 18.3053 1.66314C17.8045 1.15578 17.1994 0.763383 16.5319 0.513138C15.8953 0.268138 15.1686 0.0998045 14.1036 0.0548045C13.0394 0.0073045 12.6969 -0.0051955 9.98112 -0.000195499C7.26528 0.0048045 6.92528 0.0173045 5.85862 0.0698045ZM5.97528 18.1473C5.00028 18.1056 4.47112 17.9431 4.11862 17.8073C3.68358 17.6483 3.28995 17.3934 2.96695 17.0615C2.6339 16.7399 2.37756 16.3474 2.21695 15.9131C2.07945 15.5606 1.91445 15.0315 1.86945 14.0565C1.81945 13.0031 1.80945 12.6865 1.80278 10.0165C1.79778 7.34647 1.80778 7.03064 1.85362 5.97647C1.89528 5.0023 2.05862 4.4723 2.19362 4.1198C2.37362 3.6523 2.59112 3.3198 2.93945 2.96814C3.2613 2.63499 3.65408 2.37864 4.08862 2.21814C4.44112 2.08064 4.96945 1.9173 5.94445 1.87064C6.99862 1.82064 7.31445 1.81064 9.98445 1.80397C12.6536 1.79897 12.9703 1.80897 14.0261 1.85564C14.9994 1.8973 15.5294 2.05897 15.8819 2.19564C16.3486 2.37564 16.6819 2.59147 17.0336 2.94147C17.3853 3.29147 17.6011 3.6223 17.7836 4.0898C17.9211 4.44147 18.0853 4.9698 18.1311 5.94564C18.1811 6.9998 18.1928 7.31647 18.1978 9.98564C18.2019 12.6548 18.1928 12.9715 18.1469 14.0256C18.1044 15.0006 17.9428 15.5298 17.8069 15.884C17.6269 16.3506 17.4094 16.684 17.0603 17.034C16.7387 17.367 16.3462 17.6234 15.9119 17.784C15.5603 17.9215 15.0303 18.0856 14.0569 18.1323C13.0019 18.1823 12.6861 18.1923 10.0153 18.1981C7.34445 18.204 7.03028 18.1923 5.97528 18.1473ZM14.1278 4.6548C14.1281 4.89218 14.1988 5.12412 14.331 5.32129C14.4632 5.51847 14.6508 5.67201 14.8703 5.76251C15.0897 5.853 15.3311 5.87638 15.5638 5.82969C15.7966 5.783 16.0102 5.66833 16.1778 5.50019C16.3453 5.33205 16.4593 5.11799 16.5051 4.8851C16.551 4.6522 16.5268 4.41093 16.4356 4.1918C16.3443 3.97267 16.1901 3.78553 15.9925 3.65404C15.7948 3.52256 15.5627 3.45264 15.3253 3.45314C15.0072 3.4538 14.7023 3.58075 14.4778 3.80608C14.2532 4.03141 14.1273 4.33669 14.1278 4.6548ZM4.86612 10.0098C4.86877 11.3716 5.41227 12.6765 6.37707 13.6376C7.34187 14.5986 8.64892 15.137 10.0107 15.1344C11.3725 15.1317 12.6774 14.5882 13.6385 13.6234C14.5995 12.6586 15.1379 11.3516 15.1353 9.98981C15.1156 8.63926 14.5647 7.35083 13.6018 6.40365C12.6388 5.45648 11.3415 4.92683 9.99082 4.92946C8.64014 4.93209 7.34487 5.46679 6.38565 6.41771C5.42643 7.36863 4.88049 8.65919 4.86612 10.0098ZM6.66695 10.0065C6.66563 9.3472 6.85984 8.70235 7.22501 8.15345C7.59019 7.60456 8.10993 7.17628 8.71851 6.92277C9.32709 6.66926 9.99718 6.60191 10.644 6.72923C11.2909 6.85656 11.8855 7.17284 12.3526 7.63808C12.8197 8.10332 13.1383 8.69663 13.2683 9.34297C13.3982 9.98932 13.3335 10.6597 13.0824 11.2693C12.8313 11.8788 12.4051 12.4003 11.8577 12.7677C11.3103 13.135 10.6662 13.3318 10.0069 13.3331C9.56921 13.334 9.13558 13.2487 8.73083 13.082C8.32607 12.9152 7.95812 12.6705 7.64797 12.3615C7.33782 12.0526 7.09156 11.6857 6.92323 11.2816C6.75491 10.8775 6.66782 10.4442 6.66695 10.0065Z"
                                            fill="#828A99"
                                          />
                                        </svg>{" "}
                                        Instagram
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="#">
                                        {" "}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          height="20"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                        >
                                          <path
                                            d="M16.6667 0C17.5507 0 18.3986 0.35119 19.0237 0.976311C19.6488 1.60143 20 2.44928 20 3.33333V16.6667C20 17.5507 19.6488 18.3986 19.0237 19.0237C18.3986 19.6488 17.5507 20 16.6667 20H3.33333C2.44928 20 1.60143 19.6488 0.976311 19.0237C0.35119 18.3986 0 17.5507 0 16.6667V3.33333C0 2.44928 0.35119 1.60143 0.976311 0.976311C1.60143 0.35119 2.44928 0 3.33333 0H16.6667ZM16.6667 2.22222H3.33333C3.03865 2.22222 2.75603 2.33929 2.54766 2.54766C2.33929 2.75603 2.22222 3.03865 2.22222 3.33333V16.6667C2.22222 16.9614 2.33929 17.244 2.54766 17.4523C2.75603 17.6607 3.03865 17.7778 3.33333 17.7778H16.6667C16.9614 17.7778 17.244 17.6607 17.4523 17.4523C17.6607 17.244 17.7778 16.9614 17.7778 16.6667V3.33333C17.7778 3.03865 17.6607 2.75603 17.4523 2.54766C17.244 2.33929 16.9614 2.22222 16.6667 2.22222ZM5.55556 7.77778C5.8277 7.77781 6.09038 7.87773 6.29375 8.05857C6.49712 8.23942 6.62705 8.48861 6.65889 8.75889L6.66667 8.88889V14.4444C6.66635 14.7276 6.55791 15 6.3635 15.206C6.16909 15.4119 5.90339 15.5358 5.62067 15.5524C5.33796 15.569 5.05958 15.477 4.84241 15.2953C4.62524 15.1135 4.48567 14.8557 4.45222 14.5744L4.44444 14.4444V8.88889C4.44444 8.5942 4.56151 8.31159 4.76988 8.10322C4.97826 7.89484 5.26087 7.77778 5.55556 7.77778ZM8.88889 6.66667C9.14911 6.66663 9.40108 6.75792 9.60088 6.92463C9.80069 7.09133 9.93564 7.32288 9.98222 7.57889C10.206 7.44964 10.4372 7.33352 10.6744 7.23111C11.4156 6.91445 12.5256 6.74 13.5278 7.05444C14.0533 7.22111 14.5811 7.53222 14.9722 8.06222C15.3222 8.53444 15.5111 9.10889 15.5489 9.75445L15.5556 10V14.4444C15.5552 14.7276 15.4468 15 15.2524 15.206C15.058 15.4119 14.7923 15.5358 14.5096 15.5524C14.2268 15.569 13.9485 15.477 13.7313 15.2953C13.5141 15.1135 13.3746 14.8557 13.3411 14.5744L13.3333 14.4444V10C13.3333 9.63333 13.2444 9.46222 13.1867 9.38333C13.1036 9.28029 12.9894 9.20699 12.8611 9.17445C12.4744 9.05222 11.9178 9.11667 11.5478 9.27444C10.9922 9.51222 10.4833 9.88556 10.1367 10.2311L10 10.3778V14.4444C9.99969 14.7276 9.89125 15 9.69684 15.206C9.50243 15.4119 9.23672 15.5358 8.95401 15.5524C8.67129 15.569 8.39291 15.477 8.17574 15.2953C7.95857 15.1135 7.819 14.8557 7.78556 14.5744L7.77778 14.4444V7.77778C7.77778 7.48309 7.89484 7.20048 8.10322 6.9921C8.31159 6.78373 8.5942 6.66667 8.88889 6.66667ZM5.55556 4.44444C5.85024 4.44444 6.13286 4.56151 6.34123 4.76988C6.5496 4.97826 6.66667 5.26087 6.66667 5.55556C6.66667 5.85024 6.5496 6.13286 6.34123 6.34123C6.13286 6.5496 5.85024 6.66667 5.55556 6.66667C5.26087 6.66667 4.97826 6.5496 4.76988 6.34123C4.56151 6.13286 4.44444 5.85024 4.44444 5.55556C4.44444 5.26087 4.56151 4.97826 4.76988 4.76988C4.97826 4.56151 5.26087 4.44444 5.55556 4.44444Z"
                                            fill="#828A99"
                                          />
                                        </svg>{" "}
                                        Linkedin
                                      </Link>
                                    </li>
                                  </ul>
                                </Popover.Body>
                              </Popover>
                            }
                          >
                            <Button variant="secondary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M15 5L12 2M12 2L9 5M12 2V14M6 9H4V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V9H18"
                                  stroke="#828A99"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Button>
                          </OverlayTrigger>
                        ))}
                      </>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section_log_list">
        <Container>
          <Row>
            <Col lg="8">
              <div className="blog_banner">
                <Image
                  className="blog_bn"
                  src={b1}
                  alt="desktop"
                  width={1195}
                  height={601}
                />
              </div>
            </Col>
            <Col lg="12">
              <div className="blog_text">
                <h2>What is Lorem Ipsum?</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="blog_text">
                <h2>What is Lorem Ipsum?</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section_log_list">
        <Container>
          <Row>
            <Col lg="12">
              <div className="articles_sl">
                <div className="text_ar1">
                  <h1>Latest Articles</h1>
                </div>
                <div className="text_ar2">
                  <Link href="">
                    All Articles{" "}
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 11.9998H19.5M19.5 11.9998L12.5 4.99976M19.5 11.9998L12.5 18.9998"
                        stroke="white"
                        strokeWidth="2.91667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg="12">
              <Row>
                <Col sm="12" lg="4">
                  <div className="blog_box">
                    <Image src={b1} alt="img" height={231} />
                    <div className="blog_box_text">
                      {" "}
                      <Link className="cr1" href="#">
                        Crypto
                      </Link>
                      <p>
                        How to Buy Hot Tokens on Ribbit with Binance Connect?
                      </p>
                    </div>
                    <div className="user_list">
                      <ul>
                        <li>
                          {" "}
                          <Image src={user} alt="img" width={20} height={20} />
                        </li>
                        <li>Abhinav Kumar</li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="4"
                            height="4"
                            viewBox="0 0 4 4"
                            fill="none"
                          >
                            <circle
                              cx="1.96326"
                              cy="1.667"
                              r="1.63025"
                              fill="#828A99"
                            />
                          </svg>
                        </li>
                        <li>01 March, 2025</li>
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col sm="12" lg="4">
                  <div className="blog_box">
                    <Image src={b1} alt="img" height={231} />
                    <div className="blog_box_text">
                      {" "}
                      <Link className="cr1" href="#">
                        Crypto
                      </Link>
                      <p>
                        How to Buy Hot Tokens on Ribbit with Binance Connect?
                      </p>
                    </div>
                    <div className="user_list">
                      <ul>
                        <li>
                          {" "}
                          <Image src={user} alt="img" width={20} height={20} />
                        </li>
                        <li>Abhinav Kumar</li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="4"
                            height="4"
                            viewBox="0 0 4 4"
                            fill="none"
                          >
                            <circle
                              cx="1.96326"
                              cy="1.667"
                              r="1.63025"
                              fill="#828A99"
                            />
                          </svg>
                        </li>
                        <li>01 March, 2025</li>
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col sm="12" lg="4">
                  <div className="blog_box">
                    <Image src={b1} alt="img" height={231} />
                    <div className="blog_box_text">
                      {" "}
                      <Link className="cr1" href="#">
                        Crypto
                      </Link>
                      <p>
                        How to Buy Hot Tokens on Ribbit with Binance Connect?
                      </p>
                    </div>
                    <div className="user_list">
                      <ul>
                        <li>
                          {" "}
                          <Image src={user} alt="img" width={20} height={20} />
                        </li>
                        <li>Abhinav Kumar</li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="4"
                            height="4"
                            viewBox="0 0 4 4"
                            fill="none"
                          >
                            <circle
                              cx="1.96326"
                              cy="1.667"
                              r="1.63025"
                              fill="#828A99"
                            />
                          </svg>
                        </li>
                        <li>01 March, 2025</li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default indices;
