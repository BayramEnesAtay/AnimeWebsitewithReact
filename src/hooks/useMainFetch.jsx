import React from "react";
import { useState,useEffect } from "react";

const useMainFetch=(pagecount)=>{
  const [data,setdata]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);

  useEffect(()=>{
      setLoading(true);
      const url="https://api.jikan.moe/v4/anime?page="+pagecount;
      fetch(url)
        .then(Response=>Response.json())
        .then(json =>{
          setdata(json.data);  
        })
        .catch((err)=>{
          setError(err);
        })
        .finally(()=>{
          setLoading(false);
        });
        
  },[pagecount]);

  return {data,error,loading};
}
export default useMainFetch;