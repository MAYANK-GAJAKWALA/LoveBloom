import React, { Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

//CSS
import "../component/css/productbanner.css";

// Images
import asset9 from "../Images/asset 9.jpeg";
import asset10 from "../Images/asset 10.jpeg";
import asset11 from "../Images/asset 11.jpeg";
import asset13 from "../Images/asset 13.jpeg";
import asset15 from "../Images/asset 15.jpeg";

function ProductBanner() {
  return (
    <Fragment>
      <div style={{ padding: "0 40px" }}>
        <div>
          <p
            style={{
              fontSize: "34px",
              textAlign: "center",
              marginTop: "25px",
              paddingTop: "100px",
              color: "#2D2D2D",
              fontFamily: "poppins",
            }}
          >
            SHOP BY CATEGORY
          </p>
        </div>
        <div>
          <Row>
            <Col lg={3} sm={6}>
              <div className="image-container">
                <div className="hover_animation">
                  <Link to={"/ProductListPage/?category=ring"}>
                    <Image
                      src={asset9}
                      className="ImageSizing  img-normal defaultImage"
                      style={{ marginTop: "20px", paddingTop: "20px" }}
                    />
                    {/* <Image src={asset10} className="hoverImage" /> */}
                  </Link>
                </div>

                <Link
                  to={"/ProductListPage/?category=ring"}
                  style={{ textDecoration: "none" }}
                >
                  <a href="" className="BannerLink">
                    <p className="imageHeading">RINGS</p>
                  </a>
                </Link>
                <Link
                  to={"/ProductListPage"}
                  style={{ textDecoration: "none" }}
                >
                  <a href="" className="BannerLink">
                    <p
                      style={{
                        fontSize: "12px",
                        fontFamily: "poppins",
                        marginTop: "-10px",
                      }}
                    >
                      <span className="underline_hover_black ">
                        Accessories
                      </span>
                      <span> &nbsp;/&nbsp; </span>
                      <span className="underline_hover_black ">
                        Beauty Rings
                      </span>
                    </p>
                  </a>
                </Link>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div>
                <Link
                  to={"/ProductListPage/?category=earring"}
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    src={asset11}
                    className="ImageSizing"
                    style={{ marginTop: "20px", paddingTop: "20px" }}
                  />
                </Link>
                <Link
                  to={"/ProductListPage/?category=earring"}
                  style={{ textDecoration: "none" }}
                >
                  <a href="" className="BannerLink">
                    <p className="imageHeading">EARRINGS</p>
                  </a>
                </Link>
                <Link
                  to={"/ProductListPage/?category=earring"}
                  style={{ textDecoration: "none" }}
                >
                  <a href="" className="BannerLink">
                    <p
                      style={{
                        fontSize: "12px",
                        fontFamily: "poppins",
                        marginTop: "-10px",
                      }}
                    >
                      <span className="underline_hover_black ">
                        Accessories
                      </span>
                      <span> &nbsp;/&nbsp; </span>
                      <span className="underline_hover_black ">
                        Beauty Earrings
                      </span>
                    </p>
                  </a>
                </Link>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div>
                <Link
                  to={"/ProductListPage/?category=pendant"}
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    src={asset13}
                    className="ImageSizing"
                    style={{ marginTop: "20px", paddingTop: "20px" }}
                  />
                </Link>
              </div>
              <Link
                to={"/ProductListPage/?category=pendant"}
                style={{ textDecoration: "none" }}
              >
                <a href="" className="BannerLink">
                  <p className="imageHeading">Pendant</p>
                </a>
              </Link>
              <Link
                to={"/ProductListPage/?category=pendant"}
                style={{ textDecoration: "none" }}
              >
                <a href="" className="BannerLink">
                  <p
                    style={{
                      fontSize: "12px",
                      fontFamily: "poppins",
                      marginTop: "-10px",
                    }}
                  >
                    <span className="underline_hover_black ">Accessories</span>
                    <span> &nbsp;/&nbsp; </span>
                    <span className="underline_hover_black ">Pendant</span>
                  </p>
                </a>
              </Link>
            </Col>
            <Col lg={3} sm={6}>
              <div>
                <Link
                  to={"/ProductListPage/?category=tanmania"}
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    src={asset15}
                    className="ImageSizing"
                    style={{ marginTop: "20px", paddingTop: "20px" }}
                  />
                </Link>
                <Link
                  to={"/ProductListPage"}
                  style={{ textDecoration: "none" }}
                >
                  <a href="" className="BannerLink">
                    <p className="imageHeading">BRACELETS</p>
                  </a>
                </Link>
                <Link
                  to={"/ProductListPage"}
                  style={{ textDecoration: "none" }}
                >
                  <a href="" className="BannerLink">
                    <p
                      style={{
                        fontSize: "12px",
                        fontFamily: "poppins",
                        marginTop: "-10px",
                      }}
                    >
                      <span className="underline_hover_black ">
                        Accessories
                      </span>
                      <span> &nbsp;/&nbsp; </span>
                      <span className="underline_hover_black ">
                        Beauty Bracelets
                      </span>
                    </p>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductBanner;
