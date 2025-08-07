import React from "react";
import '../Style/Footer.css';
import APİ from "./APİ";

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