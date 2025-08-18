import React from "react";
import { createContext,useState } from "react";
import useMainFetch from "../../hooks/useMainFetch";

const HomeDataContext=createContext();

export const HomeDataContextProvider=({children})=>{
  const [pagecount,setpagecount]=useState(1);
  const {data}=useMainFetch(pagecount);

  return(
    <HomeDataContext.Provider value={{data,setpagecount,pagecount}}>
      {children}
    </HomeDataContext.Provider>
  );

}
export default HomeDataContext;