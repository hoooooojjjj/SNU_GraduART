import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import DepartmentDetail from "../pages/DepartmentDetail";
import NotFound from "../pages/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:id" element={<DepartmentDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
