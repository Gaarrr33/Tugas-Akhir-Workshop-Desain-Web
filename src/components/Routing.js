import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sewa from "../pages/Sewa";
import Jual from "../pages/Jual";
import Beli from "../pages/Beli";
function Routing() {
    return(
        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Sewa" element={<Sewa />} />
        <Route path="/Jual" element={<Jual />} />
        <Route path="/Beli" element={<Beli />} /> 
      </Routes>
    );
}
export default Routing;