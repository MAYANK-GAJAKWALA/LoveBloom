import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// CSS
import "../component/css/bodyimages.css";

// Images
import asset17 from "../Images/asset 17.jpeg";
import asset18 from "../Images/asset 18.jpeg";
import asset19 from "../Images/asset 19.png";
import asset20 from "../Images/asset 20.jpeg";

function BodyImages() {
  return (
    <Fragment>
      <div>
        <Container style={{ padding: "100px 40px 95px 40px" }}>
          <Row className="g-5 banner">
            <Col xl={6} md={6} xs={12}>
              <div className="marginClass">
                <img src={asset17} alt="" className="img1 " />
                {/* <h1>Diamond</h1> */}
              </div>
            </Col>

            <Col xl={6} md={6} xs={12}>
              <div>
                <img src={asset18} alt="" className="img2" />
              </div>
            </Col>

            <Col xl={6} md={6} xs={12} style={{ textAlign: "center" }}>
              <div className="marginClass1 ">
                <img src={asset19} alt="" className="img3 marginClass1 " />
              </div>
              <div className="imageDetails">
                <p
                  style={{
                    fontFamily: "poppins",
                    fontWeight: "400",
                    fontSize: "22px",
                    textAlign: "center",
                    marginTop: "35px",
                  }}
                >
                  MORE CATEGORIES
                </p>

                <p
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    marginTop: "-10px",
                    lineHeight: "25px",
                    fontFamily: "poppins",
                  }}
                  className=" textSize"
                >
                  Lorem Ipsum estibulum blandit libero <br />
                  atretenem turmauristeu con dimentum
                </p>
                <p>
                  <a
                    href=""
                    style={{
                      // textDecoration: "none",
                      color: "#141414",
                      fontfamily: "pippins",
                      fontSize: "14px",
                      lineHeight: "25px",
                      fontWeight: "600",
                    }}
                    className=" textSize"
                  >
                    Find More
                  </a>
                </p>

                <p
                  style={{
                    textAlign: "justify center",
                    fontSize: "14px",
                    marginTop: "-10px",
                    lineHeight: "25px",
                    fontFamily: "poppins",
                  }}
                  className="d-xss-display d-lg-none d-md-none "
                >
                  Lorem Ipsum estibulum blandit libero atretenem turmauristeu
                  con dimentum
                </p>
                <p>
                  <a
                    href=""
                    style={{
                      // textDecoration: "none",
                      color: "#141414",
                      fontfamily: "pippins",
                      fontSize: "14px",
                      lineHeight: "25px",
                      fontWeight: "600",
                    }}
                    className="d-xss-display d-lg-none d-md-none "
                  >
                    Find More
                  </a>
                </p>
              </div>
            </Col>

            <Col xl={6} md={6} xs={12}>
              <div>
                <img src={asset20} alt="" className="img4 marginClass1" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default BodyImages;
