import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Pagination1} from "./Styled";
import HomeDataContext from "../context/HomeDataContext";
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from "@mui/material";
import useDebounce from "../../hooks/useDebounce";


const PaginationComp=()=>{
  const {setbrowseSearch,setreleaseSearch,setpagecount,pagecount,data,loading,setSortType,page,NavbarClick,newReleasepage,setnewReleasepage,browseSearch,browseSearchCount,setbrowseSearchCount,setdataForGenres,releaseSearch,releaseSearchCount,setreleaseSearchCount,setselectedGenreId,selectedGenreId,setLoading,setInput1,setInput2,setgenresCount,genresCount}=useContext(HomeDataContext);
  const handleChange = (event,newPage) => {
    if(browseSearch)
      setbrowseSearchCount(newPage);
    else if(releaseSearch)
      setreleaseSearchCount(newPage);
    else if(selectedGenreId)
      setgenresCount(newPage);
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
  else if(selectedGenreId)
  {
    pageForDebounce=genresCount;//the genresCount is our actual page number for the genres page.
    count=page.genres;
  }
  else{
     pageForDebounce = NavbarClick === "New Releases" ? newReleasepage : pagecount;
     count=pagenumber;
  }
  const debouncedValue=useDebounce(pageForDebounce,600);
  //this is for when we search then go another page the actiual page and the count will change.
  useEffect(() => {
    
    setLoading(true);
  if (NavbarClick === "Browse") {
    setreleaseSearch(false);
    setselectedGenreId(null);
    setreleaseSearchCount(1);
    setpagecount(1);
    setInput2("");
    setgenresCount(1);
  } else if (NavbarClick === "New Releases") {
    setbrowseSearch(false);
    setbrowseSearchCount(1);
    setselectedGenreId(null);
    setnewReleasepage(1);
    setInput1("");
    setgenresCount(1);
  }
    else if(NavbarClick==="Genres")
  {
    setbrowseSearch(false);
    setreleaseSearch(false);
    setreleaseSearchCount(1);
    setbrowseSearchCount(1);
    setInput1("");
    setInput2("");
    setpagecount(1);
    setnewReleasepage(1);
    setgenresCount(1);
  }
    else if(NavbarClick==="Top Rated")
  {
    setbrowseSearch(false);
    setreleaseSearch(false);
    setreleaseSearchCount(1);
    setbrowseSearchCount(1);
    setInput1("");
    setInput2("");
    setselectedGenreId(null);
    setnewReleasepage(1);
    setgenresCount(1);
    setdataForGenres([]);
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