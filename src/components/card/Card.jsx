import React, { useReducer } from "react";
import {AnimeCard,AnimeImg,AnimeName,Info,Tooltip} from "./Styled";
import DetailPage from "../detailpage/DetailPage";
import { useNavigate } from "react-router-dom";
import { TooltipReducer } from "../reducer/TooltipReducer";

const  Card=({animename,url,anumber,index,anime}) =>{

  const [showtooltip,dispatch]=useReducer(TooltipReducer,Array(anumber).fill(false));
  const navigate=useNavigate();

  const handlehover=(i)=>{
    dispatch({
      type:"onhover",
      payload:i
    })
  }

  const handleoffhover=(i)=>{
    dispatch({
      type:"ofhover",
      payload:i
    })
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