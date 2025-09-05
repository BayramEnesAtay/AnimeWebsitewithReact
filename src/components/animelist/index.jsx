import React, { useContext } from "react";
import Card from '../card';
import {Content} from "./Styled";
import HomeDataContext from "../context/HomeDataContext";
import MainPageSkeleton from "../skeleton/MainPageSkeleton";
import NotFound from "../notfoundpage/NotFoundAnime";


const AnimeList=()=>{
  const {data,loading,sortType}=useContext(HomeDataContext);
  let sortedData;
  switch(sortType){
    case "Title":{
      sortedData=data.toSorted((a,b)=>
      a.title.localeCompare(b.title)
    );
    }break;
    case "Rating":{
      sortedData=data.toSorted((a,b)=>{
        return(b.score-a.score);
      }
      
    );
    }break;
  }

return(
  <>
    <Content>
      {loading &&(
        Array.from({length:10},(_,index)=><MainPageSkeleton key={index}/>)
      )}
    {!loading && !sortType &&data?.map((anime,index)=>{
      return(
      <Card key={anime.mal_id} animename={anime.title} url={anime.images.jpg.image_url} anumber={data.length} index={index} anime={anime}/>
      )
    })}
    {!loading && sortType && sortedData?.map((anime,index)=>{
        return(
      <Card key={anime.mal_id} animename={anime.title} url={anime.images.jpg.image_url} anumber={data.length} index={index} anime={anime}/>
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