import React from "react";
import { useEffect,useState } from "react";
import Card from './Card';
import Cardrow from "./Cardrow";
import Footer from "./Footer";

export default function APİ()
{
  const [pagecount,setpagecount]=useState(1);
  const [data,setdata]=useState([]);
  const pagearray=[];
  for(let i=1;i<=10;i++)
  {
    pagearray.push(i);
  }

  useEffect(()=>{
      
      const url="https://api.jikan.moe/v4/anime?page="+pagecount;
      fetch(url)
        .then(Response=>Response.json())
        .then(json =>{
          setdata(json.data);  
          });
  },[pagecount]);
  return(
    <div >
      <Cardrow data={data} />
      <Footer pagearray={pagearray} setpagecount={setpagecount} />
    </div>
    
  );
};
