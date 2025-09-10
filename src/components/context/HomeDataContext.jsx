import React from "react";
import { createContext,useState } from "react";
import useMainPage from "../../hooks/useMainPage";

const HomeDataContext=createContext();

export const HomeDataProvider=({children})=>{
  const [pagecount,setpagecount]=useState(1);
  const [newReleasepage,setnewReleasepage]=useState(1);
  const [searchstatus,setSearchStatus]=useState(false);
  const [input,setInput]=useState("");
  const [input2,setInput2]=useState("");
  const [sortType,setSortType]=useState("");
  const [NavbarClick,setNavbarClick]=useState("Browse");
  const {data,loading,GenreData,topData,topYear,page}=useMainPage(NavbarClick,input,pagecount,searchstatus,newReleasepage,input2);

  return(
    <HomeDataContext.Provider value={{setInput2,input2,setnewReleasepage,newReleasepage,page,topYear,topData,setNavbarClick,NavbarClick,GenreData,setSortType,sortType,data,loading,setpagecount,pagecount,searchstatus,setSearchStatus,input,setInput}}>
      {children}
    </HomeDataContext.Provider>
  ); 

}
export default HomeDataContext;