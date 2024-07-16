import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import DepartmentDetail from "../pages/DepartmentDetail/DepartmentDetail";
import ArtWorkDetail from "../pages/ArtWorkDetail/ArtWorkDetail";
import NotFound from "../pages/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:department" element={<DepartmentDetail />}></Route>
        <Route path="/:department/:itemID" element={<ArtWorkDetail />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
