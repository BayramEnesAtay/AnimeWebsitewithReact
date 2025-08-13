import React from "react";
import { useEffect} from "react";


export default function MoreInfopageContent({id,setdata})
{
  useEffect(()=>{
    const url="https://api.jikan.moe/v4/anime/"+id;
       fetch(url)
        .then(Response=>Response.json())
        .then(json =>{
          setdata(json.data);
            
        });
  },[id]);
}