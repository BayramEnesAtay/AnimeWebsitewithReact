import HomePage from "./components/homepage/index.jsx";
import AnimeList from "./components/animelist/index.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./components/detailpage/index.jsx";
import Story from "./components/story/index.jsx";
import Overview from "./components/overview/index.jsx";
import React from "react";
import GlobalStyle from "../globalStyles.js";
import { DetailDataProvider } from "./components/context/DetailDataContext.jsx";
import { HomeDataProvider } from "./components/context/HomeDataContext.jsx";


const App=()=>{
  return(
    <BrowserRouter> 
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomeDataProvider><HomePage /></HomeDataProvider>} />
        <Route path="/anime/:id"  element={<DetailDataProvider><DetailPage /></DetailDataProvider>} >
          <Route index element={<Overview />} />
          <Route path="story" element={<Story />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}
export default App;



