import React from "react";


export default function MoreInfopage({animeid,setanimeid})
{ //how can ı take the id 
  return(
    <div>
      <h1 id="title"></h1>
      <h3 id="alttitle"></h3>
      <nav>
        <ul class="subNav">
          <li class="selected"><a>OVERVIEW</a></li>
          <li class="selected"><a>CHARACTERS</a></li>
          <li class="selected"><a>SCORE</a></li>
        </ul>
      </nav>
    </div>
  );
}