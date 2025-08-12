import React from "react";
import Content from './Content';
import styled from "styled-components";
import Card from './Card';
import Footer from "./Footer";


export default function Cardrow({data})
{
  const DIV=styled.div`
    background-color: #11161d;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fit, 230px);
    margin-top: 50px;
    justify-content: center;
    align-items: center;
  `

  return(
    <DIV>
    {data.map((anime,index)=>{
      return(
      <Card animename={anime.title} url={anime.images.jpg.image_url} anumber={data.length} index={index} anime={anime}/>
      );
    })};
    </DIV>
    
  );
}