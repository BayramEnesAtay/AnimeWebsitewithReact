import React from "react";
import { useState,useEffect } from "react";

const useDetailPage=(id)=>{
  const [data,setdata]=useState({});  
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const [genres,setGenres]=useState([]);

  useEffect(()=>{
    setLoading(true);
    const url="https://api.jikan.moe/v4/anime/"+id;
      fetch(url)
        .then(Response=>Response.json())
        .then(json =>{
          setdata(json.data);
          {json?.data?.genres?.forEach((genre)=>{
            setGenres(prev => [...prev,genre.name]);
          })  
        }})
        .catch((err)=>{
          setError(err);
        })
        .finally(()=>{
          setLoading(false);
        });
  },[id])

  return {data,loading,error,genres};
}
export default useDetailPage;