import React from "react";
import { Pagination} from "./Style";

export default function Footer({pagearray,setpagecount})
{ 
  return(
    <Pagination>
      {
        pagearray.map(num=>
        (
          <button onClick={()=>setpagecount(num)} key={num}>{num}</button>
        )
        )
      }
    </Pagination>
  );
  
  
}