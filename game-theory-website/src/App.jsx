import React from "react";
import { Route, Routes } from "react-router-dom";

import TitlePage from "./pages/TitlePage.jsx";
import BasicsPage from "./pages/BasicsPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route exact path = "/" element={<TitlePage/>}/>
      <Route exact path = "/basics" element={<BasicsPage/>}/>
    </Routes>
  )
}
