import HomePage from "./components/homepage/HomePage.jsx";
import Cardrow from "./components/cardrow/Cardrow.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoreInfopage from "./components/moreinfopage/MoreInfopage.jsx";
import Story from "./components/story/Story.jsx";
import Overview from "./components/overview/Overview.jsx";

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



