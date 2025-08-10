import React from "react";
import '../Style/Card.css';
import { useState } from "react";
import MoreInfopage from "./MoreInfopage";

export default function Card({animename,url,anumber,index,anime})
{
  const [showtooltip,setshowtooltip]=useState(Array(anumber).fill(false));
  let className="tooltiptextfalse";

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

  function onimageClick()
  {
    let id;
    id=anime.mal_id;
    <MoreInfopage id={id}/>
  }
  if(showtooltip[index])
  {
    className="tooltiptexttrue";
  }
  
  return(

    <div className="carddiv" >
      <a className="linktoinfo" target="_blank">
        <img onClick={()=>onimageClick} id="image" src={url} onMouseOver={()=>handlehover(index)} onMouseLeave={()=>handleoffhover(index)} />
      </a>
      <a id="name" target="_blank" >
        {animename}
      </a>
      <div className={className}>
      <p id="info1" className="info">Source: {anime.source}</p>
      <p id="info2" className="info">{anime.type} • {anime.episodes} episodes</p>
      <p id="info3" className="info">Score: {anime.score}</p>
      <p id="info4" className="info">Hello kity</p>
    </div>
    </div>
    
    
  );
}