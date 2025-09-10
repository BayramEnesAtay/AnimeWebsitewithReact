import React from "react";
import { useContext } from "react";
import { Pagination1} from "./Styled";
import HomeDataContext from "../context/HomeDataContext";
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from "@mui/material";
import useDebounce from "../../hooks/useDebounce";


const PaginationComp=()=>{
  const {setpagecount,pagecount,data,loading,setSortType,page,NavbarClick,newReleasepage,setnewReleasepage}=useContext(HomeDataContext);
  const handleChange = (event,newPage) => {
    if(NavbarClick==="Browse")
      setpagecount(newPage);
    else if(NavbarClick==="New Releases")
      setnewReleasepage(newPage);

    setSortType("");
  };
  const pageForDebounce = NavbarClick === "New Releases" ? newReleasepage : pagecount;

  let pagenumber=page.browse;
  if(NavbarClick==="New Releases")
  {
    pagenumber=page.newRelease;
    
  }
  console.log(pagenumber);
  const debouncedValue=useDebounce(pageForDebounce,600);
  
  return(
  <Pagination1>
    {!(!loading && data?.length===0) &&(
        <Pagination   sx={{
    '& .MuiPaginationItem-root': {
      color: 'white',
      borderColor: 'white',//the debounced value becomes a null
    }}}  color="secondary" count={pagenumber} page={debouncedValue} siblingCount={1} showFirstButton  showLastButton  onChange={handleChange}/>
    )} 
  </Pagination1>
  )
}
export default PaginationComp;