import React from "react";
import PagenationComp from "../pagination";
import AnimeList from "../animelist";
import {Header} from "./Styled";
import {HomeDataProvider} from "../context/HomeDataContext";
import Navbar from "../navbar";
import Section from "../homepagesection";
import Footer from "../footer";
import Search_Filterbar from "../searchandfilterbar";

const HomePage=()=>{

  return(
    <> 
    <HomeDataProvider>
    <Header >
      <Navbar />
    </Header>
    <Section />
    <Search_Filterbar/>
    <AnimeList />
    <PagenationComp />
    <Footer/>
    </HomeDataProvider>
    </>
   
  );
}
export default HomePage;