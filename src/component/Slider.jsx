import React, { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// CSS
import "../component/css/slider.css";

// Images
import asset4 from "../Images/asset 4.jpeg";
import asset7 from "../Images/asset 7.jpeg";
import asset8 from "../Images/asset 8.jpeg";

function Slider() {
  const options = {
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    animateOut: "fadeOut",
    // navText: [
    //   '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/></svg>',
    //   '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/></svg>',
    // ],
  };
  return (
    <Fragment>
      <div className="slider">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item imageZoom" key={1}>
            <img src={asset4} alt="" />
            <div class="sliderContent">
              Jewellery
              <div className="shopNowButton">
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    top: "50%",
                    left: "50%",
                    position: "absolute",
                    transform: " translate(-50%, -50%)",
                    color: "white",
                  }}
                >
                  <span className="underline_hover_white">SHOP NOW</span>
                </a>
              </div>
            </div>
          </div>
          <div className="item imageZoom" key={2}>
            <img src={asset7} alt="" />
            <div class="sliderContent ">
              Diamonds
              <div className="shopNowButton">
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    top: "50%",
                    left: "50%",
                    position: "absolute",
                    transform: " translate(-50%, -50%)",
                    color: "white",
                  }}
                >
                  <span className="underline_hover_white">SHOP NOW</span>
                </a>
              </div>
            </div>
          </div>
          <div className="item imageZoom" key={3}>
            <img src={asset8} alt="" />
            <div class="sliderContent ">
              Neckless
              <div className="shopNowButton">
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    top: "50%",
                    left: "50%",
                    position: "absolute",
                    transform: " translate(-50%, -50%)",
                    color: "white",
                  }}
                >
                  <span className="underline_hover_white">SHOP NOW</span>
                </a>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </Fragment>
  );
}

export default Slider;
