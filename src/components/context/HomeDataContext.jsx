import React from "react";
import { createContext,useState } from "react";
import useMainPage from "../../hooks/useMainPage";

const HomeDataContext=createContext();

export const HomeDataProvider=({children})=>{
  const [pagecount,setpagecount]=useState(1);
  const [searchstatus,setSearchStatus]=useState(false);
  const [input,setInput]=useState("");
  const {data,loading,GenreData,topData}=useMainPage(input,pagecount,searchstatus);
  const [sortType,setSortType]=useState("");
  const [NavbarClick,setNavbarClick]=useState("Browse");

  return(
    <HomeDataContext.Provider value={{topData,setNavbarClick,NavbarClick,GenreData,setSortType,sortType,data,loading,setpagecount,pagecount,searchstatus,setSearchStatus,input,setInput}}>
      {children}
    </HomeDataContext.Provider>
  ); 

}
export default HomeDataContext;