import React from "react";
import { Pagination} from "./Styled";

const Footer=({pagearray,setpagecount})=>{ 
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
export default Footer;