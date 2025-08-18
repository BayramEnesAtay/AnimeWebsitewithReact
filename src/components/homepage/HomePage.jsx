import React from "react";
import Footer from "../footer/Footer";
import AnimeList from "../animelist/AnimeList";
import {Header,Input,SearchButton} from "./Styled";
import {HomeDataContextProvider} from "../context/HomeDataContext";

const HomePage=()=>{
  

  return(
    <> 
    <HomeDataContextProvider>
    <Header >
      <Input  placeholder="Looking for something specific? " type="text" />
      <SearchButton >Search</SearchButton>
    </Header>
    <AnimeList />
    <Footer />
    </HomeDataContextProvider>
    </>
   
  );
}
export default HomePage;