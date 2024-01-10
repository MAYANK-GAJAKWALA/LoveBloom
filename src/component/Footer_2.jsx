import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// CSS
import "../component/css/footer_2.css";

function Footer_2() {
  return (
    <Fragment>
      <div className="BGDiv">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="DisplayMargin2">
                <p
                  style={{
                    fontSize: "27px",
                    lineHeight: "35px",
                    fontFamily: "poppins",
                    fontWeight: "400",
                    color: "#141414",
                    padding: "115px 0px 0px 20px",
                  }}
                >
                  LOVBLOOM JEWELRY SHOP
                </p>
              </div>
              <div className="OnlinePayment DisplayMargin2">
                <span style={{ fontSize: "22px" }}>
                  <a href="" style={{ color: "black" }}>
                    <i class="fa-brands fa-cc-visa"></i>
                  </a>
                </span>
                <span style={{ fontSize: "22px", paddingLeft: "20px" }}>
                  <a href="" style={{ color: "black" }}>
                    <i class="fa-brands fa-apple-pay"></i>
                  </a>
                </span>
                <span style={{ fontSize: "22px", paddingLeft: "20px" }}>
                  <a href="" style={{ color: "black" }}>
                    <i class="fa-brands fa-cc-amex"></i>
                  </a>
                </span>
                <span style={{ fontSize: "22px", paddingLeft: "20px" }}>
                  <a href="" style={{ color: "black" }}>
                    <i class="fa-brands fa-amazon-pay"></i>
                  </a>
                </span>
                <span style={{ fontSize: "22px", paddingLeft: "20px" }}>
                  <a href="" style={{ color: "black" }}>
                    <i class="fa-brands fa-google-pay"></i>
                  </a>
                </span>
              </div>
            </Col>

            <Col lg={2} md={4}>
              <div className="DisplayMargin DisplayMarginList2">
                <ul
                  style={{
                    listStyle: "none",
                    paddingTop: "110px",
                  }}
                >
                  <a href="" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        fontSize: "12px",
                        lineHeight: "25px",
                        color: "#2D2D2D",
                        fontWeight: "500",
                      }}
                    >
                      GENERAL
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">Shipping</span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">Order</span>
                      Status
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">
                        <span>Exchanges</span>
                      </span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">
                        <span>Return</span>
                      </span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">Size Guide</span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">
                        Jewelry Care
                      </span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">FAQ</span>
                    </li>
                  </a>
                </ul>
              </div>
            </Col>

            <Col lg={2} md={4}>
              <div className="DisplayMargin DisplayMarginList2">
                <ul style={{ listStyle: "none", paddingTop: "110px" }}>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        fontSize: "12px",
                        lineHeight: "25px",
                        color: "#2D2D2D",
                        fontWeight: "500",
                      }}
                    >
                      ABOUT
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">Our World</span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">
                        Our Packaging
                      </span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">Our Client</span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">Stories</span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">Gift Cards</span>
                    </li>
                  </a>
                </ul>
              </div>
            </Col>

            <Col lg={2} md={4}>
              <div className="DisplayMargin DisplayMarginList2">
                <ul style={{ listStyle: "none", paddingTop: "110px" }}>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        fontSize: "12px",
                        lineHeight: "25px",
                        color: "#2D2D2D",
                        fontWeight: "500",
                      }}
                    >
                      CATAGORIES
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">New In</span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">Earrings</span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">Rings</span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">Necklace</span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">Bracelets</span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">Accessories</span>
                    </li>
                  </a>
                  <a href="" style={{ textDecoration: "none" }}>
                    <li className="List">
                      <span className="underline_hover_black">All Jewelry</span>
                    </li>
                  </a>
                </ul>
              </div>
            </Col>

            <Col lg={12} md={12}>
              <div className="bottomBorderFooter2"></div>
              <div className="Footer2text">
                © 2023 LOVBLOOM, All Rights Reserved
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default Footer_2;
