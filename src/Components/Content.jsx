import React from "react";
import { useEffect } from "react";


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
