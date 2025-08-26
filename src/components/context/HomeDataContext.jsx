import React from "react";
import { createContext,useState } from "react";
import useMainPage from "../../hooks/useMainPage";

const HomeDataContext=createContext();

export const HomeDataProvider=({children})=>{
  const [pagecount,setpagecount]=useState(1);
  const [searchstatus,setSearchStatus]=useState(false);
  const [input,setInput]=useState("");
  const {data}=useMainPage(input,pagecount,searchstatus);

  return(
    <HomeDataContext.Provider value={{data,setpagecount,pagecount,searchstatus,setSearchStatus,input,setInput}}>
      {children}
    </HomeDataContext.Provider>
  ); 

}
export default HomeDataContext;