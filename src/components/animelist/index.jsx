import React, { useContext } from "react";
import Card from '../card';
import {Content} from "./Styled";
import HomeDataContext from "../context/HomeDataContext";
import MainPageSkeleton from "../skeleton/MainPageSkeleton";


const AnimeList=()=>{
  const {data,loading}=useContext(HomeDataContext);

return(
    <Content>
      {loading &&(
        Array.from({length:10},(_,index)=><MainPageSkeleton key={index}/>)
      )}
    {!loading && data?.map((anime,index)=>{
      return(
      <Card key={anime.mal_id+index} animename={anime.title} url={anime.images.jpg.image_url} anumber={data.length} index={index} anime={anime}/>
      )
    })}
    </Content>
  
);
}
export default AnimeList;