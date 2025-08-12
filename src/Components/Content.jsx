import React from "react";
import { useEffect } from "react";
import Card from './Card';
import Cardrow from "./Cardrow";
import Footer from "./Footer";

export default function Content({pagecount,setdata})
{ 
  useEffect(()=>{
      
      const url="https://api.jikan.moe/v4/anime?page="+pagecount;
      fetch(url)
        .then(Response=>Response.json())
        .then(json =>{
          setdata(json.data);  
          });
  },[pagecount]);
};
