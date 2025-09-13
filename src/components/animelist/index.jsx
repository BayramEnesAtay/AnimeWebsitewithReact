import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Card from '../card';
import {Content} from "./Styled";
import HomeDataContext from "../context/HomeDataContext";
import MainPageSkeleton from "../skeleton/MainPageSkeleton";
import NotFound from "../notfoundpage/NotFoundAnime";


const AnimeList=()=>{
  const {data,loading,setOpenFilters,sortType,topData,NavbarClick,topYear,dataForGenres,selectedGenreId,browseGenreId,setbrowseGenreId,setLoading,pagecount}=useContext(HomeDataContext);
  const [browseGenreData,setbrowseGenreData]=useState([]);//this is the data for the genres in browse page.
  let sortedData;
  let reservedata;

  useEffect(()=>{

    if(NavbarClick==="Browse" && browseGenreId)
      {
        try{
          setLoading(true);
        setbrowseGenreData(data.filter(anime=>anime?.genres?.some(g=>g.mal_id===browseGenreId)));
        }
        finally{
          setTimeout(()=>{
            setLoading(false);
          },3000)
        }
      }

  },[NavbarClick,browseGenreId,data])

  useEffect(()=>{
    
    setbrowseGenreId(null);
    setOpenFilters(false);
  },[pagecount,NavbarClick])
  

  if(NavbarClick==="Browse")
    reservedata=data;
  else if(NavbarClick==="New Releases")
    reservedata=topYear;
  if(NavbarClick==="Browse" || NavbarClick==="New Releases")
  {
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
  }
  const browsedata = (NavbarClick === "Browse" && browseGenreId) ? browseGenreData : data;
return(
  <>
    <Content>
    {loading &&(
      Array.from({length:10},(_,index)=><MainPageSkeleton key={index}/>)
    )}

    {!loading && !sortType&& NavbarClick==="Browse" &&browsedata?.map((anime,index)=>{
      return(
      <Card key={anime.mal_id} animename={anime.title} url={anime.images.jpg.image_url}  index={index} anime={anime}/>
      )
    })}

    {!loading && NavbarClick==="Top Rated" &&topData?.map((anime,index)=>{
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

    {!loading && NavbarClick==="Genres"&& selectedGenreId &&dataForGenres?.map((anime,index)=>{
      return(
      <Card key={anime.mal_id} animename={anime.title} url={anime.images.jpg.image_url}  index={index} anime={anime}/>
      )
    })}
    
    </Content>
    {(!loading && NavbarClick==="Browse" && data?.length===0) && (
      <NotFound message="Anime Not Found"/>
    )}
    {(!loading && NavbarClick==="Browse" && browseGenreId &&browseGenreData?.length===0) && (
      <NotFound message="No anime found for this genre."/>
    )}
    {(!loading && NavbarClick==="New Releases" && topYear?.length===0) && (
      <NotFound message="Anime Not Found"/>
    )}
    {(!loading && NavbarClick==="Genres" && dataForGenres?.length===0) && (
      <NotFound message="Please select a genre to see anime"/>
    )}
    </>
  
);
}
export default AnimeList;