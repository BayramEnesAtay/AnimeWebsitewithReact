import { useState,useEffect } from "react";
import HomeDataContext from "../components/context/HomeDataContext";
import useDebounce from "./useDebounce";

const useMainPage=(input,pagecount,searchstatus)=>{
  const [data,setdata]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const debouncedInput=useDebounce(input,800)

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
          setLoading(false);
        });
        
  },[pagecount,debouncedInput,searchstatus]);

  return {data,error,loading};
}
export default useMainPage;