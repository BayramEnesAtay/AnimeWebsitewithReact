import React, { useContext } from "react";
import Card from '../card';
import {Content} from "./Styled";
import HomeDataContext from "../context/HomeDataContext";
import MainPageSkeleton from "../skeleton/MainPageSkeleton";
import NotFound from "../notfoundpage/NotFoundAnime";


const AnimeList=()=>{
  const {data,loading,sortType}=useContext(HomeDataContext);
  let sortedData;
  sortedData=data.toSorted((a,b)=>
    a.title.localeCompare(b.title)
);
return(
  <>
    <Content>
      {loading &&(
        Array.from({length:10},(_,index)=><MainPageSkeleton key={index}/>)
      )}
    {!loading && !sortType &&data?.map((anime,index)=>{
      return(
      <Card key={anime.mal_id+index} animename={anime.title} url={anime.images.jpg.image_url} anumber={data.length} index={index} anime={anime}/>
      )
    })}
    {!loading && sortType && sortedData?.map((anime,index)=>{
        return(
      <Card key={anime.mal_id+index} animename={anime.title} url={anime.images.jpg.image_url} anumber={data.length} index={index} anime={anime}/>
    )})
    }
    
    </Content>
    {!loading && data?.length===0 && (
      <NotFound />
    )}
    </>
  
);
}
export default AnimeList;