import React, { useContext } from "react";
import PagenationComp from "../pagination";
import AnimeList from "../animelist";
import {Header} from "./Styled";
import HomeDataContext from "../context/HomeDataContext";
import Navbar from "../navbar";
import Section from "../homepagesection";
import Footer from "../footer";
import Search_Filterbar from "../searchandfilterbar";
import TopRatedPage from "../TopRatedPage";
import NewReleasesPage from "../NewReleasesPage";

const HomePage=()=>{
  const {NavbarClick}=useContext(HomeDataContext);

  return(
    <> 
    <Header >
      <Navbar />
    </Header>
    {NavbarClick==="Browse" &&
      <Section />
    }
    {NavbarClick==="Top Rated" && 
      <TopRatedPage />
    }
    {NavbarClick==="New Releases" &&
      <NewReleasesPage />
    }
    <Search_Filterbar/>
    <AnimeList />
    {(NavbarClick==="Browse" || NavbarClick==="New Releases") &&
      <PagenationComp />
    }
    <Footer/>
    </>
   
  );
}
export default HomePage;