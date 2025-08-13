import React from "react";
import {AnimeCard,AnimeImg,AnimeName,Info,Tooltip} from "./Style";
import { useState } from "react";
import MoreInfopage from "../moreinfopage/MoreInfopage";
import { useNavigate } from "react-router-dom";

const  Card=({animename,url,anumber,index,anime}) =>{

  const [showtooltip,setshowtooltip]=useState(Array(anumber).fill(false));
  const navigate=useNavigate();

  const handlehover=(i)=>{
    const nextshowtooltip=showtooltip.slice();
    nextshowtooltip[i]=true;
    setshowtooltip(nextshowtooltip);
  }

  const handleoffhover=(i)=>{
    const nextshowtooltip=showtooltip.slice();
    nextshowtooltip[i]=false;
    setshowtooltip(nextshowtooltip);
  }

  const onCardClik=()=>navigate(`/anime/${anime.mal_id}`);
  
  
  return(

    <AnimeCard onClick={()=>onCardClik()} >
      <AnimeImg src={url} onMouseEnter={()=>handlehover(index)} onMouseLeave={()=>handleoffhover(index)} />

      <AnimeName>
        {animename}
      </AnimeName>

      <Tooltip st={showtooltip[index]} >
        <Info>Source: {anime.source}</Info>
        <Info>{anime.type} • {anime.episodes} episodes</Info>
        <Info>Score: {anime.score}</Info>
      
      </Tooltip>
    </AnimeCard>
    
    
  );
}
export default Card;