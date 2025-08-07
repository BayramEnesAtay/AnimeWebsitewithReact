import React from "react";
import '../Style/Card.css';

export default function Card({animename,url})
{
  return(
      <div className="carddiv">
      <a className="linktoinfo" target="_blank">
        <img id="image" src={url} />
      </a>
      <a id="name" target="_blank" >
        {animename}
      </a>
    </div>
    
  );
}