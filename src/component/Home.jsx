import React, { Fragment } from "react";

// Component
import Header from "../component/navbar";
import Slider from "../component/Slider";
import ProductBanner from "../component/ProductBanner";
import BodyImages from "../component/BodyImages";
import CustomRing from "../component/CustomRing";
import NewCollection from "../component/NewCollection";
import BodyImages2 from "../component/BodyImages2";
import Testimonial from "../component/Testimonial";
import Instagram from "../component/Instagram";
import Footer_1 from "../component/Footer_1";
import Footer_2 from "../component/Footer_2";

function Home() {
  return (
    <Fragment>
      <Header />
      <Slider />
      <ProductBanner />
      <BodyImages />
      <CustomRing />
      <NewCollection />
      <BodyImages2 />
      <Testimonial />
      <Instagram />
      <Footer_1 />
      <Footer_2 />
    </Fragment>
  );
}

export default Home;
