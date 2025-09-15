import React, { createContext } from "react";
import useDetailPage from "../../hooks/useDetailPage";
import { useParams } from "react-router-dom";
import { Genres } from "../card/Styled";

const  DetailDataContext=createContext();

export  const DetailDataProvider=({children})=>{
  let {id}=useParams();
  const {data,loading,error,genres,themes,producers}=useDetailPage(id);
  
  return(
    <DetailDataContext.Provider value={{data,loading,error,genres,themes,producers}}>
      {children}
    </DetailDataContext.Provider>
  );
}

export default DetailDataContext;
