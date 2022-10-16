import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./pages/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App