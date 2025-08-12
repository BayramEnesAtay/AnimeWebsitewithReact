import React from "react";
import styled from "styled-components";
import { useState } from "react";
import MoreInfopage from "./MoreInfopage";
import { useNavigate } from "react-router-dom";

export default function Card({animename,url,anumber,index,anime})
{ 
  const [showtooltip,setshowtooltip]=useState(Array(anumber).fill(false));
  
  const CARD=styled.div`
    margin-left: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    flex-wrap: wrap;
    position: relative;
  `
  const IMG=styled.img`
    width: 80%;
    height: 80%;
    border-radius: 7px;
    z-index: 1;
  `
  const DIV=styled.div`
    text-decoration: none;
    color:blue;
  `
  const INFO=styled.p`
    margin-left: 20px;
    margin-top: 5px;
    padding: 0px;
  `
  const TOOLTIPDIV=styled.div`
    display:flex;
    flex-direction: column;
    position: absolute;
    width: 120px;
    background-color: #384b5e;
    color: #fff;
    border-radius: 6px;
    top:5px;
    left:  90%;
    width:250px;
    height:150px;
    margin: 0px;
    visibility: ${showtooltip[index] ? "visible" : "hidden"};
    z-index: 2;
  `

  
  const navigate=useNavigate();

  function handlehover(i)
  {
    const nextshowtooltip=showtooltip.slice();
    nextshowtooltip[i]=true;
    setshowtooltip(nextshowtooltip);
  }

  function handleoffhover(i)
  {
    const nextshowtooltip=showtooltip.slice();
    nextshowtooltip[i]=false;
    setshowtooltip(nextshowtooltip);
  }

  function onCardClik()
  {
    navigate(`/anime/${anime.mal_id}`);
  }
  
  return(

    <CARD onClick={()=>onCardClik()}>
      <IMG src={url} onMouseEnter={()=>handlehover(index)} onMouseLeave={()=>handleoffhover(index)} />

      <DIV>
        {animename}
      </DIV>

      <TOOLTIPDIV  >
      <INFO>Source: {anime.source}</INFO>
      <INFO>{anime.type} • {anime.episodes} episodes</INFO>
      <INFO>Score: {anime.score}</INFO>
      
    </TOOLTIPDIV>
    </CARD>
    
    
  );
}