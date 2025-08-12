import React from "react";
import Content from './Content';
import '../Style/Cardrow.css';
import Card from './Card';
import Footer from "./Footer";


export default function Cardrow({data})
{
  return(
    <div className="cardRow">
    {data.map((anime,index)=>{
      return(
      <Card animename={anime.title} url={anime.images.jpg.image_url} anumber={data.length} index={index} anime={anime}/>
      );
    })};
    
    </div>
    
  );
}