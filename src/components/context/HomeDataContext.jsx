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
  const [input1,setInput1]=useState("");
  const [input2,setInput2]=useState("");
  const [sortType,setSortType]=useState("");
  const [openFilters,setOpenFilters]=useState(false);
  const [NavbarClick,setNavbarClick]=useState("Browse");
  const [status, setStatus] = useState('Title A-Z');
  const [selectedGenreId,setselectedGenreId]=useState(null);
  const [browseGenreId,setbrowseGenreId]=useState(null);
  const [genresCount,setgenresCount]=useState(1);
  const {data,loading,setLoading,GenreData,topData,topYear,page,dataForGenres,setdata,setdataForGenres,settopData,settopYear}=useMainPage(NavbarClick,input1,pagecount,browseSearch,releaseSearch,newReleasepage,input2,browseSearchCount,releaseSearchCount,selectedGenreId,genresCount,setgenresCount);
  
  return(
    <HomeDataContext.Provider value={{setSortType,setStatus,status,setOpenFilters,openFilters,setbrowseGenreId,browseGenreId,setgenresCount,genresCount,settopYear,settopData,setdataForGenres,setdata,setLoading,dataForGenres,setselectedGenreId,selectedGenreId,setreleaseSearchCount,releaseSearchCount,setbrowseSearchCount,browseSearchCount,setInput2,input2,setnewReleasepage,newReleasepage,page,topYear,topData,setNavbarClick,NavbarClick,GenreData,sortType,data,loading,setpagecount,pagecount,browseSearch,setbrowseSearch,input1,setInput1,releaseSearch,setreleaseSearch}}>
      {children}
    </HomeDataContext.Provider>
  ); 

}
export default HomeDataContext;