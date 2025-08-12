import HomePage from "./Components/HomePage.jsx";
import API from "./Components/Content.jsx"
import Cardrow from "./Components/Cardrow.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoreInfopage from "./Components/MoreInfopage.jsx";
import Story from "./Components/Story.jsx";
import Overview from "./Components/Overview.jsx";

export default function App()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime/:id"  element={<MoreInfopage />} >
          <Route index element={<Overview />} />
          <Route path="story" element={<Story />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}



