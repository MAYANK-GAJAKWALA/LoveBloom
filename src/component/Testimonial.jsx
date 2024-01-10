import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// CSS
import "../component/css/testimonial.css";

// Images
import star from "../Images/asset 59.png";

function Testimonial() {
  const options = {
    items: 3, // Number of items to display
    loop: true, // Infinite loop
    margin: 50, // Space between items
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <Fragment>
      <div className="ImageMainDiv">
        <Container>
          <p className="KindWords">KIND WORDS</p>
          <Row>
            <Col>
              <div className="slider mt-4">
                <OwlCarousel className="owl-theme" {...options}>
                  <div className="item">
                    <div className="startImage">
                      <img src={star} alt="" />
                    </div>
                    <div className="whiteSquare">
                      <div className="startImageBelowText">
                        "Mauris ut malesuada orem Ipsum estibulum ondimentum mal
                        es uid scelerisque in blandit libero atmis."
                      </div>
                      <div className="testName1 ">Anna Heelou</div>
                      <div className="testName2 ">
                        Los Angeles, 5 months ago
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="startImage">
                      <img src={star} alt="" />
                    </div>
                    <div className="whiteSquare">
                      <div className="startImageBelowText">
                        "Condimentum males uada sceleris que in mauris ut
                        malesuada orem Ipsum estibulum blandit libero at."
                      </div>
                      <div className="testName1 ">Michel Wooud</div>
                      <div className="testName2 ">
                        Los Angeles, 5 months ago
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="startImage">
                      <img src={star} alt="" />
                    </div>
                    <div className="whiteSquare">
                      <div className="startImageBelowText">
                        "Condimentum males uada sceleris que in mauris ut
                        malesuada orem Ipsum estibulum blandit libero at."
                      </div>
                      <div className="testName1 ">Monica Stoung</div>
                      <div className="testName2 ">New York, 5 months ago</div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default Testimonial;
