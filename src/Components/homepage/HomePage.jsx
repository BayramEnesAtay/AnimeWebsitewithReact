import React from "react";
import { useState } from "react";
import Footer from "../footer/Footer";
import Cardrow from "../cardrow/Cardrow";
import {Header,Input,SearchButton} from "./Style";
import Content from "../Content";

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
    <Header >
      <Input  placeholder="Looking for something specific? " type="text" />
      <SearchButton >Search</SearchButton>
    </Header>
    <Content pagecount={pagecount} setdata={setdata}/>
    <Cardrow data={data} />
    <Footer pagearray={pagearray} setpagecount={setpagecount} />
    </>
   
  );
}