import React, { Fragment } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// CSS
import "../component/css/instagram.css";

// Images
import asset31 from "../Images/asset 31.jpeg";
import asset32 from "../Images/asset 32.jpeg";
import asset33 from "../Images/asset 33.jpeg";
import asset34 from "../Images/asset 34.jpeg";
import asset35 from "../Images/asset 35.jpeg";
import asset36 from "../Images/asset 36.jpeg";
import asset37 from "../Images/asset 37.jpeg";
import asset38 from "../Images/asset 38.jpeg";

function Instagram() {
  return (
    <Fragment>
      <div style={{ padding: "0 40px" }}>
        <div>
          <p
            style={{
              fontSize: "27px",
              textAlign: "center",
              marginTop: "25px",
              paddingTop: "100px",
              color: "#2D2D2D",
              fontFamily: "poppins",
            }}
          >
            INSTAGRAM
          </p>
        </div>
        <div style={{ marginTop: "-18px" }}>
          <Row>
            <Col lg={3} sm={6}>
              <div>
                <div>
                  <a href="">
                    <Image
                      src={asset31}
                      style={{ marginTop: "20px", paddingTop: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="image-container">
                <div>
                  <a href="">
                    <Image
                      src={asset32}
                      className="ImageSizing  img-normal"
                      style={{ marginTop: "20px", paddingTop: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="image-container">
                <div>
                  <a href="">
                    <Image
                      src={asset33}
                      className="ImageSizing  img-normal"
                      style={{ marginTop: "20px", paddingTop: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="image-container">
                <div>
                  <a href="">
                    <Image
                      src={asset34}
                      className="ImageSizing  img-normal"
                      style={{ marginTop: "20px", paddingTop: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="image-container">
                <div>
                  <a href="">
                    <Image
                      src={asset35}
                      className="ImageSizing  img-normal"
                      style={{ marginTop: "20px", paddingTop: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="image-container">
                <div>
                  <a href="">
                    <Image
                      src={asset36}
                      className="ImageSizing  img-normal"
                      style={{ marginTop: "20px", paddingTop: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="image-container">
                <div>
                  <a href="">
                    <Image
                      src={asset37}
                      className="ImageSizing  img-normal"
                      style={{ marginTop: "20px", paddingTop: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="image-container">
                <div>
                  <a href="">
                    <Image
                      src={asset38}
                      className="ImageSizing  img-normal"
                      style={{ marginTop: "20px", paddingTop: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </Col>

            <Col>
              <div className="BelowText">Lovebloom Story</div>
              <div className="MainTextBelowText">@Lovebloom</div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
}

export default Instagram;
