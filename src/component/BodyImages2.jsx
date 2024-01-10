import React from "react";
import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// CSS
import "../component/css/bodyimages2.css";

// Images
import asset28 from "../Images/asset 28.jpeg";
import asset29 from "../Images/asset 29.jpeg";

function BodyImages2() {
  return (
    <Fragment>
      <div>
        <Container>
          <Row style={{ padding: "127px 20px" }}>
            <Col lg={6} xs={12} md={6} xl={6}>
              <div className="mainImageDiv">
                <div className="box">
                  <a href="">
                    <img src={asset28} alt="" />
                  </a>
                </div>

                <div>
                  <div className="text_list_1">
                    <p>ELSA PARETTY JEWELRY</p>
                  </div>
                  <div className="text_list_2">
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="text_list_button">
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#141414" }}
                  >
                    <span className="underline_hover_black">Shop Now</span>
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={6} xs={12} md={6} className="Topmargin">
              <div className="main_div_2 box">
                <a href="">
                  <img src={asset29} alt="" className="Image2nd " />
                </a>

                <div className="Image_2_text_1">
                  <p>Euphoria</p>
                </div>
                <div className="Image_2_text_2">
                  <a href="">SHOP MORE</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default BodyImages2;
