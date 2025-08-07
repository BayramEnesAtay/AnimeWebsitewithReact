import React from "react";
import APİ from '../APİ';
import '../Style/Cardrow.css';
import Card from './Card';


export default function Cardrow({data})
{
  return(
    <div className="cardRow">
    {data.map(anime=>{
      return(
      <Card animename={anime.title} url={anime.images.jpg.image_url}  />
      );
    })};
    </div>
  );
}