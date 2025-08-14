import React from "react";
import Card from '../card/Card';
import Footer from "../footer/Footer";
import {Content} from "./Style";

const AnimeList=({data})=>{
  return(
    <Content>
    {data.map((anime,index)=>{
      return(
      <Card key={anime.mal_id} animename={anime.title} url={anime.images.jpg.image_url} anumber={data.length} index={index} anime={anime}/>
      );
    })};
    </Content>
    
  );
}
export default AnimeList;