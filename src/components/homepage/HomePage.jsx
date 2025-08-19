import React from "react";
import Footer from "../footer/Footer";
import AnimeList from "../animelist/AnimeList";
import {Header} from "./Styled";
import {HomeDataContextProvider} from "../context/HomeDataContext";
import Navbar from "../appbar/Navbar";

const HomePage=()=>{

  return(
    <> 
    <HomeDataContextProvider>
    <Header >
      <Navbar />
    </Header>
    <AnimeList />
    <Footer />
    </HomeDataContextProvider>
    </>
   
  );
}
export default HomePage;