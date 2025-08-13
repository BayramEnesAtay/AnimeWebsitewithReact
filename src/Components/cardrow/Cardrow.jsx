import React from "react";
import Card from '../card/Card';
import Footer from "../footer/Footer";
import {Content} from "./Style";

export default function Cardrow({data})
{
  return(
    <Content>
    {data.map((anime,index)=>{
      return(
      <Card animename={anime.title} url={anime.images.jpg.image_url} anumber={data.length} index={index} anime={anime}/>
      );
    })};
    </Content>
    
  );
}