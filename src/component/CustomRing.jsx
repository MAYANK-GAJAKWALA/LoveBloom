import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

// CSS
import "../component/css/customring.css";

// Images
import asset21 from "../Images/asset 21.jpeg";

function CustomRing() {
  return (
    <Fragment>
      <div className="MainDiv">
        <Container>
          <Row style={{ marginTop: "100px" }}>
            <Col lg={7}>
              <div>
                <img
                  src={asset21}
                  alt=""
                  style={{
                    marginTop: "-77px",
                    height: "auto",
                  }}
                />
              </div>
            </Col>

            <Col lg={5} className="">
              <div>
                <p className="SizeText">
                  Create a custom <br />
                  engagement ring
                </p>
                <p className="subText">
                  Select a setting and choose a diamond to create your own
                  Beyond Conflict Free engagement ring.
                </p>
              </div>
              <div style={{ paddingLeft: "50px" }} className="MainButtonDiv">
                <div className="TwoButton ">
                  <Link
                    to={"/startWithSetting"}
                    style={{ textDecoration: "none", color: "#141414" }}
                    className="underline_hover_black"
                  >
                    START WITH A SETTING
                  </Link>
                </div>
                <div className="TwoButton" style={{ marginTop: "18px" }}>
                  <Link
                    to={"/diamondList"}
                    style={{ textDecoration: "none", color: "#141414" }}
                    className="underline_hover_black"
                  >
                    START WITH A DIAMOND
                  </Link>
                </div>
                <br />
                <br />
                <br />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default CustomRing;
