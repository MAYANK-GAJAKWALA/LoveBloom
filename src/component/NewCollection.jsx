import React, { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// CSS
import "../component/css/newcollection.css";

// Images
import asset23 from "../Images/asset 23.jpeg";
import asset24 from "../Images/asset 24.jpeg";
import asset25 from "../Images/asset 25.jpeg";
import asset26 from "../Images/asset 26.jpeg";
import asset27 from "../Images/asset 27.jpeg";

function NewCollection() {
  const options = {
    items: 4, // Number of items to display
    loop: true, // Infinite loop
    margin: 10, // Space between items
    nav: true, // Display navigation buttons
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <Fragment>
      <div className="NewCollection">NEW COLLECTION</div>

      <div className="slider" style={{ marginTop: "30px" }}>
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <a href="" style={{ textDecoration: "none" }}>
              <div>
                <img src={asset23} alt="" />
                <p className="SliderHeading">EARRINGS PLATE</p>
                <p className="SliderDescription">
                  <span className="underline_hover_black">New Collection</span>
                </p>
                <p className="price">68.00 $</p>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="" style={{ textDecoration: "none" }}>
              <div>
                <img src={asset24} alt="" />
                <p className="SliderHeading">EARRINGS PLATE</p>
                <p className="SliderDescription">
                  {" "}
                  <span className="underline_hover_black">New Collection</span>
                </p>
                <p className="price">68.00 $</p>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="" style={{ textDecoration: "none" }}>
              <div>
                <img src={asset25} alt="" />
                <p className="SliderHeading">EARRINGS PLATE</p>
                <p className="SliderDescription">
                  {" "}
                  <span className="underline_hover_black">New Collection</span>
                </p>
                <p className="price">68.00 $</p>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="" style={{ textDecoration: "none" }}>
              <div>
                <img src={asset26} alt="" />
                <p className="SliderHeading">EARRINGS PLATE</p>
                <p className="SliderDescription">
                  {" "}
                  <span className="underline_hover_black">New Collection</span>
                </p>
                <p className="price">68.00 $</p>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="" style={{ textDecoration: "none" }}>
              <div>
                <img src={asset27} alt="" />
                <p className="SliderHeading">EARRINGS PLATE</p>
                <p className="SliderDescription">
                  {" "}
                  <span className="underline_hover_black">New Collection</span>
                </p>
                <p className="price">68.00 $</p>
              </div>
            </a>
          </div>
        </OwlCarousel>
      </div>
    </Fragment>
  );
}

export default NewCollection;
