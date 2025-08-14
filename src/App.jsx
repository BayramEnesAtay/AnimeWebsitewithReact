import HomePage from "./components/homepage/HomePage.jsx";
import AnimeList from "./components/animelist/AnimeList.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./components/detailpage/DetailPage.jsx";
import Story from "./components/story/Story.jsx";
import Overview from "./components/overview/Overview.jsx";
import React from "react";
import GlobalStyle from "./globalStyles.js";


const App=()=>{
  return(
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime/:id"  element={<DetailPage />} >
          <Route index element={<Overview />} />
          <Route path="story" element={<Story />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}
export default App;



