import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import DepartmentDetail from "../pages/DepartmentDetail/DepartmentDetail";
import ArtWorkDetail from "../pages/ArtWorkDetail/ArtWorkDetail";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login/Login";
import Cart from "../pages/Cart/Cart";
import Purchased from "../pages/Purchased/Purchased.jsx";
import Refund from "../pages/Refund/Refund.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:department" element={<DepartmentDetail />}></Route>
        <Route path="/:department/:itemID" element={<ArtWorkDetail />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/purchased" element={<Purchased />}></Route>
        <Route path="/refund" element={<Refund />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
