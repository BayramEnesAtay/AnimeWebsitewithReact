import React from "react";
import '../Style/Card.css';
import { useState } from "react";
import MoreInfopage from "./MoreInfopage";
import { useNavigate } from "react-router-dom";

export default function Card({animename,url,anumber,index,anime})
{
  const [showtooltip,setshowtooltip]=useState(Array(anumber).fill(false));
  let className="tooltiptextfalse";
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

  if(showtooltip[index])
  {
    className="tooltiptexttrue";
  }
  
  return(

    <div className="carddiv" onClick={()=>onCardClik()}>
      <img  id="image" src={url} onMouseOver={()=>handlehover(index)} onMouseLeave={()=>handleoffhover(index)} />

      <div id="name">
        {animename}
      </div>

      <div className={className}>
      <p id="info1" className="info">Source: {anime.source}</p>
      <p id="info2" className="info">{anime.type} • {anime.episodes} episodes</p>
      <p id="info3" className="info">Score: {anime.score}</p>
      
    </div>
    </div>
    
    
  );
}