import React from "react";
import styled from "styled-components";
import Content from "./Content";
import { useState } from "react";
import Footer from "./Footer";
import Cardrow from "./Cardrow";

export default function HomePage()
{
  const main_color="#de5499";

  const BUTTON=styled.button`
    width: 70px;
    border-radius: 10px;
    border-color: ${main_color};
    color:#de5499;
    transition: color 0.4s , background-color 0.4s;
    &:focus{
      border:2px solid ${main_color};
      outline: none;
    }
    &:hover{
      background-color: ${main_color};
      color:white;
      cursor: pointer;
    }
  `
  const DIV=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top:5%;
    column-gap: 10px;
  `
  const INPUT=styled.input`
    width: 210px;
    border-radius:9px ;
    border-color: ${main_color};
  `
  const [data,setdata]=useState([]);
  const [pagecount,setpagecount]=useState(1);
  const pagearray=[];

  for(let i=1;i<=10;i++)
  {
    pagearray.push(i);
  }
  return(
    <> 
    <DIV >
      <INPUT  placeholder="Looking for something specific? " type="text" />
      <BUTTON >Search</BUTTON>
    </DIV>
    <Content pagecount={pagecount} setdata={setdata}/>
    <Cardrow data={data} />
    <Footer pagearray={pagearray} setpagecount={setpagecount} />
    </>
   
  );
}