import React, { useContext } from "react";
import Card from '../card';
import {Content} from "./Styled";
import HomeDataContext from "../context/HomeDataContext";
import MainPageSkeleton from "../skeleton/MainPageSkeleton";
import NotFound from "../notfoundpage/NotFoundAnime";


const AnimeList=()=>{
  const {data,loading,sortType,topData,NavbarClick,topYear}=useContext(HomeDataContext);
  let sortedData;
  let reservedata;

  if(NavbarClick==="Browse")
    reservedata=data;
  else if(NavbarClick==="New Releases")
    reservedata=topYear;
  switch(sortType){
    case "Title":{
      sortedData=reservedata.toSorted((a,b)=>
      a.title.localeCompare(b.title)
    );
    }break;
    case "Rating":{
      sortedData=reservedata.toSorted((a,b)=>{
        return(b.score-a.score);
      }
      
    );
    }break;
    case "Year":{
      sortedData=reservedata.toSorted((a,b)=>{
        return(b.year-a.year);
      })
    }break;
    case "Episodes":{
      sortedData=reservedata.toSorted((a,b)=>{
        return(b.episodes-a.episodes);
      })
    }break;
  }

return(
  <>
    <Content>
    {loading &&(
      Array.from({length:10},(_,index)=><MainPageSkeleton key={index}/>)
    )}

    {!loading && !sortType&& NavbarClick==="Browse" &&data?.map((anime,index)=>{
      return(
      <Card key={anime.mal_id} animename={anime.title} url={anime.images.jpg.image_url}  index={index} anime={anime}/>
      )
    })}

    {!loading && !sortType && NavbarClick==="Top Rated" &&topData?.map((anime,index)=>{
      return(
      <Card key={anime.mal_id} animename={anime.title} url={anime.images.jpg.image_url} index={index} anime={anime}/>
      )
    })}

    {!loading && !sortType && NavbarClick==="New Releases" &&topYear?.map((anime,index)=>{
      return(
      <Card key={anime.mal_id} animename={anime.title} url={anime.images.jpg.image_url} index={index} anime={anime}/>
      )
    })}

    {!loading && sortType && sortedData?.map((anime,index)=>{
        return(
      <Card key={anime.mal_id} animename={anime.title} url={anime.images.jpg.image_url} index={index} anime={anime}/>
    )})
    }
    
    </Content>
    {(!loading && NavbarClick==="Browse" && data?.length===0) && (
      <NotFound />
    )}
    {(!loading && NavbarClick==="New Releases" && topYear?.length===0) && (
      <NotFound />
    )}
    </>
  
);
}
export default AnimeList;