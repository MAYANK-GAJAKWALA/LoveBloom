import React, { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Offcanvas from "react-bootstrap/Offcanvas";
import Slider from "@mui/material/Slider";
import CheckIcon from "@mui/icons-material/Check";

// CSS
import "../component/css/productlistpage.css";

// Component
import Header from "../component/navbar";
import ProductListPageImages from "./ProductListPageImages";
import Footer_1 from "../component/Footer_1";
import Footer_2 from "../component/Footer_2";

// Icons
import TuneIcon from "@mui/icons-material/Tune";

function ProductListPage() {
  /*--------------------Offcanvas--------------------*/

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /*--------------------Offcanvas--------------------*/

  /*--------------------Select--------------------*/
  const [selectedClient, setSelectedClient] = useState([]);

  function handleSelectChange(event) {
    setSelectedClient(event.target.value);
  }
  /*--------------------Select--------------------*/

  /*--------------------Price Range--------------------*/
  const [range, setRange] = React.useState([200, 4999]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  return (
    <Fragment>
      <Header />
      <div className="HeaderBottomBorder"></div>

      <Container fluid>
        <Row>
          <div className="part1">
            <div>
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

            <div className="mt-4">
              <div>
                <div style={{ paddingLeft: "22px", paddingTop: "1px" }}>
                  <span>
                    <TuneIcon
                      style={{ fontSize: "16px", cursor: "pointer" }}
                      onClick={handleShow}
                    />
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      lineHeight: "25px",
                      color: "#141414",
                      fontFamily: "poppins",
                      cursor: "pointer",
                      verticalAlign: "baseline",
                      marginLeft: "5px ",
                    }}
                    onClick={handleShow}
                  >
                    Filters
                  </span>
                </div>
              </div>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton className="OffcanvasTitleBG">
                  <Offcanvas.Title>
                    <div
                      style={{
                        fontSize: "15px",
                        fontFamily: "poppins",
                        fontWeight: "400",
                        color: "#2D2D2D",
                        lineHeight: "25px",
                        padding: "10px 0px 10px 15px",
                      }}
                    >
                      FILTER BY
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div>
                    <div
                      style={{
                        fontSize: "22px",
                        lineHeight: "30px",
                        color: "#141414",
                        padding: "15px 0px 0px 12px",
                        fontFamily: "poppins",
                        letterSpacing: "0.3px",
                      }}
                    >
                      PRICE
                    </div>

                    <div className="OffcanvasWidth">
                      <Slider
                        value={range}
                        onChange={handleChanges}
                        valueLabelDisplay="auto"
                        min={200}
                        max={4999}
                      />

                      <div style={{ display: "flex" }}>
                        <div className="priceBoxMin">
                          <p className="priceBoxFont">${range[0]}</p>
                        </div>
                        <div>
                          <div className="priceBoxMax  ">
                            <p className="priceBoxFont">${range[1]}</p>
                          </div>
                        </div>
                      </div>

                      {/*---------------Filter By Metal Type/*--------------- */}
                      <div>
                        <p
                          style={{
                            fontSize: "22px",
                            lineHeight: "30px",
                            color: "#141414",
                            padding: "52px 0px 0px 0px",
                            fontFamily: "poppins",
                            letterSpacing: "0.3px",
                          }}
                        >
                          METAL TYPE
                        </p>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkMetal1" className="TypeList">
                              <span className="underline_hover_black">
                                14K Rose Gold
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkMetal1"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>
                        </div>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkMetal2" className="TypeList">
                              <span className="underline_hover_black">
                                14K White Gold
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkMetal2"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>
                        </div>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkMetal3" className="TypeList">
                              <span className="underline_hover_black">
                                14K Yellow Gold
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkMetal3"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>
                        </div>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkMetal4" className="TypeList">
                              <span className="underline_hover_black">
                                18K Rose Gold
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkMetal4"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>
                        </div>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkMetal5" className="TypeList">
                              <span className="underline_hover_black">
                                18K white Gold
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkMetal5"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/*---------------Filter By Metal Type/*--------------- */}

                      {/*---------------Filter By Diamond Type/*--------------- */}
                      <div>
                        <p
                          style={{
                            fontSize: "22px",
                            lineHeight: "30px",
                            color: "#141414",
                            padding: "40px 0px 0px 0px",
                            fontFamily: "poppins",
                            letterSpacing: "0.3px",
                          }}
                        >
                          DIAMOND TYPE
                        </p>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkDiamond1" className="TypeList">
                              <span className="underline_hover_black">
                                Round
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkDiamond1"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkDiamond2" className="TypeList">
                              <span className="underline_hover_black">
                                Asscher
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkDiamond2"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkDiamond3" className="TypeList">
                              <span className="underline_hover_black">
                                Cushion
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkDiamond3"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkDiamond4" className="TypeList">
                              <span className="underline_hover_black">
                                Emerald
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkDiamond4"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkDiamond5" className="TypeList">
                              <span className="underline_hover_black">
                                Heart
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkDiamond5"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkDiamond6" className="TypeList">
                              <span className="underline_hover_black">
                                Princess
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkDiamond6"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkDiamond7" className="TypeList">
                              <span className="underline_hover_black">
                                Radiant
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkDiamond7"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/*---------------Filter By Diamond Type/*--------------- */}

                      {/*---------------Filter By Weight/*--------------- */}
                      <div>
                        <p
                          style={{
                            fontSize: "22px",
                            lineHeight: "30px",
                            color: "#141414",
                            padding: "40px 0px 0px 0px",
                            fontFamily: "poppins",
                            letterSpacing: "0.3px",
                          }}
                        >
                          WEIGHT
                        </p>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkWeight1" className="TypeList">
                            <span className="underline_hover_black">
                              Less Than 2 Grams
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkWeight1"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkWeight2" className="TypeList">
                            <span className="underline_hover_black">
                              2 Grams To 4 Grams
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkWeight2"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkWeight3" className="TypeList">
                            <span className="underline_hover_black">
                              4 Grams To 6 Grams
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkWeight3"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkWeight4" className="TypeList">
                            <span className="underline_hover_black">
                              6 Grams And Above
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkWeight4"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>
                      </div>
                      {/*---------------Filter By Weight/*--------------- */}

                      {/*---------------Filter By Setting Type/*--------------- */}
                      <div>
                        <p
                          style={{
                            fontSize: "22px",
                            lineHeight: "30px",
                            color: "#141414",
                            padding: "40px 0px 0px 0px",
                            fontFamily: "poppins",
                            letterSpacing: "0.3px",
                          }}
                        >
                          SETTING TYPE
                        </p>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkSetting1" className="TypeList">
                            <span className="underline_hover_black">Prong</span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkSetting1"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkSetting2" className="TypeList">
                            <span className="underline_hover_black">
                              Chanel
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkSetting2"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkSetting3" className="TypeList">
                            <span className="underline_hover_black">
                              Micro Pave
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkSetting3"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkSetting4" className="TypeList">
                            <span className="underline_hover_black">Bazel</span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkSetting4"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkSetting5" className="TypeList">
                            <span className="underline_hover_black">
                              Pre-Pave
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkSetting5"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkSetting6" className="TypeList">
                            <span className="underline_hover_black">
                              Pressure
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkSetting6"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>
                      </div>
                      {/*---------------Filter By Setting Type/*--------------- */}
                    </div>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>

            <Col>
              <div style={{ marginTop: "-22px", paddingRight: "22px" }}>
                <select
                  onChange={handleSelectChange}
                  className="SelectLiabray"
                  style={{ float: "right" }}
                >
                  <option value="one">Default Sorting</option>
                  <option value="two">Sort By Popularity</option>
                  <option value="two">Sort By Latest</option>
                  <option value="two">Sort By Price High to Low</option>
                  <option value="two">Sort By Low High to High</option>
                </select>
              </div>
            </Col>
          </div>
        </Row>

        <Row>
          <div className="part2">
            <Col>
              <div className="customPosition-1">
                <Breadcrumb>
                  <Link to="/" className="breadcrumb-item navigationText">
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
            </Col>

            <div className="mt-4">
              <div className="FilterPositionSmallScreen">
                <div>
                  <span>
                    <TuneIcon
                      style={{ fontSize: "16px", cursor: "pointer" }}
                      onClick={handleShow}
                    />
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      lineHeight: "25px",
                      color: "#141414",
                      fontFamily: "poppins",
                      cursor: "pointer",
                      verticalAlign: "baseline",
                      marginLeft: "5px ",
                    }}
                    onClick={handleShow}
                  >
                    Filters
                  </span>
                </div>
              </div>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton className="OffcanvasTitleBG">
                  <Offcanvas.Title>
                    <div
                      style={{
                        fontSize: "15px",
                        fontFamily: "poppins",
                        fontWeight: "400",
                        color: "#2D2D2D",
                        lineHeight: "25px",
                        padding: "10px 0px 10px 15px",
                      }}
                    >
                      FILTER BY
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div>
                    <div
                      style={{
                        fontSize: "22px",
                        lineHeight: "30px",
                        color: "#141414",
                        padding: "15px 0px 0px 12px",
                        fontFamily: "poppins",
                        letterSpacing: "0.3px",
                      }}
                    >
                      PRICE
                    </div>

                    <div className="OffcanvasWidth">
                      <Slider
                        value={range}
                        onChange={handleChanges}
                        valueLabelDisplay="auto"
                        min={200}
                        max={4999}
                      />

                      <div style={{ display: "flex" }}>
                        <div className="priceBoxMin">
                          <p className="priceBoxFont">${range[0]}</p>
                        </div>
                        <div>
                          <div className="priceBoxMax  ">
                            <p className="priceBoxFont">${range[1]}</p>
                          </div>
                        </div>
                      </div>

                      {/*---------------Filter By Metal Type/*--------------- */}
                      <div>
                        <p
                          style={{
                            fontSize: "22px",
                            lineHeight: "30px",
                            color: "#141414",
                            padding: "52px 0px 0px 0px",
                            fontFamily: "poppins",
                            letterSpacing: "0.3px",
                          }}
                        >
                          METAL TYPE
                        </p>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkMetal11" className="TypeList">
                              <span className="underline_hover_black">
                                14K Rose Gold
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkMetal11"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>
                        </div>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkMetal12" className="TypeList">
                              <span className="underline_hover_black">
                                14K White Gold
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkMetal12"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>
                        </div>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkMetal13" className="TypeList">
                              <span className="underline_hover_black">
                                14K Yellow Gold
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkMetal13"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>
                        </div>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkMetal14" className="TypeList">
                              <span className="underline_hover_black">
                                18K Rose Gold
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkMetal14"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>
                        </div>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkMetal15" className="TypeList">
                              <span className="underline_hover_black">
                                18K white Gold
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkMetal15"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/*---------------Filter By Metal Type/*--------------- */}

                      {/*---------------Filter By Diamond Type/*--------------- */}
                      <div>
                        <p
                          style={{
                            fontSize: "22px",
                            lineHeight: "30px",
                            color: "#141414",
                            padding: "40px 0px 0px 0px",
                            fontFamily: "poppins",
                            letterSpacing: "0.3px",
                          }}
                        >
                          DIAMOND TYPE
                        </p>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkDiamond11" className="TypeList">
                              <span className="underline_hover_black">
                                Round
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkDiamond11"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkDiamond12" className="TypeList">
                              <span className="underline_hover_black">
                                Asscher
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkDiamond12"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkDiamond13" className="TypeList">
                              <span className="underline_hover_black">
                                Cushion
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkDiamond13"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkDiamond14" className="TypeList">
                              <span className="underline_hover_black">
                                Emerald
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkDiamond14"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkDiamond15" className="TypeList">
                              <span className="underline_hover_black">
                                Heart
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkDiamond15"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkDiamond16" className="TypeList">
                              <span className="underline_hover_black">
                                Princess
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkDiamond16"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <label for="ChkDiamond17" className="TypeList">
                              <span className="underline_hover_black">
                                Radiant
                              </span>
                            </label>
                            <input
                              type="checkbox"
                              id="ChkDiamond17"
                              className="myCheck"
                            />
                            <span className="customCheck">
                              <CheckIcon />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/*---------------Filter By Diamond Type/*--------------- */}

                      {/*---------------Filter By Weight/*--------------- */}
                      <div>
                        <p
                          style={{
                            fontSize: "22px",
                            lineHeight: "30px",
                            color: "#141414",
                            padding: "40px 0px 0px 0px",
                            fontFamily: "poppins",
                            letterSpacing: "0.3px",
                          }}
                        >
                          WEIGHT
                        </p>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkWeight11" className="TypeList">
                            <span className="underline_hover_black">
                              Less Than 2 Grams
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkWeight11"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkWeight12" className="TypeList">
                            <span className="underline_hover_black">
                              2 Grams To 4 Grams
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkWeight12"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkWeight13" className="TypeList">
                            <span className="underline_hover_black">
                              4 Grams To 6 Grams
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkWeight13"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkWeight14" className="TypeList">
                            <span className="underline_hover_black">
                              6 Grams And Above
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkWeight14"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>
                      </div>
                      {/*---------------Filter By Weight/*--------------- */}

                      {/*---------------Filter By Setting Type/*--------------- */}
                      <div>
                        <p
                          style={{
                            fontSize: "22px",
                            lineHeight: "30px",
                            color: "#141414",
                            padding: "40px 0px 0px 0px",
                            fontFamily: "poppins",
                            letterSpacing: "0.3px",
                          }}
                        >
                          SETTING TYPE
                        </p>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkSetting11" className="TypeList">
                            <span className="underline_hover_black">Prong</span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkSetting11"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkSetting12" className="TypeList">
                            <span className="underline_hover_black">
                              Chanel
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkSetting12"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkSetting13" className="TypeList">
                            <span className="underline_hover_black">
                              Micro Pave
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkSetting13"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkSetting14" className="TypeList">
                            <span className="underline_hover_black">Bazel</span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkSetting14"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkSetting15" className="TypeList">
                            <span className="underline_hover_black">
                              Pre-Pave
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkSetting15"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label for="ChkSetting16" className="TypeList">
                            <span className="underline_hover_black">
                              Pressure
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            id="ChkSetting16"
                            className="myCheck"
                          />
                          <span className="customCheck">
                            <CheckIcon />
                          </span>
                        </div>
                      </div>
                      {/*---------------Filter By Setting Type/*--------------- */}
                    </div>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>

            <div
              style={{ marginTop: "-22px" }}
              className="SortingPositionSmallScreen"
            >
              <select
                onChange={handleSelectChange}
                className="SelectLiabray"
                style={{ float: "right" }}
              >
                <option value="one">Default Sorting</option>
                <option value="two">Sort By Popularity</option>
                <option value="two">Sort By Latest</option>
                <option value="two">Sort By Price High to Low</option>
                <option value="two">Sort By Low High to High</option>
              </select>
            </div>

            {/* ---------------For Size >=480px---------------*/}
            <div style={{ marginTop: "-22px" }}>
              <select
                onChange={handleSelectChange}
                className="SelectLiabray1"
                style={{ float: "left", marginTop: "60px", minWidth: "100%" }}
              >
                <option value="one">Default Sorting</option>
                <option value="two">Sort By Popularity</option>
                <option value="two">Sort By Latest</option>
                <option value="two">Sort By Price High to Low</option>
                <option value="two">Sort By Low High to High</option>
              </select>
            </div>
          </div>
          {/* ---------------For Size >=480px---------------*/}
        </Row>

        <div className="BottomBorderProductPage"></div>
      </Container>
      <ProductListPageImages />
      <Footer_1 />
      <Footer_2 />
    </Fragment>
  );
}

export default ProductListPage;
