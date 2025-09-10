import { useState,useEffect } from "react";
import HomeDataContext from "../components/context/HomeDataContext";
import useDebounce from "./useDebounce";

const useMainPage=(NavbarClick,input,pagecount,searchstatus,newReleasepage,input2)=>{
  const [data,setdata]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const debouncedInput=useDebounce(input,800)
  const debouncedInput2=useDebounce(input2,800);
  const [GenreData,setGenreData]=useState([]);
  const [topData,settopData]=useState([]);
  const [topYear,settopYear]=useState([]);

  const page={
    browse:1157,
    newRelease:280
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(()=>{
      if(NavbarClick!=="Browse")
        return;
      setLoading(true);
      setdata([]);//we have reset the data.
      let url;
      if(searchstatus && debouncedInput)
        url="https://api.jikan.moe/v4/anime?q="+debouncedInput;
      else{
        url="https://api.jikan.moe/v4/anime?page="+pagecount;
      }
      fetch(url)
        .then(Response=>Response.json())
        .then(json =>{
          setdata(json.data);
        })
        .catch((err)=>{
          setError(err);
        })
        .finally(()=>{
          setTimeout(()=>{
            setLoading(false);
          },3000)
        });
        
  },[pagecount,debouncedInput,searchstatus,NavbarClick]);

  useEffect(()=>{
    fetch("https://api.jikan.moe/v4/genres/anime")
      .then(Response=>Response.json())
      .then(json=>{
        setGenreData(json.data);
      })
  },[]);

  useEffect(()=>{
    setLoading(true);
    if(NavbarClick!=="Top Rated")
      return;
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
    if(searchstatus && debouncedInput2)
      url="https://api.jikan.moe/v4/anime?start_date=2020-01-01&q="+debouncedInput2;
    else
      url="https://api.jikan.moe/v4/anime?start_date=2020-01-01&page="+newReleasepage;

    fetch(url)
      .then(Res=>Res.json())
      .then(json=>{
        settopYear(json.data);
      })
      .catch((err)=>{
        setError(err);
      })
      .finally(()=>{
        setTimeout(()=>{
          setLoading(false);
        },3000)
      });

  },[newReleasepage,NavbarClick,searchstatus,debouncedInput2])


  return {data,error,loading,GenreData,topData,topYear,page};
  
}
export default useMainPage;