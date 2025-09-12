import React from "react";
import { createContext,useState } from "react";
import useMainPage from "../../hooks/useMainPage";

const HomeDataContext=createContext();

export const HomeDataProvider=({children})=>{
  const [pagecount,setpagecount]=useState(1);
  const [browseSearchCount,setbrowseSearchCount]=useState(1);//this is the search page counter.
  const [releaseSearchCount,setreleaseSearchCount]=useState(1);
  const [newReleasepage,setnewReleasepage]=useState(1);
  const [browseSearch,setbrowseSearch]=useState(false);//these are the states for search case.
  const [releaseSearch,setreleaseSearch]=useState(false);
  const [input,setInput]=useState("");
  const [input2,setInput2]=useState("");
  const [sortType,setSortType]=useState("");
  const [NavbarClick,setNavbarClick]=useState("Browse");
  const [selectedGenreId,setselectedGenreId]=useState(null);
  const {data,loading,setLoading,GenreData,topData,topYear,page,dataForGenres,setdata,setdataForGenres,settopData,settopYear}=useMainPage(NavbarClick,input,pagecount,browseSearch,releaseSearch,newReleasepage,input2,browseSearchCount,releaseSearchCount,selectedGenreId);
  
  return(
    <HomeDataContext.Provider value={{settopYear,settopData,setdataForGenres,setdata,setLoading,dataForGenres,setselectedGenreId,selectedGenreId,setreleaseSearchCount,releaseSearchCount,setbrowseSearchCount,browseSearchCount,setInput2,input2,setnewReleasepage,newReleasepage,page,topYear,topData,setNavbarClick,NavbarClick,GenreData,setSortType,sortType,data,loading,setpagecount,pagecount,browseSearch,setbrowseSearch,input,setInput,releaseSearch,setreleaseSearch}}>
      {children}
    </HomeDataContext.Provider>
  ); 

}
export default HomeDataContext;