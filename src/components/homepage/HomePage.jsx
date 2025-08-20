import React from "react";
import PagenationComp from "../pagination/PaginationComp";
import AnimeList from "../animelist/AnimeList";
import {Header} from "./Styled";
import {HomeDataContextProvider} from "../context/HomeDataContext";
import Navbar from "../appbar/Navbar";
import Section from "../homepagesection/Section";
import Footer from "../footer/Footer";
const HomePage=()=>{

  return(
    <> 
    <HomeDataContextProvider>
    <Header >
      <Navbar />
    </Header>
    <Section />
    <AnimeList />
    <PagenationComp />
    <Footer/>
    </HomeDataContextProvider>
    </>
   
  );
}
export default HomePage;