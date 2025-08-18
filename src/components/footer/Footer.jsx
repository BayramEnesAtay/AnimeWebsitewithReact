import React, { useContext } from "react";
import { Pagination} from "./Styled";
import HomeDataContext from "../context/HomeDataContext";

const Footer=()=>{
  const {pagearray,setpagecount}=useContext(HomeDataContext);
  
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