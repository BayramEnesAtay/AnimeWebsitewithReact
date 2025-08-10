import React, { useState } from "react";
import SearchBar from "./SearchBar";
import API from "./API.jsx"
import Cardrow from "./Cardrow.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoreInfopage from "./MoreInfopage.jsx";

export default function App()
{
  const[animeid,setanimeid]=useState(null);

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBar />} >
          <Route index element={<SearchBar />}/>
          <Route path={animeid} element={<MoreInfopage id={animeid} setanimeid={setanimeid} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}



