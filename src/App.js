import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

//Component
import Home from "./component/Home";
// import ProductListPage from "./component/ProductListPage";
import DiamondList from "./component/DiamondList";
import ProductDetailPage from "./component/ProductDetailPage";
import StartWithSetting from "./component/StartWithSetting";

function App() {
  return (
    <Fragment>
      <MantineProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diamondList" element={<DiamondList />} />
            <Route path="/productDetailPage" element={<ProductDetailPage />} />
            <Route path="/startWithSetting" element={<StartWithSetting />} />
          </Routes>
        </Router>
      </MantineProvider>
    </Fragment>
  );
}

export default App;

// <Route path="/productListPage/*" element={<ProductListPage />} />
