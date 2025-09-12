import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Pagination1} from "./Styled";
import HomeDataContext from "../context/HomeDataContext";
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from "@mui/material";
import useDebounce from "../../hooks/useDebounce";


const PaginationComp=()=>{
  const {setbrowseSearch,setreleaseSearch,setpagecount,pagecount,data,loading,setSortType,page,NavbarClick,newReleasepage,setnewReleasepage,browseSearch,browseSearchCount,setbrowseSearchCount,releaseSearch,releaseSearchCount,setreleaseSearchCount,setselectedGenreId,setLoading,setdata,setdataForGenres,settopData,settopYear}=useContext(HomeDataContext);
  const handleChange = (event,newPage) => {
    if(browseSearch)
      setbrowseSearchCount(newPage);
    else if(releaseSearch)
      setreleaseSearchCount(newPage);
    else{
      if(NavbarClick==="Browse")
        setpagecount(newPage);
      else if(NavbarClick==="New Releases")
        setnewReleasepage(newPage);
    }
    
    
    setSortType("");
  };
  let pageForDebounce;
  let count;
  let pagenumber=page.browse;
  if(NavbarClick==="New Releases")
  {
    pagenumber=page.newRelease;
    
  }

  if(browseSearch)
  {
    pageForDebounce=browseSearchCount;
    count=page.search1;
  }
  else if(releaseSearch)
  {
    pageForDebounce=releaseSearchCount;
    count=page.search2;
  }
  else{
     pageForDebounce = NavbarClick === "New Releases" ? newReleasepage : pagecount;
     count=pagenumber;
  }
  const debouncedValue=useDebounce(pageForDebounce,600);
  //this is for when we search then go another page the actiual page and the count will change.
  useEffect(() => {
    settopData([]);
    settopYear([]);
    setdataForGenres([]);
    setdata([]);
    setLoading(false);
  if (NavbarClick === "Browse") {
    setreleaseSearch(false);
    setselectedGenreId(null);
    setreleaseSearchCount(1);
  } else if (NavbarClick === "New Releases") {
    setbrowseSearch(false);
    setbrowseSearchCount(1);
    setselectedGenreId(null);
  } 
    else if(NavbarClick==="Top Rated")
  {
    setselectedGenreId(null);
  }
}, [NavbarClick]);

  return(
  <Pagination1>
    {!(!loading && data?.length===0) &&(
        <Pagination   sx={{
    '& .MuiPaginationItem-root': {
      color: 'white',
      borderColor: 'white',//the debounced value becomes a null
    }}}  color="secondary" count={count} page={debouncedValue} siblingCount={1} showFirstButton  showLastButton  onChange={handleChange}/>
    )} 
  </Pagination1>
  )
}
export default PaginationComp;