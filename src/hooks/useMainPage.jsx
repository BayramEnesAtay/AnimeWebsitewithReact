import { useState,useEffect } from "react";
import HomeDataContext from "../components/context/HomeDataContext";
import useDebounce from "./useDebounce";

const useMainPage=(input,pagecount,searchstatus)=>{
  const [data,setdata]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const debouncedInput=useDebounce(input,800)
  const [GenreData,setGenreData]=useState([]);
  const [topData,settopData]=useState([]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(()=>{
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
        
  },[pagecount,debouncedInput,searchstatus]);

  useEffect(()=>{
    fetch("https://api.jikan.moe/v4/genres/anime")
      .then(Response=>Response.json())
      .then(json=>{
        setGenreData(json.data);
      })
  },[]);

  useEffect(()=>{
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

  },[])

  return {data,error,loading,GenreData,topData};
  
}
export default useMainPage;