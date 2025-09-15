import React, { createContext, useRef } from "react";
import useDetailPage from "../../hooks/useDetailPage";
import { useParams } from "react-router-dom";
import { Genres } from "../card/Styled";

const  DetailDataContext=createContext();

export  const DetailDataProvider=({children})=>{
  let {id}=useParams();
  const trailerRef=useRef(null);//it is for watch button and trailer.
  const {data,loading,error,genres,themes,producers}=useDetailPage(id);
  
  return(
    <DetailDataContext.Provider value={{data,loading,error,genres,themes,producers,trailerRef}}>
      {children}
    </DetailDataContext.Provider>
  );
}

export default DetailDataContext;
