import React from "react";
import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// CSS
import "../component/css/footer_1.css";

function Footer_1() {
  return (
    <Fragment>
      <div style={{ marginTop: "127px" }}>
        <Container className="first_main"></Container>
        <Container fluid>
          {/*----------------------Footer-1 (Part-1)---------------------- */}
          <div className="MainRow">
            <div className="firstRow d-lg-none d-md-none d-xs-none   d-xss-none d-sm-none d-xl-block">
              <Row>
                <Col lg={3}>
                  <h6
                    style={{
                      textAlign: "center",
                      color: "#141414",
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "22px",
                      fontFamily: "poppins",
                    }}
                  >
                    CONTACT
                  </h6>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      lineHeight: "25px",
                      color: "#2D2D2D",
                      fontFamily: "poppins",
                    }}
                  >
                    Working hours Mon-Fri 10am-6pm <br />
                    999-999-9999
                  </p>
                </Col>

                <Col lg={6}>
                  <div className="two_list">
                    <div style={{ position: "relative" }}>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "27px",
                          lineHeight: "35px",
                          fontFamily: "poppins",
                          color: "#141414",
                          marginTop: "-58px",
                          fontWeight: "300px",
                        }}
                      >
                        LET'S GET IN TOUCH!
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          textAlign: "center",
                          marginTop: "-5px",
                          fontSize: "14px",
                          lineHeight: "25px",
                          color: "#2D2D2D",
                          fontFamily: "poppins",
                        }}
                      >
                        What' s inside? Exclusive sales, new arrivals & much
                        more.
                      </p>

                      <Row className="justify-content-xl-center">
                        <Col xxxl={8} xl={12} lg={12}>
                          <div
                            style={{
                              paddingLeft: "30px",
                              paddingRight: "30px",
                              marginTop: "32px",
                            }}
                          >
                            <InputGroup className="mb-3">
                              <Form.Control
                                placeholder="Email address"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className="searchInput2"
                              />
                              <span className="blackBox1">
                                <a
                                  href=""
                                  style={{
                                    textDecoration: "none",
                                    color: "#FFFFFF",
                                  }}
                                >
                                  <span className="underline_hover_white">
                                    SIGN UP
                                  </span>
                                </a>
                              </span>
                            </InputGroup>
                            <div className="belowTextSignUp">
                              <p>
                                * I accept the privacy and cookies policy to
                                receive
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>

                <Col lg={3}>
                  <h6
                    style={{
                      textAlign: "center",
                      color: "#141414",
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "22px",
                      fontFamily: "poppins",
                    }}
                  >
                    SOCIAL NETWORKS
                  </h6>

                  <div style={{ textAlign: "center", marginTop: "15px" }}>
                    <span>
                      <a href="" style={{ color: "black" }}>
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                    </span>
                    <span>
                      <a href="" style={{ color: "black", marginLeft: "35px" }}>
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                    </span>
                    <span>
                      <a href="" style={{ color: "black", marginLeft: "35px" }}>
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </span>
                    <span>
                      <a href="" style={{ color: "black", marginLeft: "35px" }}>
                        <i class="fa-brands fa-youtube"></i>
                      </a>
                    </span>
                    <span>
                      <a href="" style={{ color: "black", marginLeft: "35px" }}>
                        <i class="fa-brands fa-pinterest"></i>
                      </a>
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          {/*----------------------Footer-1 (Part-1)---------------------- */}

          {/*----------------------Footer-1 (Part-2)---------------------- */}
          <Row>
            <div className="SecondRow d-xl-none">
              <Col lg={12}>
                <h6
                  style={{
                    textAlign: "center",
                    color: "#141414",
                    fontSize: "15px",
                    fontWeight: "500",
                    lineHeight: "22px",
                    fontFamily: "poppins",
                  }}
                >
                  CONTACT
                </h6>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    lineHeight: "25px",
                    color: "#2D2D2D",
                    fontFamily: "poppins",
                  }}
                >
                  Working hours Mon-Fri 10am-6pm <br />
                  999-999-9999
                </p>

                <div className="UpBorder"></div>
              </Col>

              <Col lg={12}>
                <div style={{ marginTop: "100px" }}>
                  <div style={{ position: "relative" }}>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "27px",
                        lineHeight: "35px",
                        fontFamily: "poppins",
                        color: "#141414",
                        marginTop: "-58px",
                        fontWeight: "300px",
                      }}
                    >
                      LET'S GET IN TOUCH!
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        textAlign: "center",
                        marginTop: "-5px",
                        fontSize: "14px",
                        lineHeight: "25px",
                        color: "#2D2D2D",
                        fontFamily: "poppins",
                      }}
                    >
                      What' s inside? Exclusive sales, new arrivals & much more.
                    </p>

                    <Row className="justify-content-xl-center justify-content-lg-center   justify-content-md-center  justify-content-sm-center">
                      <Col xxxl={8} lg={8} md={10} sm={10}>
                        <div
                          style={{
                            paddingLeft: "30px",
                            paddingRight: "30px",
                            marginTop: "32px",
                          }}
                        >
                          <InputGroup className="mb-3">
                            <Form.Control
                              placeholder="Email address"
                              aria-label="Recipient's username"
                              aria-describedby="basic-addon2"
                              className="searchInput2"
                            />
                            <span className="blackBox1">
                              <a
                                href=""
                                style={{
                                  textDecoration: "none",
                                  color: "#FFFFFF",
                                }}
                              >
                                <span className="underline_hover_white">
                                  SIGN UP
                                </span>
                              </a>
                            </span>
                          </InputGroup>

                          <div className="blackBox2 d-xl-none ">
                            <a
                              href=""
                              style={{
                                textDecoration: "none",
                                color: "#FFFFFF",
                              }}
                            >
                              <span className="underline_hover_white">
                                SIGN UP
                              </span>
                            </a>
                          </div>

                          <div className="belowTextSignUp">
                            <p>
                              * I accept the privacy and cookies policy to
                              receive
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                <Row>
                  <Col lg={12}>
                    <div className="DownBorder"></div>
                  </Col>
                </Row>
              </Col>

              <Col lg={12}>
                <div style={{ marginTop: "72px" }}>
                  <h6
                    style={{
                      textAlign: "center",
                      color: "#141414",
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "22px",
                      fontFamily: "poppins",
                    }}
                  >
                    SOCIAL NETWORKS
                  </h6>

                  <div style={{ textAlign: "center", marginTop: "15px" }}>
                    <span>
                      <a href="" style={{ color: "black" }}>
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                    </span>
                    <span>
                      <a href="" style={{ color: "black", marginLeft: "35px" }}>
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                    </span>
                    <span>
                      <a href="" style={{ color: "black", marginLeft: "35px" }}>
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </span>
                    <span>
                      <a href="" style={{ color: "black", marginLeft: "35px" }}>
                        <i class="fa-brands fa-youtube"></i>
                      </a>
                    </span>
                    <span>
                      <a href="" style={{ color: "black", marginLeft: "35px" }}>
                        <i class="fa-brands fa-pinterest"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
          {/*----------------------Footer-1 (Part-2)---------------------- */}
        </Container>
      </div>
    </Fragment>
  );
}

export default Footer_1;
