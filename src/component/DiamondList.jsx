import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Slider from "@mui/material/Slider";
import axios from "axios";
import DataTable from "react-data-table-component";
import { BeatLoader } from "react-spinners";
import { Pagination } from "@mantine/core";

// CSS
import "../component/css/diamondlist.css";

// Components
import Header from "../component/navbar";
import Footer_1 from "../component/Footer_1";
import Footer_2 from "../component/Footer_2";

function DiamondList() {
  const [open, setOpen] = useState(false);
  const [openMain, setOpenMain] = useState(true);

  const [diamondTable, setDiamondTable] = useState([]);
  const [clarityFilters, setClarityFilters] = useState([]);
  const [ShapeFilters, setShapeFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);
  const [cutFilters, setCutFilters] = useState([]);
  const [fluorescenceFilters, setFluorescenceFilters] = useState([]);
  const [labFilters, setLabFilters] = useState([]);
  const [symFilters, setSymFilters] = useState([]);
  const [polishFilters, setPolishFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isCushionClicked, setIsCushionClicked] = useState(false);
  const [isEmeraldClicked, setIsEmeraldClicked] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isMarquiseClicked, setIsMarquiseClicked] = useState(false);
  const [isOvalClicked, setIsOvalClicked] = useState(false);
  const [isPearClicked, setIsPearClicked] = useState(false);
  const [isRadiantClicked, setIsRadiantClicked] = useState(false);
  const [isPrincessClicked, setIsPrincessClicked] = useState(false);
  const [isAsscherClicked, setIsAsscherClicked] = useState(false);

  const [range, setRange] = useState([0, 0]);
  const [Caratrange, setCaratRange] = useState([0, 0]);
  const [Arearange, setAreaRange] = useState([0, 0]);
  const [Depthrange, setDepthrange] = useState([0, 0]);

  const [TotalPage, setTotalPage] = useState(1);

  //----------------------- Fetch API Filter ----------------------- //
  const [dataFilter, setDataFilter] = useState([]);

  const DiamondFilter = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/filter");
      setDataFilter(response.data.Data);

      setRange([
        response.data.Data.Price[0].MinAmount,
        response.data.Data.Price[0].MaxAmount,
      ]);

      setCaratRange([
        response.data.Data.Carat[0].MinCarat,
        response.data.Data.Carat[0].MaxCarat,
      ]);

      setAreaRange([
        parseInt(response.data.Data.TableArea[0].MinTableArea),
        parseInt(response.data.Data.TableArea[0].MaxTableArea),
      ]);

      setDepthrange([
        response.data.Data.TableDepth[0].MinTableDepth,
        response.data.Data.TableDepth[0].MaxTableDepth,
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    DiamondFilter();
  }, []);
  //----------------------- Fetch API Filter ----------------------- //

  //----------------------- Fetch API DiamondTable Data ----------------------- //
  const [activePage, setPage] = useState(1);

  const DiamondTableData = async () => {
    let url = `http://localhost:8000/api/diamonds?Page=${activePage}`;

    if (clarityFilters?.length > 0) {
      url += "&Clarity=" + clarityFilters;
    }

    if (colorFilters?.length > 0) {
      url += "&Color=" + colorFilters;
    }

    if (cutFilters?.length > 0) {
      url += "&Cut=" + cutFilters;
    }

    if (fluorescenceFilters?.length > 0) {
      url += "&Flour=" + fluorescenceFilters;
    }

    if (labFilters?.length > 0) {
      url += "&Lab=" + labFilters;
    }

    if (symFilters?.length > 0) {
      url += "&Sym=" + symFilters;
    }

    if (polishFilters?.length > 0) {
      url += "&Polish=" + polishFilters;
    }

    // if (
    //   range[0] > dataFilter?.Price[0]?.MinAmount ||
    //   range[1] < dataFilter?.Price[0]?.MaxAmount
    // ) {
    //   url += `&Amount=${range[0]},${range[1]}`;
    // }

    if (
      (dataFilter?.Price?.[0]?.MinAmount !== undefined &&
        range[0] > dataFilter.Price[0].MinAmount) ||
      (dataFilter?.Price?.[0]?.MaxAmount !== undefined &&
        range[1] < dataFilter.Price[0].MaxAmount)
    ) {
      url += `&Amount=${range[0]},${range[1]}`;
    }

    // if (
    //   Caratrange[0] > dataFilter?.Carat[0]?.MinCarat ||
    //   Caratrange[1] < dataFilter?.Carat[0]?.MaxCarat
    // ) {
    //   url += `&Carat=${Caratrange[0]},${Caratrange[1]}`;
    // }

    if (
      (dataFilter?.Carat?.[0]?.MinCarat !== undefined &&
        Caratrange[0] > dataFilter.Carat[0].MinCarat) ||
      (dataFilter?.Carat?.[0]?.MaxCarat !== undefined &&
        Caratrange[1] < dataFilter.Carat[0].MaxCarat)
    ) {
      url += `&Carat=${Caratrange[0]},${Caratrange[1]}`;
    }

    // if (
    //   Arearange[0] > dataFilter?.TableArea[0]?.MinTableArea ||
    //   Arearange[1] < dataFilter?.TableArea[0]?.MaxTableArea
    // ) {
    //   url += `&TableArea=${Arearange[0]},${Arearange[1]}`;
    // }

    if (
      (dataFilter?.TableArea?.[0]?.MinTableArea !== undefined &&
        Arearange[0] > dataFilter.TableArea[0].MinTableArea) ||
      (dataFilter?.TableArea?.[0]?.MaxTableArea !== undefined &&
        Arearange[1] < dataFilter.TableArea[0].MaxTableArea)
    ) {
      url += `&TableArea=${Arearange[0]},${Arearange[1]}`;
    }

    // if (
    //   parseFloat(Depthrange[0]) >
    //     parseFloat(dataFilter?.TableDepth[0]?.MinTableDepth) ||
    //   parseFloat(Depthrange[1]) <
    //     parseFloat(dataFilter?.TableDepth[0]?.MaxTableDepth)
    // ) {
    //   const minDepth = parseFloat(Depthrange[0]).toFixed(2);
    //   const maxDepth = parseFloat(Depthrange[1]).toFixed(2);
    //   url += `&TableDepth=${minDepth},${maxDepth}`;
    // }

    if (
      dataFilter &&
      dataFilter.TableDepth &&
      dataFilter.TableDepth[0] &&
      parseFloat(Depthrange[0]) >
        parseFloat(dataFilter.TableDepth[0].MinTableDepth) &&
      parseFloat(Depthrange[1]) <
        parseFloat(dataFilter.TableDepth[0].MaxTableDepth)
    ) {
      const minDepth = parseFloat(Depthrange[0]).toFixed(2);
      const maxDepth = parseFloat(Depthrange[1]).toFixed(2);
      url += `&TableDepth=${minDepth},${maxDepth}`;
    }
    try {
      const response = await axios.get(url);
      // For Pagination
      if (activePage == 1) {
        setTotalPage(response.data.total);
      }
      // For Pagination
      setDiamondTable(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    DiamondTableData(activePage);
  }, [
    activePage,
    clarityFilters,
    colorFilters,
    cutFilters,
    fluorescenceFilters,
    labFilters,
    symFilters,
    polishFilters,
  ]);

  //----------------------- Fetch API DiamondTable Data ----------------------- //

  //-------------Function to handle filter-------------//
  const toggleClarityFilter = (clarity) => {
    console.log("clarity", clarity);
    if (clarityFilters.includes(clarity)) {
      setClarityFilters(clarityFilters.filter((c) => c !== clarity));
    } else {
      setClarityFilters([...clarityFilters, clarity]);
    }
    setPage(1);
  };

  const toggleShapeFilter = (shape) => {
    if (shape === "Round") {
      setIsClicked(!isClicked);
    } else if (shape === "Cushion") {
      setIsCushionClicked(!isCushionClicked);
    } else if (shape === "Emerald") {
      setIsEmeraldClicked(!isEmeraldClicked);
    } else if (shape === "Heart") {
      setIsHeartClicked(!isHeartClicked);
    } else if (shape === "Marquise") {
      setIsMarquiseClicked(!isMarquiseClicked);
    } else if (shape === "Oval") {
      setIsOvalClicked(!isOvalClicked);
    } else if (shape === "Pear") {
      setIsPearClicked(!isPearClicked);
    } else if (shape === "Radiant") {
      setIsRadiantClicked(!isRadiantClicked);
    } else if (shape === "Princess") {
      setIsPrincessClicked(!isPrincessClicked);
    } else if (shape === "Asscher") {
      setIsAsscherClicked(!isAsscherClicked);
    }

    if (ShapeFilters.includes(shape)) {
      setShapeFilters(ShapeFilters.filter((c) => c !== shape));
    } else {
      setShapeFilters([...ShapeFilters, shape]);
    }
  };

  const toggleColorFilter = (color) => {
    console.log("color", color);
    if (colorFilters.includes(color)) {
      setColorFilters(colorFilters.filter((c) => c !== color));
    } else {
      setColorFilters([...colorFilters, color]);
    }
    setPage(1);
  };

  const toggleCutFilter = (cut) => {
    if (cutFilters.includes(cut)) {
      setCutFilters(cutFilters.filter((c) => c !== cut));
    } else {
      setCutFilters([...cutFilters, cut]);
    }
    setPage(1);
  };

  const toggleFluorescenceFilter = (fluor) => {
    if (fluorescenceFilters.includes(fluor)) {
      setFluorescenceFilters(fluorescenceFilters.filter((c) => c !== fluor));
    } else {
      setFluorescenceFilters([...fluorescenceFilters, fluor]);
    }
    setPage(1);
  };

  const toggleLabFilter = (Lab) => {
    if (labFilters.includes(Lab)) {
      setLabFilters(labFilters.filter((c) => c !== Lab));
    } else {
      setLabFilters([...labFilters, Lab]);
    }
    setPage(1);
  };

  const toggleSymFilter = (Sym) => {
    if (symFilters.includes(Sym)) {
      setSymFilters(symFilters.filter((c) => c !== Sym));
    } else {
      setSymFilters([...symFilters, Sym]);
    }
    setPage(1);
  };

  const togglePolishFilter = (Polish) => {
    if (polishFilters.includes(Polish)) {
      setPolishFilters(polishFilters.filter((c) => c !== Polish));
    } else {
      setPolishFilters([...polishFilters, Polish]);
    }
    setPage(1);
  };
  //-------------Function to handle filter-------------//

  //-------------Function to reset filter-------------//
  // const resetFilters = () => {
  //   setClarityFilters([]);
  //   setColorFilters([]);
  //   setCutFilters([]);
  //   setFluorescenceFilters([]);
  //   setLabFilters([]);
  //   setSymFilters([]);
  //   setPolishFilters([]);
  //   setShapeFilters([]);
  //   setRange([7056, 999999.99]);
  //   setCaratRange([0.18, 3.75]);
  //   setAreaRange([54.0, 65.0]);
  //   setDepthrange([56.7, 71.5]);
  // };
  //-------------Function to reset filter-------------//

  // Columns
  const columns = [
    {
      name: "StockRef",
      selector: (row) => row.StockRef,
      sortable: true,
    },
    {
      name: "Lab",
      selector: (row) => row.LabName,
      sortable: true,
    },
    {
      name: "Shape",
      selector: (row) => row.ShapeName,
      sortable: true,
    },
    {
      name: "Size",
      selector: (row) => row.Carat,
      sortable: true,
    },
    {
      name: "Color",
      selector: (row) => row.ColorName,
      sortable: true,
    },
    {
      name: "Clarity",
      selector: (row) => row.ClarityName,
      sortable: true,
    },
    {
      name: "Cut",
      selector: (row) => row.CutName,
      sortable: true,
    },
    {
      name: "Fluorescence",
      selector: (row) => row.FluorescenceName,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.PricePerCt,
      sortable: true,
    },
    {
      name: "Discount %",
      selector: (row) => row.Discount,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.Amount,
      sortable: true,
    },
    {
      name: "Polish",
      selector: (row) => row.Polish,
      sortable: true,
    },
    {
      name: "Symmetry",
      selector: (row) => row.SymmetryName,
      sortable: true,
    },
    {
      name: "Table %",
      selector: (row) => row.TableArea,
      sortable: true,
    },
    {
      name: "Depth %",
      selector: (row) => row.TableDepth,
      sortable: true,
    },
    {
      name: "Measurement",
      selector: (row) => row.Measurement,
      sortable: true,
    },
  ];

  /*-------For ToolTip--------------*/
  const createTooltip = (txt) => (
    <Tooltip id="tooltip">
      <p>{txt}</p>
    </Tooltip>
  );
  /*-------For ToolTip--------------*/

  /*--------------------Price Range--------------------*/
  // const [range, setRange] = React.useState([200, 4999]);
  function handleChangesPrice(event, newValue) {
    setRange(newValue);
    setPage(1);
  }
  /*--------------------Price Range--------------------*/

  /*--------------------CARAT Range--------------------*/
  // const [Caratrange, setCaratRange] = React.useState([2, 20]);
  function handleChangesCarat(event, newValue) {
    setCaratRange(newValue);
    setPage(1);
  }
  /*--------------------CARAT Range--------------------*/

  /*--------------------Table % Range--------------------*/
  // const [Tablerange, setTableRange] = React.useState([2, 20]);
  function handleChangesTable(event, newValue) {
    setAreaRange(newValue);
    setPage(1);
  }
  /*--------------------Table % Range--------------------*/

  /*--------------------Depth Range--------------------*/
  // const [Depthrange, setDepthRange] = React.useState([2, 20]);
  function handleChangesDepth(event, newValue) {
    setDepthrange(newValue);
    setPage(1);
  }
  /*--------------------Depth Range--------------------*/

  /*-------------------- Loader --------------------*/
  if (loading) {
    return (
      <div>
        <BeatLoader
          color="#969a99"
          size={32}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "30vh",
          }}
        />
      </div>
    ); // Show a loading indicator while fetching data
  }
  /*-------------------- Loader --------------------*/

  return (
    <Fragment>
      <Header />

      {/*------------------- Diamond Slider Section---------------- */}
      <div style={{ paddingTop: "15px" }} className="DiamondListNavigation">
        <Breadcrumb>
          <Link to="/" className="breadcrumb-item navigationText ">
            Home
          </Link>
          <Link
            to="/productListPage"
            className="breadcrumb-item navigationText "
          >
            Diamond List
          </Link>
        </Breadcrumb>

        <div style={{ backgroundColor: "#f6f4f2" }}>
          <div
            style={{
              fontSize: "15px",
              lineHeight: "22px",
              letterSpacing: "0.2px",
              color: "2D2D2D",
              fontFamily: "poppins",
              fontWeight: "500",
              paddingTop: "12px",
              display: "block",
              width: "100%",
              textAlign: "right",
              backgroundColor: "#f6f4f2",
              padding: "15px",
              cursor: "pointer",
            }}
            onClick={() => setOpenMain(!openMain)}
            aria-controls="example-collapse-text"
            aria-expanded={openMain}
          >
            {openMain ? (
              <span>
                <i className="fa-solid fa-minus"></i>&nbsp;
                <span>LESS FILTERS</span>
              </span>
            ) : (
              <span>
                <i className="fa-solid fa-plus"></i>&nbsp;
                <span>SHOW FILTERS</span>
              </span>
            )}
          </div>
        </div>

        <div style={{ backgroundColor: "#f6f4f2" }}>
          <Collapse in={openMain}>
            <Container fluid>
              <Row>
                <Col lg={4}>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "22px",
                      letterSpacing: "0.2px",
                      fontFamily: "poppins",
                      fontWeight: "500",
                      marginLeft: "4px",
                    }}
                  >
                    SHAPE
                  </p>
                  <div className="ShapesDiv">
                    <OverlayTrigger
                      placement="top"
                      overlay={createTooltip("Round")}
                    >
                      <div
                        className={`Shapes ${isClicked ? "selected" : ""}`}
                        onClick={() => toggleShapeFilter("Round")}
                        style={{
                          backgroundColor: isClicked ? "black" : "transparent",
                        }}
                      >
                        <span bsStyle="default">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={`icon-outline ${
                                isClicked ? "selected" : ""
                              }`}
                              onClick={() => toggleShapeFilter("Round")}
                              style={{
                                backgroundColor: isClicked
                                  ? "white"
                                  : "transparent",
                              }}
                              width="30"
                              height="30"
                              viewBox="0 0 37 37"
                              fill={isClicked ? "#fff" : "#000"}
                              xmlns="http://www.w3.org/2000/svg"
                              d="M18.8.8A17.7 17.7 0 0 0 .8 18v.2A17.7 17.7 0 1 0 18.8.9Zm.6.8c4 .2 7.6 1.8 10.3 4.3l-6 .2zm-1.9 0L13.3 6l-6-.2c2.7-2.5 6.3-4 10.2-4.3zm1 .2 4.3 4.5L18.5 8l-4.3-1.7zm11.8 4.8-.2 6.3-4.3-1.8L24 7zm-23.7 0L13 7l-1.7 4.3L6.9 13zm16.6.4 1.5 3.7-5.2-2.1zm-9.5 0 3.7 1.6-5.2 2zm17.4.2c2.5 2.8 4 6.4 4.3 10.3l-4.5-4.2zm-25.2 0 .2 6.2-4.5 4.2c.2-4 1.8-7.6 4.3-10.3zM18.5 9l6.7 2.8 2.7 6.6-2.7 6.7-6.7 2.8-6.7-2.7L9 18.5l2.8-6.7zm7.7 3.2 3.7 1.5-1.5 3.7zm-15.5 0-2.1 5.2L7 13.8zm19.9 2 4.6 4.3-4.6 4.3-1.8-4.4zm-24.2 0L8 18.5l-1.7 4.3-4.6-4.3zm29 5.2c-.2 4-1.8 7.6-4.3 10.3l-.2-6zm-33.8 0 4.5 4.3-.2 6c-2.5-2.7-4-6.3-4.3-10.2zm26.8 0 1.5 3.8-3.7 1.5zm-19.8 0 2.1 5.3-3.6-1.5zM30 24l.3 6.3-6.4-.2 1.8-4.3zM7 24l4.3 1.8L13 30l-6.3.3zm17.8 2.2-1.5 3.7-3.6-1.5zm-12.5 0 5.2 2.2-3.6 1.5zm6.3 2.6 4.4 1.8-4.4 4.6-4.3-4.6zm5.2 2 6 .3c-2.7 2.5-6.3 4-10.2 4.3zm-10.3 0 4.2 4.6c-4-.2-7.6-1.8-10.3-4.3z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={createTooltip("Cushion")}
                    >
                      <div
                        className={`Shapes ${
                          isCushionClicked ? "selected" : ""
                        }`}
                        onClick={() => toggleShapeFilter("Cushion")}
                        style={{
                          backgroundColor: isCushionClicked
                            ? "black"
                            : "transparent",
                        }}
                      >
                        <span>
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={`icon-outline ${
                                isCushionClicked ? "selected" : ""
                              }`}
                              onClick={() => toggleShapeFilter("Cushion")}
                              style={{
                                backgroundColor: isCushionClicked
                                  ? "white"
                                  : "transparent",
                              }}
                              width="30"
                              height="30"
                              viewBox="0 0 37 37"
                              fill={isCushionClicked ? "#fff" : "#000"}
                              d="M18.5.7c-2 0-4.4.2-6.8.7-3.5.6-6.2 2-8 4.1-2 2.2-2.8 5.1-2.8 9v8c0 3.9.9 6.8 2.7 9 1.9 2.1 4.6 3.5 8.1 4.1 2.6.5 4.3.6 6.4.6h.4c2 0 4.4-.1 6.8-.6 3.5-.6 6.2-2 8-4.1 2-2.2 2.8-5.1 2.8-9v-8c0-3.9-.9-6.8-2.7-9a13.5 13.5 0 0 0-8.1-4.1 32 32 0 0 0-6.4-.7Zm1 1c1.8 0 3.3 0 5.6.5a14 14 0 0 1 6.2 2.6L23.5 6Zm-2 0-4 4.3-8-1C7 3.8 9 2.8 11.8 2.3c2-.4 3.8-.5 5.6-.6Zm1 0 4.3 4.7-4.3 4.5-4.3-4.5zm13.2 3.9L30 12.9l-4.3-1.6L24 6.7Zm.8.2c1.8 2 2.8 4.8 2.8 8.6v3.2L31 13.4v-.1h-.1zM5 5.8l8 1-1.8 4.5L7 13zm-.8.3 1.9 7.2-.1.2-4.4 4.2v-3.3c0-3.6 1-6.3 2.6-8.3zm19 1 1.5 4h-5.5zm-9.6 0 3.9 4h-5.4ZM12 12h13v13H12Zm13.8.2 4 1.5-4 4zm-14.6 0v5.5l-4-4Zm19.3 2 4.5 4.2-4.5 4.3-4.4-4.2zm-24 0 4.4 4.3-4.4 4.2L2 18.5zm28.8 5v3.6c0 3.6-1 6.1-2.6 8l-1.9-7v-.1l.1-.3zm-33.6 0L6 23.6v.2L4.5 31c-1.7-2-2.7-4.7-2.7-8.3Zm24.1.1 4 4-4 1.5zm-14.6.1v5.4l-4-1.5ZM30 24l1.8 7.2-7.9-1 1.7-4.5zM7 24l4.3 1.7 1.7 4.5-7.9 1zm5.2 1.8h5.5l-4 4zm7.2 0h5.4l-1.5 4zm-.9.3 4.3 4.5-4.3 4.6-4.3-4.6Zm5 4.8 8 1a13 13 0 0 1-5.4 2.7l-.5.1-.5.1-.5.1c-1.8.3-3.5.4-5.1.5zm-10 0 4 4.5a30.6 30.6 0 0 1-6.1-.7l-.5-.1A13 13 0 0 1 5.5 32Z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={createTooltip("Emerald")}
                    >
                      <div
                        className={`Shapes ${
                          isEmeraldClicked ? "selected" : ""
                        }`}
                        onClick={() => toggleShapeFilter("Emerald")}
                        style={{
                          backgroundColor: isEmeraldClicked
                            ? "black"
                            : "transparent",
                        }}
                      >
                        <span>
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={`icon-outline ${
                                isEmeraldClicked ? "selected" : ""
                              }`}
                              onClick={() => toggleShapeFilter("Emerald")}
                              style={{
                                backgroundColor: isEmeraldClicked
                                  ? "white"
                                  : "transparent",
                              }}
                              width="30"
                              height="30"
                              viewBox="0 0 37 37"
                              fill={isEmeraldClicked ? "#fff" : "#000"}
                              d="M9.4.5h-.2L9 .7 4.6 5.1v.1l-.1.1V32L9 36.4h.2v.1h18.7l.1-.1 4.5-4.5v-.1l.1-.1V5L28 .6h-.2V.4H9.3Zm.9.9h16.6L24 5H13Zm17.5.2 3.6 3.6-4.2 2.6L25 5.5Zm-18.5 0 2.9 4-2.4 2.3-4.2-2.5zM13 6h11.3l.9 1L22.4 9h-7.8L12 7Zm18.8 0v24.8l-4.1-2.5V8.6Zm-26.4.2 4.1 2.5v19.7l-4 2.5Zm20.4 1.4 1 1v19.8l-1 1-2.7-2.2V9.8Zm-14.4 0L14 9.8v17.4l-2.7 2.2-1-1V8.7ZM15 10H22v17H15zM14.5 28h8L25 30l-1 1H12.9l-1-1zM27.2 29l4.2 2.5-3.8 3.8-2.8-4zm-17.4.1 2.2 2.3-2.8 3.9-3.6-3.6Zm3 2.7H24l2.7 3.7H10.1Z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={createTooltip("Heart")}
                    >
                      <div
                        className={`Shapes ${isHeartClicked ? "selected" : ""}`}
                        onClick={() => toggleShapeFilter("Heart")}
                        style={{
                          backgroundColor: isHeartClicked
                            ? "black"
                            : "transparent",
                        }}
                      >
                        <span>
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={`icon-outline ${
                                isHeartClicked ? "selected" : ""
                              }`}
                              onClick={() => toggleShapeFilter("Heart")}
                              style={{
                                backgroundColor: isHeartClicked
                                  ? "white"
                                  : "transparent",
                              }}
                              width="30"
                              height="30"
                              viewBox="0 0 37 37"
                              fill={isHeartClicked ? "#fff" : "#000"}
                              d="M10 1.5c-1 0-2 .1-3 .4a8.4 8.4 0 0 0-6 5.3C0 9.9 0 13.5 1 17a23 23 0 0 0 5 9c.9 1.2 2 2.3 3.2 3.4v.2l.3.3h.2a42.1 42.1 0 0 0 7.3 5h.2l.4.2.4.2.4.2h.2l.4-.2.4-.2.4-.2h.2a37.4 37.4 0 0 0 7.3-5h.2l.3-.3v-.2l3.3-3.3A23 23 0 0 0 36 17c1-3.5 1-7.1 0-9.8a8.4 8.4 0 0 0-6-5.3 11 11 0 0 0-8 .7 32.5 32.5 0 0 0-2.9 1.5l-.4.2h-.2l-.4-.2h-.2A46 46 0 0 0 13 1.9c-1-.3-2-.4-3-.4Zm-.1.8 2.3.3-3 3.9-3.5-3.3L7 2.7c1-.3 1.9-.4 2.8-.4Zm17 0 2.7.3h.3l.2.1 1.3.6-3.6 3.2-3-3.9 2.1-.3zm-14 .7 5 5.9-3 1-5-3Zm11.2 0 3.1 4-5.2 3-2.7-1zm-1.2.2-4.3 5.3-4.4-5.3a31.7 31.7 0 0 1 3.4 1.6l.5.3.3.1h.2L19 5l.5-.2a45.4 45.4 0 0 1 2.9-1.4l.5-.2zm-18 .4L8.6 7 1.3 9.5c0-.7.2-1.4.5-2 .7-1.8 1.8-3 3.1-3.9Zm27.2 0c1.3.9 2.4 2 3.1 3.9l.1.2.5 1.8L28.5 7Zm-23.3 4v4.6L6.2 15l-4.7-4.6Zm19.4 0 7.3 2.7-4.7 4.5-2.6-2.6zm-18.6.2 4.3 2.4-4.3 1.6zm17.9 0-.1 4-4.4-1.5zm-9 1.7 2.6 1-2.5 1.4-2.8-1.5zm-3.7 1.2 3.7 2h.2l3.3-1.9 5.3 1.8-1 5.7-3.8 5-4 3-3.8-3-4-4.8-1-6ZM1 11l4.6 4.5-2.6 4.7a18 18 0 0 1-2-9.3ZM36 11a18 18 0 0 1-.7 5.8l-.1.3c-.3 1.1-.7 2.2-1.2 3.1l-2.6-4.7zM28 13l2.3 2.3-3 2.4zm-19 .1.7 4.5-2.9-2.3zM6.3 16l3.6 2.8-1 3.2-5.1-1.4zm24.4 0 2.5 4.6-5.1 1.4-.9-3.2zm-4.1 3.3.7 2.9-3.6.8zm-16.1.2 2.9 3.5-3.7-.8zm-6.8 2 5.1 1.3.3 5.4-2.6-2.6c-1.1-1.3-2-2.7-2.8-4.2Zm29.6 0a22 22 0 0 1-5.4 6.7l.3-5.4zm-6 1.5-.3 6-5-.5 1.1-4.6zM9.7 23l4.5 1 .9 4.5-5 .5zm12.5 1.5-.8 3.7-2-1.5zm-7.1 0 3 2.2-2.3 1.5zm3.5 2.7L21 29l-2.5 5.2L16 29zm-3.3 2 2.4 5h-.2a36.7 36.7 0 0 1-6.5-4.5zm6.6 0 4.3.5a41.2 41.2 0 0 1-6.5 4.4l-.2.1z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={createTooltip("Marquise")}
                    >
                      <div
                        className={`Shapes ${
                          isMarquiseClicked ? "selected" : ""
                        }`}
                        onClick={() => toggleShapeFilter("Marquise")}
                        style={{
                          backgroundColor: isMarquiseClicked
                            ? "black"
                            : "transparent",
                        }}
                      >
                        <span>
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={`icon-outline ${
                                isMarquiseClicked ? "selected" : ""
                              }`}
                              onClick={() => toggleShapeFilter("Marquise")}
                              style={{
                                backgroundColor: isMarquiseClicked
                                  ? "white"
                                  : "transparent",
                              }}
                              width="30"
                              height="30"
                              viewBox="0 0 37 37"
                              fill={isMarquiseClicked ? "#fff" : "#000"}
                              d="M18.5.8h-.7C12 5.4 7.7 12.4 7.7 18.5c0 2.8.8 5.6 2.3 8.3v.2a27.8 27.8 0 0 0 6.1 7.5l1.2 1 .3.4.2.1.2.2V36h.3l.3.2V36h.6v-.1l.2-.1.2-.2.2-.2.3-.2.3-.3.4-.3.3-.4.3-.2.2-.2.3-.3c1.7-1.7 3.3-3.7 4.6-5.8l.2-.4.1-.2c1.6-2.8 2.5-5.7 2.5-8.7 0-4.3-2-8.5-5-12.4a34.8 34.8 0 0 0-4.6-4.7h-.1l-.2-.3-.2-.1h-.7zm.6 1V2a30.5 30.5 0 0 1 7 8.2l-3.2 3.3zm-1.4.3L14 13.5 11 10.2c1.6-3 4-5.8 6.8-8.1zm.8.3L21.9 13l-3-2.4h-.4L15 13.2zm8 8.4c1.1 2.3 1.8 4.6 2 7L23.4 14zm-16 .2 3 3.2-5 3.6c.2-2.2.8-4.6 2-6.8zm8.1.5 3.8 2.8 1.4 4.3-1.4 4.2-3.7 2.6-4.3-3-1.2-3.8 1.3-4.1zm4.9 3.6 4.7 3.5-4.7 3.4 1.1-3.3v-.2zm-10 .1-1.1 3.3v.2l1 3-4.6-3zm-5 4.3 5.2 3.4-3.1 3.2a16.9 16.9 0 0 1-2-6.6Zm19.9 0c-.2 2.2-.9 4.5-2 6.7l-3-3.1zM14 23.7l3.6 11a33 33 0 0 1-6.6-7.9Zm.8 0 3.8 2.5h.3l3-2.1-3.5 10.4zm8 0L26 27v.2h-.1v.1c-1.3 2.1-2.9 4-4.6 5.8l-.2.2-.4.3-.2.3-.4.3-.3.3-.3.2-.2.2-.2.2H19z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={createTooltip("Oval")}
                    >
                      <div
                        className={`Shapes ${isOvalClicked ? "selected" : ""}`}
                        onClick={() => toggleShapeFilter("Oval")}
                        style={{
                          backgroundColor: isOvalClicked
                            ? "black"
                            : "transparent",
                        }}
                      >
                        <span>
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={`icon-outline ${
                                isOvalClicked ? "selected" : ""
                              }`}
                              onClick={() => toggleShapeFilter("Oval")}
                              style={{
                                backgroundColor: isOvalClicked
                                  ? "white"
                                  : "transparent",
                              }}
                              width="30"
                              height="30"
                              viewBox="0 0 37 37"
                              fill={isOvalClicked ? "#fff" : "#000"}
                              d="M18.6.5c-3.5-.1-6.7 1.8-9 5A21.6 22 0 0 0 5.9 18v.3A22 22.4 0 0 0 9.4 31c2.2 3.4 5.3 5.5 8.9 5.5 3.5.1 6.7-1.8 9-5s3.7-7.7 3.8-12.7c0-4.9-1.3-9.5-3.5-12.8-2.3-3.3-5.4-5.5-9-5.5zm-1 .8-3 4.2h-3.9c1.9-2.4 4.3-3.9 6.9-4zm1.6 0c2.6.3 5 1.8 6.9 4.2h-4zm-.8.2 3 4.3-3 1.7-3-1.7zm-4 4.8-1.3 4.4-2.8 1.7V6.3Zm8 0h4.1v6.1l-2.8-1.7zm-7.3.2L17.6 8l-3.5 2zm6.6 0 1 3.6-3.5-2zm-12.2 1v5.4l-2.8 4a21 21.4 0 0 1 2.8-9.5zm17.8 0a21 21.4 0 0 1 2.8 9.5l-2.8-4zm-8.9 1 4.6 2.8 2 7.1-2 7.3-4.6 2.8-4.6-2.8-2-7.3 2-7.1zm-5.6 3.4-1.4 5-1-3.6zm11.1 0 2.4 1.4-1 3.7zm-14.2 2 1.3 4.4-1.3 4.5-3-4.5zm17.4 0 3 4.4-3 4.5-1.3-4.5zm3 5.8a21 21 0 0 1-2.8 9.8v-5.7zm-23.4 0 2.8 4v5.8a20.3 20.3 0 0 1-2.8-9.7zm4.7.1 1.4 5.1-2.4-1.4zm14 0 1 3.7L24 25zm-15.1 4.6 2.8 1.7 1.3 4.5h-4.1zm16.2 0v6.1h-4l1.2-4.4zm-12.4 2.3 3.5 2-2.4 1.6zm8.6 0-1 3.6-2.5-1.4zm-4.3 2.6 3 1.8-3 4.3-3-4.3zm-7.7 2h4l2.9 4.3c-2.6-.3-5-1.8-6.9-4.2zm11.4 0h4a10.3 10.5 0 0 1-6.9 4.3z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={createTooltip("Pear")}
                    >
                      <div
                        className={`Shapes ${isPearClicked ? "selected" : ""}`}
                        onClick={() => toggleShapeFilter("Pear")}
                        style={{
                          backgroundColor: isPearClicked
                            ? "black"
                            : "transparent",
                        }}
                      >
                        <span>
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={`icon-outline ${
                                isPearClicked ? "selected" : ""
                              }`}
                              onClick={() => toggleShapeFilter("Pear")}
                              style={{
                                backgroundColor: isPearClicked
                                  ? "white"
                                  : "transparent",
                              }}
                              width="30"
                              height="30"
                              viewBox="0 0 37 37"
                              fill={isPearClicked ? "#fff" : "#000"}
                              d="M18 .7v.4l-.5.5-.4.4-.3.4a41.8 41.8 0 0 0-4.4 5.5l-.2.2v.1l-.3.5a37.8 37.8 0 0 0-3.6 7v.1l-.4.8C7 19.3 6.5 22 6.5 24.5v2.2l.1.2v.3l.1.2c1.2 5.1 6.1 8.9 11.8 8.9 5.7 0 10.6-3.8 11.8-8.9V26.8c.2-.4.2-1 .2-1.4V24.5c0-2.7-.6-5.5-1.6-8.3l-.1-.4-.3-.5c-.9-2.4-2.1-4.7-3.6-7l-.4-.6a46.6 46.6 0 0 0-4-5.1l-.4-.4-.2-.2-.4-.4-.3-.3-.1-.1L19 1h-.1V.7h-.2zm0 1.5v8.7l-4.7-3a45.7 45.7 0 0 1 3.9-4.8l.3-.4c.1 0 .2 0 .2-.2l.3-.3zm.9 0 .2.2.4.3.3.4.4.5c1.2 1.2 2.3 2.7 3.4 4.3L19 11zm5.4 6.7.2.3a37 37 0 0 1 3.4 6.7l-5.4-.6zM12.7 9l1.8 6.4-5.4.6.1-.3c.8-2.2 2-4.3 3.3-6.4zm.8 0 4.4 2.8-2.7 3.1zm10 0-1.7 6-2.7-3.2zM18 12.8v16.9L15.3 28 13.5 24l2-8zm.8 0 2.7 3.1 1.9 8.1-1.8 4.2-2.8 1.5zm-4.4 3.4L13 23l-3.7-6.2zm8 0 5.3.6-3.7 6.2zm5.9 1.2a25 25 0 0 1 1.3 7.6V26l-5.2-2.2zm-19.8 0 4 6.5L7.2 26v-1.5c0-2.3.5-4.7 1.3-7.1Zm4.3 7.2 1.4 3.3-6-1.3zm11.2 0 4.6 2-6 1.3zm5.4 2.6v.2c-.5 1.9-1.5 3.6-3 5L23 28.5zm-22 0 6.6 1.5-3.7 3.6a10 10 0 0 1-2.9-5ZM15 29l2.4 1.2L12 32zm7 0 3 3-5.4-1.8zm-4 1.9v4.6c-2.5-.1-4.8-1-6.7-2.5zm.9 0 6.8 2.1a11.6 11.6 0 0 1-6.8 2.5zm7.2 1.6.1.2H26zm-15.2 0v.1h-.1z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={createTooltip("Radiant")}
                    >
                      <div
                        className={`Shapes ${
                          isRadiantClicked ? "selected" : ""
                        }`}
                        onClick={() => toggleShapeFilter("Radiant")}
                        style={{
                          backgroundColor: isRadiantClicked
                            ? "black"
                            : "transparent",
                        }}
                      >
                        <span>
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={`icon-outline ${
                                isRadiantClicked ? "selected" : ""
                              }`}
                              onClick={() => toggleShapeFilter("Radiant")}
                              style={{
                                backgroundColor: isRadiantClicked
                                  ? "white"
                                  : "transparent",
                              }}
                              width="30"
                              height="30"
                              viewBox="0 0 37 37"
                              fill={isRadiantClicked ? "#fff" : "#000"}
                              d="M9.4.5H9L4.5 5.3V32L9 36.4l.2.1h18.7l4.6-4.7V5L28 .6l-.2-.1zm.8.9H27l-2 2.8H12.2Zm17.6.2 3.6 3.6-3.2 2-2.6-2.7Zm-18.4 0 2.1 3-2.7 2.6-3.2-1.8ZM13.9 5h9.4l-4.7 2.4zm-1.3.3 4.5 2.2-4 .4zm12 0L24 8l-4-.4zm-12.8.2.4 2.3-2.4-.3Zm13.6 0 1.9 1.9-2.3.4zm6.3.5v24.8L28.6 29V7.9Zm-26.4.2L8.4 8v21.1l-3 1.9Zm22.2 2L25.2 16 25 8.7Zm-8.9 0 5.4.5.5 9.8-1 9.5-5 .7-5-.7-1-9.5.6-9.8zm-9.1 0 2.8.5-.5 7.4Zm18.2 2.4v15.7l-2.3-7.8Zm-18.4.1 2.3 7.8-2.3 7.9Zm15.8 10 2.4 8-3.1-.6zm-13.2 0 .7 7.4-3.1.7zm1.5 8.2 3.7.5-4.5 2.2zm10.2 0 .7 2.7-4.4-2.2zm1 0 2.7.6-2.1 2zm-12.1 0-.8 2.7-2-2zm6 .7 4.6 2.4h-9.3zm9.7.2 3.2 1.8-3.8 3.8-2.1-3zm-19.4 0 2.6 2.7-2.2 3-3.6-3.7zm3.4 3h12.5l2 2.8H10.2Z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={createTooltip("Princess")}
                    >
                      <div
                        className={`Shapes ${
                          isPrincessClicked ? "selected" : ""
                        }`}
                        onClick={() => toggleShapeFilter("Princess")}
                        style={{
                          backgroundColor: isPrincessClicked
                            ? "black"
                            : "transparent",
                        }}
                      >
                        <span>
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={`icon-outline ${
                                isPrincessClicked ? "selected" : ""
                              }`}
                              onClick={() => toggleShapeFilter("Princess")}
                              style={{
                                backgroundColor: isPrincessClicked
                                  ? "white"
                                  : "transparent",
                              }}
                              width="30"
                              height="30"
                              viewBox="0 0 37 37"
                              fill={isPrincessClicked ? "#fff" : "#000"}
                              d="M1.7 1.3c-.3 0-.4.1-.4.4v33.6c0 .3.1.4.4.4h33.5c.3 0 .5-.1.5-.4V1.7c0-.3-.2-.4-.5-.4Zm1 .8h31.5L30.4 6H6.5Zm-.6.6L6 6.6v23.8l-4 3.9zm32.7 0v31.6L31 30.4V6.6ZM7.3 6.9h22.3L25.2 11H11.7Zm-.5.5 4.3 4.3v13.6l-4.3 4.3zm23.3 0v22.2l-4.3-4.3V11.7Zm-18.2 4.5H25v13.2H12Zm-.2 14h13.5l4.4 4.2H7.3ZM6.5 31h23.9l3.8 3.9H2.7Z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={createTooltip("Asscher")}
                    >
                      <div
                        className={`Shapes ${
                          isAsscherClicked ? "selected" : ""
                        }`}
                        onClick={() => toggleShapeFilter("Asscher")}
                        style={{
                          backgroundColor: isAsscherClicked
                            ? "black"
                            : "transparent",
                        }}
                      >
                        <span>
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={`icon-outline ${
                                isAsscherClicked ? "selected" : ""
                              }`}
                              onClick={() => toggleShapeFilter("Asscher")}
                              style={{
                                backgroundColor: isAsscherClicked
                                  ? "white"
                                  : "transparent",
                              }}
                              width="30"
                              height="30"
                              viewBox="0 0 37 37"
                              fill={isAsscherClicked ? "#fff" : "#000"}
                              d="M5.7 1.2 1.3 5.7l-.1.2v25.6l4.3 4.3h25.8l4.4-4.5.1-.2V5.5l-4.4-4.3H5.9Zm1.2.9h23.4L28 5h-19Zm-1 .2 2.3 3L5.5 8 2.3 6Zm25.3 0 3.5 3.4L31.5 8 29 5.3ZM9.7 5.9h17.8l-2.3 3H11.9Zm18.7.2 2.2 2.3-3.2 2.3L26 9.2Zm-19.7 0L11 9.3l-1.5 1.4-3.2-2.1Zm26.2.6v23.5l-3.3-2.3V9Zm-32.8.1 3.3 2.3v19L2 30.3Zm28.6 2.7v17.9l-2.8-2V11.5Zm-24.4.1 2.8 2v13.9l-2.8 1.9zm5.5.2h13.5l1.6 1.7v13.9l-1.7 1.8H11.7l-1.6-1.7V11.6Zm15.6 16.4 3.3 2.2-2.4 2.5-2.3-3.2zm-17.9 0 1.4 1.5-2.3 3.2-2.2-2.4Zm2.3 2h13.3l2.2 2.8H9.5Zm19.7.8 3.2 2-3.6 3.7-2.3-3zm-26 0L8 31.8l-2.3 3-3.4-3.4ZM9 32H28l2.1 3H6.7Z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </OverlayTrigger>
                  </div>
                </Col>

                <Col lg={4}>
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: "22px",
                        letterSpacing: "0.2px",
                        fontFamily: "poppins",
                        fontWeight: "500",
                        marginLeft: "4px",
                      }}
                    >
                      CLARITY
                    </p>

                    <div className="horizontal-container">
                      {dataFilter?.Clarity.map((clarity) => (
                        <OverlayTrigger
                          key={clarity.Id}
                          placement="top"
                          overlay={createTooltip(clarity.Name)}
                        >
                          <div key={clarity.Id}>
                            <div
                              className={`ClarityShapes ${
                                clarityFilters.includes(clarity.Id)
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() => toggleClarityFilter(clarity.Id)}
                            >
                              <span
                                className={`ClarityText ${
                                  clarityFilters.includes(clarity.Id)
                                    ? "selected"
                                    : ""
                                }`}
                              >
                                {clarity.Name}
                              </span>
                            </div>
                          </div>
                        </OverlayTrigger>
                      ))}
                    </div>
                  </div>
                </Col>

                <Col lg={4}>
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: "22px",
                        letterSpacing: "0.2px",
                        fontFamily: "poppins",
                        fontWeight: "500",
                        marginLeft: "4px",
                      }}
                    >
                      COLOR
                    </p>

                    <div className="horizontal-container">
                      {dataFilter?.Color.map((color) => (
                        <OverlayTrigger
                          key={color.Id}
                          placement="top"
                          overlay={createTooltip(color.Name)}
                        >
                          <div key={color.Id}>
                            <div
                              className={`ClarityShapes ${
                                colorFilters.includes(color.Id)
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() => toggleColorFilter(color.Id)}
                            >
                              <span
                                className={`ClarityText ${
                                  colorFilters.includes(color.Id)
                                    ? "selected"
                                    : ""
                                }`}
                              >
                                {color.Name}
                              </span>
                            </div>
                          </div>
                        </OverlayTrigger>
                      ))}
                    </div>
                  </div>
                </Col>

                <Col lg={4}>
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: "22px",
                        letterSpacing: "0.2px",
                        fontFamily: "poppins",
                        fontWeight: "500",
                        marginLeft: "4px",
                        marginTop: "25px",
                      }}
                    >
                      CUT
                    </p>

                    <div className="horizontal-container">
                      {dataFilter?.Cut.map((cut) => (
                        <OverlayTrigger
                          key={cut.Id}
                          placement="top"
                          overlay={createTooltip(cut.Name)}
                        >
                          <div key={cut.Id}>
                            <div
                              className={`ClarityShapes ${
                                cutFilters.includes(cut.Id) ? "selected" : ""
                              }`}
                              onClick={() => toggleCutFilter(cut.Id)}
                            >
                              <span
                                className={`ClarityText ${
                                  cutFilters.includes(cut.Id) ? "selected" : ""
                                }`}
                              >
                                {cut.Name}
                              </span>
                            </div>
                          </div>
                        </OverlayTrigger>
                      ))}
                    </div>
                  </div>
                </Col>

                <Col lg={4}>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "22px",
                      letterSpacing: "0.2px",
                      fontFamily: "poppins",
                      fontWeight: "500",
                      marginLeft: "4px",
                      marginTop: "25px",
                    }}
                  >
                    PRICE
                  </p>

                  <div className="OffcanvasWidth11">
                    {dataFilter?.Price[0]?.MinAmount && (
                      <Slider
                        value={range}
                        onChange={handleChangesPrice}
                        onChangeCommitted={() => DiamondTableData()}
                        valueLabelDisplay="auto"
                        min={dataFilter.Price[0].MinAmount}
                        max={dataFilter.Price[0].MaxAmount}
                      />
                    )}

                    <div className="priceBoxMinDropdown">
                      <div className="priceBoxFont">${range[0]}</div>
                    </div>
                    <div>
                      <div className="priceBoxMaxDropdown">
                        <div className="priceBoxFont">${range[1]}</div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg={4}>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "22px",
                      letterSpacing: "0.2px",
                      fontFamily: "poppins",
                      fontWeight: "500",
                      marginLeft: "4px",
                      marginTop: "25px",
                    }}
                  >
                    CARAT
                  </p>

                  <div className="OffcanvasWidth11">
                    {dataFilter?.Carat[0]?.MinCarat && (
                      <Slider
                        value={Caratrange}
                        onChange={handleChangesCarat}
                        onChangeCommitted={() => DiamondTableData()}
                        valueLabelDisplay="auto"
                        min={dataFilter.Carat[0].MinCarat}
                        max={dataFilter.Carat[0].MaxCarat}
                      />
                    )}
                    <div className="priceBoxMinDropdown">
                      <div className="priceBoxFont">{Caratrange[0]}</div>
                    </div>
                    <div>
                      <div className="priceBoxMaxDropdown">
                        <div className="priceBoxFont">{Caratrange[1]}</div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              <Collapse in={open}>
                <Row>
                  <p className="AdvanceSearch">ADVANCE SEARCH</p>
                  <Col lg={4}>
                    <div>
                      <p
                        style={{
                          fontSize: "15px",
                          lineHeight: "22px",
                          letterSpacing: "0.2px",
                          fontFamily: "poppins",
                          fontWeight: "500",
                          marginLeft: "4px",
                        }}
                      >
                        FLUORESCENCE
                      </p>

                      <div className="horizontal-container">
                        {dataFilter?.Flour.map((flour) => (
                          <OverlayTrigger
                            key={flour.Id}
                            placement="top"
                            overlay={createTooltip(flour.Name)}
                          >
                            <div key={flour.Id}>
                              <div
                                className={`FluorescenceShapes ${
                                  fluorescenceFilters.includes(flour.Id)
                                    ? "selected"
                                    : ""
                                }`}
                                onClick={() =>
                                  toggleFluorescenceFilter(flour.Id)
                                }
                              >
                                <span
                                  className={`FluorescenceText ${
                                    fluorescenceFilters.includes(flour.Id)
                                      ? "selected"
                                      : ""
                                  }`}
                                >
                                  {flour.Name}
                                </span>
                              </div>
                            </div>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </div>
                  </Col>

                  <Col lg={4}>
                    <div>
                      <p
                        style={{
                          fontSize: "15px",
                          lineHeight: "22px",
                          letterSpacing: "0.2px",
                          fontFamily: "poppins",
                          fontWeight: "500",
                          marginLeft: "4px",
                        }}
                      >
                        LAB
                      </p>

                      <div className="horizontal-container">
                        {dataFilter?.Lab.map((lab) => (
                          <OverlayTrigger
                            key={lab.Id}
                            placement="top"
                            overlay={createTooltip(lab.Name)}
                          >
                            <div key={lab.Id}>
                              <div
                                className={`FluorescenceShapes ${
                                  labFilters.includes(lab.Id) ? "selected" : ""
                                }`}
                                onClick={() => toggleLabFilter(lab.Id)}
                              >
                                <span
                                  className={`FluorescenceText ${
                                    labFilters.includes(lab.Id)
                                      ? "selected"
                                      : ""
                                  }`}
                                >
                                  {lab.Name}
                                </span>
                              </div>
                            </div>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </div>
                  </Col>

                  <Col lg={4}>
                    <div>
                      <p
                        style={{
                          fontSize: "15px",
                          lineHeight: "22px",
                          letterSpacing: "0.2px",
                          fontFamily: "poppins",
                          fontWeight: "500",
                          marginLeft: "4px",
                        }}
                      >
                        SYMMETRY
                      </p>

                      <div className="horizontal-container">
                        {dataFilter?.Sym.map((sym) => (
                          <OverlayTrigger
                            key={sym.Id}
                            placement="top"
                            overlay={createTooltip(sym.Name)}
                          >
                            <div key={sym.Id}>
                              <div
                                className={`FluorescenceShapes ${
                                  symFilters.includes(sym.Id) ? "selected" : ""
                                }`}
                                onClick={() => toggleSymFilter(sym.Id)}
                              >
                                <span
                                  className={`FluorescenceText ${
                                    symFilters.includes(sym.Id)
                                      ? "selected"
                                      : ""
                                  }`}
                                >
                                  {sym.Name}
                                </span>
                              </div>
                            </div>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </div>
                  </Col>

                  <Col lg={4}>
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: "22px",
                        letterSpacing: "0.2px",
                        fontFamily: "poppins",
                        fontWeight: "500",
                        marginLeft: "4px",
                        marginTop: "30px",
                      }}
                    >
                      POLISH
                    </p>

                    <div className="horizontal-container">
                      {dataFilter?.Polish.map((polish) => (
                        <OverlayTrigger
                          key={polish.Id}
                          placement="top"
                          overlay={createTooltip(polish.Name)}
                        >
                          <div key={polish.Id}>
                            <div
                              className={`FluorescenceShapes ${
                                polishFilters.includes(polish.Id)
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() => togglePolishFilter(polish.Id)}
                            >
                              <span
                                className={`FluorescenceText ${
                                  polishFilters.includes(polish.Id)
                                    ? "selected"
                                    : ""
                                }`}
                              >
                                {polish.Name}
                              </span>
                            </div>
                          </div>
                        </OverlayTrigger>
                      ))}
                    </div>
                  </Col>

                  <Col lg={4}>
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: "22px",
                        letterSpacing: "0.2px",
                        fontFamily: "poppins",
                        fontWeight: "500",
                        marginLeft: "4px",
                        marginTop: "25px",
                      }}
                    >
                      TABLE %
                    </p>

                    <div className="OffcanvasWidth11">
                      {dataFilter?.TableArea[0]?.MinTableArea && (
                        <Slider
                          value={Arearange}
                          onChange={handleChangesTable}
                          onChangeCommitted={() => DiamondTableData()}
                          valueLabelDisplay="auto"
                          min={parseFloat(dataFilter.TableArea[0].MinTableArea)}
                          max={parseFloat(dataFilter.TableArea[0].MaxTableArea)}
                        />
                      )}

                      <div className="priceBoxMinDropdown">
                        <div className="priceBoxFont">
                          {Arearange[0] + ".00"}
                        </div>
                      </div>
                      <div>
                        <div className="priceBoxMaxDropdown">
                          <div className="priceBoxFont">
                            {Arearange[1] + ".00"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col lg={4}>
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: "22px",
                        letterSpacing: "0.2px",
                        fontFamily: "poppins",
                        fontWeight: "500",
                        marginLeft: "4px",
                        marginTop: "25px",
                      }}
                    >
                      DEPTH %
                    </p>

                    <div className="OffcanvasWidth11">
                      {dataFilter?.TableDepth[0]?.MinTableDepth && (
                        <Slider
                          value={Depthrange}
                          onChange={handleChangesDepth}
                          onChangeCommitted={() => DiamondTableData()}
                          valueLabelDisplay="auto"
                          min={parseFloat(
                            dataFilter.TableDepth[0].MinTableDepth
                          )}
                          max={parseFloat(
                            dataFilter.TableDepth[0].MaxTableDepth
                          )}
                        />
                      )}

                      <div className="priceBoxMinDropdown">
                        <div className="priceBoxFont">{Depthrange[0]}%</div>
                      </div>
                      <div>
                        <div className="priceBoxMaxDropdown">
                          <div className="priceBoxFont">{Depthrange[1]}%</div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Collapse>

              <div
                style={{
                  fontSize: "15px",
                  lineHeight: "22px",
                  letterSpacing: "0.2px",
                  color: "2D2D2D",
                  fontFamily: "poppins",
                  fontWeight: "500",
                  paddingTop: "12px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                {open ? (
                  <div
                    style={{
                      marginTop: "50px",
                      paddingBottom: "50px",
                    }}
                  >
                    <span className="FilterDiv">
                      <i className="fa-solid fa-minus"></i>
                      &nbsp;Less Filters
                      <span style={{ marginLeft: "30px" }}>
                        <i className="fa-solid fa-angle-up"></i>
                      </span>
                    </span>
                  </div>
                ) : (
                  <div
                    style={{
                      marginTop: "50px",
                      paddingBottom: "50px",
                    }}
                  >
                    <span className="FilterDiv">
                      <i className="fa-solid fa-plus"></i>&nbsp;More Filters
                      <span style={{ marginLeft: "30px" }}>
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </span>
                  </div>
                )}
              </div>
            </Container>
          </Collapse>
        </div>
      </div>
      {/*------------------- Diamond Slider Section---------------- */}

      {/*------------------- Diamond Table Section---------------- */}
      <div className="TableMargin">
        <DataTable
          columns={columns}
          data={diamondTable?.data}
          title="Diamonds Details"
          selectableRows
          dense
          fixedHeader
          fixedHeaderScrollHeight="400px"
          selectableRowsHighlight
          highlightOnHover
          // paginationRowsPerPageOptions={[10]}
          // pagination
        />
      </div>
      <br />
      <br />
      <br />
      <br />

      <Pagination value={activePage} onChange={setPage} total={TotalPage} />
      {/*------------------- Diamond Table Section---------------- */}

      <Footer_1 />
      <Footer_2 />
    </Fragment>
  );
}

export default DiamondList;
