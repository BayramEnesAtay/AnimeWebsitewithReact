import SearchBar from "./SearchBar";
import API from "./API.jsx"
import Cardrow from "./Cardrow.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoreInfopage from "./MoreInfopage.jsx";
import Story from "./Story.jsx";
import Overview from "./Overview.jsx";

export default function App()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/anime/:id"  element={<MoreInfopage />} >
          <Route index element={<Overview />} />
          <Route path="story" element={<Story />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}



