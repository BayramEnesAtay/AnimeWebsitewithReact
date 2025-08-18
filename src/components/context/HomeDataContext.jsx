import React from "react";
import { createContext,useState } from "react";
import useMainFetch from "../../hooks/useMainFetch";

const HomeDataContext=createContext();

export const HomeDataContextProvider=({children})=>{
  const pagearray=[];
  const [pagecount,setpagecount]=useState(1);
  const {data}=useMainFetch(pagecount);
  
  for(let i=1;i<=10;i++)
  {
    pagearray.push(i);
  }
  

  return(
    <HomeDataContext.Provider value={{data,pagearray,setpagecount}}>
      {children}
    </HomeDataContext.Provider>
  );

}
export default HomeDataContext;