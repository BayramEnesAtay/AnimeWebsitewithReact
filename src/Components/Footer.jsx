import React from "react";
import Content from "./Content";
import styled from "styled-components";

export default function Footer({pagearray,setpagecount})
{ 
  const DIV=styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 5px;
    justify-content: center;
    align-items: center;
  `

  return(
    <DIV>
      {
        pagearray.map(num=>
        (
          <button onClick={()=>setpagecount(num)} key={num}>{num}</button>
        )
        )
      }
    </DIV>
  );
  
  
}