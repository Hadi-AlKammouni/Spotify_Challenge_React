import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import ArtistSearch from "./pages/ArtistSearch/ArtistSearch";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="artist-search" element={<ArtistSearch/>}></Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App