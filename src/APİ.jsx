import React from "react";
import { useEffect,useState } from "react";
import Card from './Components/Card';
import Cardrow from "./Components/Cardrow";

export default function APİ()
{
  
  const [data,setdata]=useState([]);
  
  useEffect(()=>{
      //parm i
      const url="https://api.jikan.moe/v4/anime?page=1";
      fetch(url)
        .then(Response=>Response.json())
        .then(json =>{
          setdata(json.data);  
          });
  },[]);
  return(
    <Cardrow data={data} />
  );
};
