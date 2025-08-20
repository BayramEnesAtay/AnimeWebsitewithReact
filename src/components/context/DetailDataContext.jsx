import React, { createContext } from "react";
import useDetailPage from "../../hooks/useDetailPage";
import { useParams } from "react-router-dom";

const  DetailDataContext=createContext();

export  const DetailDataProvider=({children})=>{
  let {id}=useParams();
  const {data}=useDetailPage(id);
  return(
    <DetailDataContext.Provider value={data}>
      {children}
    </DetailDataContext.Provider>
  );
}

export default DetailDataContext;
