import React from "react";
import '../Style/Footer.css';
import API from "./API";

export default function Footer({pagearray,setpagecount})
{ 
  
  return(
    <div className="footer">
      {
        pagearray.map(num=>
        (
          <button onClick={()=>setpagecount(num)} key={num}>{num}</button>
        )
        )
      }
    </div>
  );
  
  
}