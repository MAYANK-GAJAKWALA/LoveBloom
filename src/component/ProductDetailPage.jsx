import React from "react";
import { Fragment } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

// CSS
import "../component/css/productdetailpage.css";

// Component
import Header from "../component/navbar";

// Images
import p1 from "../Images/p1.jpg";
import p2 from "../Images/p2.jpg";
import p3 from "../Images/p3.jpg";

function ProductDetailPage() {
  return (
    <Fragment>
      <Header />
      <Container fluid>
        {/*----------------------------Breadcrumb Section----------------------------*/}
        <Row>
          <div className="part1">
            <Breadcrumb>
              <Link
                to="/"
                className="breadcrumb-item navigationText "
                style={{ marginLeft: "-7px" }}
              >
                Home
              </Link>
              <Link
                to="/productListPage"
                className="breadcrumb-item navigationText "
              >
                Product List
              </Link>
            </Breadcrumb>
          </div>
        </Row>

        <Row>
          <div className="part2">
            <Breadcrumb>
              <Link
                to="/"
                className="breadcrumb-item navigationText "
                style={{ marginLeft: "-7px" }}
              >
                Home
              </Link>
              <Link
                to="/productListPage"
                className="breadcrumb-item navigationText "
              >
                Product List
              </Link>
            </Breadcrumb>
          </div>
        </Row>
        {/*----------------------------Breadcrumb Section----------------------------*/}
        <Row>
          <Col lg={1}>
            <div>
              <ListGroup className="ImageSize ">
                <ListGroup.Item className="rounded-0 imageBorder1">
                  <div className="imgSizeProductDetail">
                    <Image src={p1} className="imageBorder2" />
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="rounded-0 mt-0 imageBorder1">
                  <div className="imgSizeProductDetail">
                    <Image src={p2} />
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="rounded-0 mt-0 imageBorder1">
                  <div className="imgSizeProductDetail">
                    <Image src={p3} />
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>

          <Col lg={5} md={5}>
            <div className="bigImage">
              <Image src={p1} className="imageBorder2 " />
              <br />
              <br />
              <br />
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ProductDetailPage;
