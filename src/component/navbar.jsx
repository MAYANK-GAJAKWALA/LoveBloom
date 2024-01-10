import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { Fragment } from "react";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

// CSS
import "../component/css/navbar.css";

// Images
import logo from "../Images/logo.png";
import asset1 from "../Images/asset 1.jpeg";
import asset2 from "../Images/asset 2.jpeg";

function Header() {
  return (
    <Fragment>
      {/*------------------Navbar-01------------------ */}

      <Navbar
        expand="lg"
        className="bg-body-tertiary d-md-none d-xl-block hhh  d-lg-block"
        style={{ display: "none" }}
      >
        <Container>
          <Row className="w-100 text-center">
            <Col lg={4}>
              <div className="mt-3 d-flex align-items-center ">
                <SearchIcon style={{ width: "24px" }} />
                <Form.Control
                  placeholder="SEARCH"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="bg-body-tertiary border-0 searchInput "
                />
              </div>
            </Col>
            <Col lg={4}>
              <a href="#">
                <img
                  src={logo}
                  alt=""
                  style={{ height: "70px", width: "auto" }}
                />
              </a>
            </Col>
            <Col lg={4} className="mt-3 ">
              <div className="float-end ">
                <a href="">
                  <PersonOutlineOutlinedIcon
                    className="me-3"
                    style={{ color: "black" }}
                  />
                </a>
                <a href="">
                  <FavoriteBorderOutlinedIcon
                    className="me-3"
                    style={{ color: "black" }}
                  />
                </a>
                <a href="">
                  <ShoppingBasketOutlinedIcon
                    className="me-0"
                    style={{ color: "black" }}
                  />
                </a>
              </div>
            </Col>
            <Nav className="me-auto">
              <Col
                lg={12}
                className="d-flex justify-content-center mt-3 webMenu TextSize "
              >
                <Nav.Link href="#home" className="">
                  <span className="underline_hover_black">HOME</span>
                </Nav.Link>
                {/*------------------ENGAGEMENT RINGS------------------ */}
                <li>
                  <Nav.Link href="">
                    <span className="underline_hover_black">
                      ENGAGEMENT RINGS
                    </span>
                  </Nav.Link>
                  <Navbar
                    expand="lg"
                    style={{ backgroundColor: "#F6F6F6" }}
                    className="hiddenElement"
                  >
                    <Container>
                      <div className="d-flex ">
                        <div style={{ fontSize: "13px" }}>
                          <ul style={{ listStyle: "none" }}>
                            <li
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                marginTop: "25px",
                                textAlign: "left",
                                cursor: "pointer",
                              }}
                            >
                              <span className="underline_hover_black">
                                ENGAGEMENT RINGS STYLE
                              </span>
                            </li>

                            <a href="" className="LinkTag">
                              <li className="LiMargin ">
                                <span className="underline_hover_black">
                                  Solitaire
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Three Stone
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Hidden Halo
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Halo
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Nature Inspired
                                </span>
                              </li>
                            </a>
                          </ul>
                        </div>

                        <div style={{ fontSize: "13px", marginLeft: "100px" }}>
                          <ul style={{ listStyle: "none" }}>
                            <li
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                marginTop: "25px",
                                textAlign: "left",
                                cursor: "pointer",
                              }}
                            >
                              <span className="underline_hover_black">
                                WOMEN
                              </span>
                            </li>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Stackable Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Anniversary Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Eternity Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Curved Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Emerald Rings
                                </span>
                              </li>
                            </a>
                          </ul>
                        </div>

                        <div style={{ fontSize: "13px", marginLeft: "100px" }}>
                          <ul style={{ listStyle: "none" }}>
                            <li
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                marginTop: "25px",
                                textAlign: "left",
                                cursor: "pointer",
                              }}
                            >
                              <span className="underline_hover_black">MEN</span>
                            </li>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Classic Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Men's Engagement Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Matte Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Textured Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Men's Jewelry
                                </span>
                              </li>
                            </a>
                          </ul>
                        </div>

                        <div style={{ fontSize: "13px", marginLeft: "100px" }}>
                          <ul style={{ listStyle: "none" }}>
                            <li
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                marginTop: "25px",
                                textAlign: "left",
                                cursor: "pointer",
                              }}
                            >
                              <span className="underline_hover_black">
                                FEATURED
                              </span>
                            </li>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  New Arrivals
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Women's Top Twenty
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Men's Top Twenty
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Wedding Jewelry
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Gender Neutral Rings
                                </span>
                              </li>
                            </a>
                          </ul>
                        </div>
                      </div>
                    </Container>
                  </Navbar>
                </li>
                {/*------------------ENGAGEMENT RINGS------------------ */}

                {/*------------------Wedding RINGS------------------ */}
                <li>
                  <Nav.Link href="">
                    <span className="underline_hover_black">WEDDING RINGS</span>
                  </Nav.Link>
                  <Navbar
                    expand="lg"
                    style={{ backgroundColor: "#F6F6F6" }}
                    className="hiddenElement"
                  >
                    <Container>
                      <div className="d-flex">
                        <div style={{ fontSize: "13px" }}>
                          <ul style={{ listStyle: "none" }}>
                            <li
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                marginTop: "25px",
                                textAlign: "left",
                                cursor: "pointer",
                              }}
                            >
                              <span className="underline_hover_black">
                                WOMEN
                              </span>
                            </li>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Women's Wedding Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Stackable Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Anniversary Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Eternity Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Curved Rings
                                </span>
                              </li>
                            </a>
                          </ul>
                        </div>

                        <div style={{ fontSize: "13px" }}>
                          <ul
                            style={{ listStyle: "none", marginLeft: "100px" }}
                          >
                            <li
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                marginTop: "25px",
                                textAlign: "left",
                                cursor: "pointer",
                              }}
                            >
                              <span className="underline_hover_black">MEN</span>
                            </li>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Classic Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Men's Wedding Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Matte Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Textured Rings
                                </span>
                              </li>
                            </a>
                            <a href="" className="LinkTag">
                              <li className="LiMargin">
                                <span className="underline_hover_black">
                                  Men's Jewelry
                                </span>
                              </li>
                            </a>
                          </ul>
                        </div>

                        <div>
                          <h6
                            style={{
                              marginLeft: "-245px",
                              marginTop: "25px",
                              cursor: "pointer",
                            }}
                          >
                            <span className="underline_hover_black">
                              EDITORS NEW PICKS
                            </span>
                          </h6>
                          <div className="d-flex">
                            <img
                              src={asset1}
                              alt=""
                              style={{ height: "150px", marginLeft: "50px" }}
                              className="mt-3 "
                            />
                            <img
                              src={asset2}
                              alt=""
                              style={{ height: "150px", marginLeft: "50px" }}
                              className="mt-3 "
                            />
                          </div>
                          <div>
                            <p
                              style={{
                                marginRight: "230px",
                                fontSize: "13px",
                                color: "rgb(68, 68, 68)",
                              }}
                              className="mt-3"
                            >
                              Introducting New Collection{" "}
                            </p>
                            <a
                              href=""
                              style={{
                                marginRight: "335px",
                                fontSize: "13px",
                                color: "black",
                              }}
                              className="mt-3"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </Container>
                  </Navbar>
                </li>

                {/*------------------Wedding RINGS------------------ */}
                <Nav.Link href="">
                  <span className="underline_hover_black">ABOUT US</span>
                </Nav.Link>
                <Nav.Link href="">
                  <span className="underline_hover_black">CONTACT US</span>
                </Nav.Link>
              </Col>
            </Nav>
          </Row>
        </Container>
      </Navbar>

      {/*------------------Navbar-01------------------ */}

      {/*------------------Navbar-02------------------ */}

      <Navbar expand="lg" className="bg-body-tertiary  d-lg-none fixed-top">
        <Container fluid>
          <a href="#">
            <img src={logo} alt="" style={{ height: "70px" }} />
          </a>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <span className="underline_hover_black">HOME</span>
              </Nav.Link>
              <Nav.Link href="">
                <span className="underline_hover_black">ENGAGEMENT RINGS</span>
              </Nav.Link>
              <Nav.Link href="">
                <span className="underline_hover_black">WEDDING RINGS</span>
              </Nav.Link>
              <Nav.Link href="">
                <span className="underline_hover_black">ABOUT US</span>
              </Nav.Link>
              <Nav.Link href="">
                <span className="underline_hover_black">CONTACT US</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*------------------Navbar-02------------------ */}
    </Fragment>
  );
}

export default Header;
