import { useState,useEffect } from "react";
import HomeDataContext from "../components/context/HomeDataContext";
import useDebounce from "./useDebounce";
import { FaLess } from "react-icons/fa";

const useMainPage=(NavbarClick,input,pagecount,browseSearch,releaseSearch,newReleasepage,input2,browseSearchCount,releaseSearchCount,selectedGenreId)=>{
  const [data,setdata]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  const debouncedInput=useDebounce(input,800)
  const debouncedInput2=useDebounce(input2,800);
  const [GenreData,setGenreData]=useState([]);
  const [topData,settopData]=useState([]);
  const [topYear,settopYear]=useState([]);
  const [dataForGenres,setdataForGenres]=useState([]);

  const [page,setpage]=useState({
    browse:1157,
    newRelease:280,
    search1:1,
    search2:1,//search1 and search2 are foru pagination total page.
    genres:1
  });
  useEffect(()=>{
    if(NavbarClick==="Genres")
      setLoading(false);
    else{
      setLoading(true);
    }
    
  },[NavbarClick])

  useEffect(()=>{
      if(NavbarClick!=="Browse")
        return;
      setLoading(true);
      setdata([]);//we have reset the data.
      let url;
      if(browseSearch && debouncedInput)
        url="https://api.jikan.moe/v4/anime?q="+debouncedInput+"&page="+browseSearchCount;
      else{
        url="https://api.jikan.moe/v4/anime?page="+pagecount;
      }
      fetch(url)
        .then(Response=>Response.json())
        .then(json =>{
          setdata(json.data);
          {browseSearch && 
          setpage(prev=>({...prev,search1:json?.pagination?.last_visible_page}))
        }
        })
        .catch((err)=>{
          setError(err);
        })
        .finally(()=>{
          setTimeout(()=>{
            setLoading(false);
          },3000)
        });
        
  },[pagecount,debouncedInput,browseSearch,NavbarClick,browseSearchCount]);

  useEffect(()=>{
    fetch("https://api.jikan.moe/v4/genres/anime")
      .then(Response=>Response.json())
      .then(json=>{
        setGenreData(json.data);
      })
  },[]);

  useEffect(()=>{
    if(NavbarClick!=="Top Rated")
      return;
    setLoading(true);
    fetch("https://api.jikan.moe/v4/top/anime")
      .then(Res=>Res.json())
      .then(json=>{
        settopData(json.data)
        
      })
      .catch((err)=>{
        setError(err);
      })
      .finally(()=>{
        setTimeout(()=>{
          setLoading(false);
        },3000)
      });
      
  },[NavbarClick])
  
   useEffect(()=>{
    if(NavbarClick!=="New Releases")
      return;
    setLoading(true);
    let url;
    if(releaseSearch && debouncedInput2)
      url="https://api.jikan.moe/v4/anime?start_date=2020-01-01&q="+debouncedInput2+"&page="+releaseSearchCount;
    else
      url="https://api.jikan.moe/v4/anime?start_date=2020-01-01&page="+newReleasepage;

    fetch(url)
      .then(Res=>Res.json())
      .then(json=>{
        settopYear(json.data);
        {releaseSearch && 
          setpage(prev=>({...prev,search2:json?.pagination?.last_visible_page}))
        }
      })
      .catch((err)=>{
        setError(err);
      })
      .finally(()=>{
        setTimeout(()=>{
          setLoading(false);
        },3000)
      });
  },[newReleasepage,NavbarClick,releaseSearch,debouncedInput2,releaseSearchCount])

  
  useEffect(()=>{
    if(selectedGenreId)
    {
      setLoading(true);
      const url="https://api.jikan.moe/v4/anime?genres="+selectedGenreId
      fetch(url)
        .then(Response=>Response.json())
        .then(json =>{
          setdataForGenres(json.data);
          {selectedGenreId && 
            setpage(prev=>({...prev,genres:json?.pagination?.last_visible_page}))
          }
        })
        .catch((err)=>{
          setError(err);
        })
        .finally(()=>{
          setTimeout(()=>{
            setLoading(false);
          },3000)
        });
    }
    else{
      setdataForGenres([]);
      return;
    }

  },[selectedGenreId,NavbarClick])


  return {data,error,loading,setLoading,GenreData,topData,topYear,page,dataForGenres,setdata,setdataForGenres,settopData,settopYear};
  
}
export default useMainPage;