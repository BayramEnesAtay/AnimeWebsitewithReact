import React from "react";
import '../Style/HomePage.css'
import Content from "./Content";
import { useState } from "react";
import Footer from "./Footer";
import Cardrow from "./Cardrow";

export default function HomePage()
{
  const [data,setdata]=useState([]);
  const [pagecount,setpagecount]=useState(1);
  const pagearray=[];
  for(let i=1;i<=10;i++)
  {
    pagearray.push(i);
  }
  return(
    <> 
    <div className="searchandbtn">
      <input className="input" placeholder="Looking for something specific? " type="text" />
      <button className="searchbtn">Search</button>
    </div>
    <Content pagecount={pagecount} setdata={setdata}/>
    <Cardrow data={data} />
    <Footer pagearray={pagearray} setpagecount={setpagecount} />
    </>
   
  );
}