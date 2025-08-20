import React from "react";
import { createContext,useState } from "react";
import useMainPage from "../../hooks/useMainPage";

const HomeDataContext=createContext();

export const HomeDataProvider=({children})=>{
  const [pagecount,setpagecount]=useState(1);
  const {data}=useMainPage(pagecount);

  return(
    <HomeDataContext.Provider value={{data,setpagecount,pagecount}}>
      {children}
    </HomeDataContext.Provider>
  );

}
export default HomeDataContext;