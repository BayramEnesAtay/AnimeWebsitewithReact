import React, { createContext } from "react";
import useDetailFetch from "../../hooks/useDetailFetch";
import { useParams } from "react-router-dom";

const  DetailDataContext=createContext();

export  const DetailDataContextProvider=({children})=>{
  let {id}=useParams();
  const {data}=useDetailFetch(id);
  return(
    <DetailDataContext.Provider value={data}>
      {children}
    </DetailDataContext.Provider>
  );
}

export default DetailDataContext;
