import React, { useContext } from "react";
import Card from '../card';
import {Content} from "./Styled";
import HomeDataContext from "../context/HomeDataContext";


const AnimeList=()=>{
  const {data}=useContext(HomeDataContext);
return(
    <Content>
    {data?.map((anime,index)=>{
      return(
      <Card key={anime.mal_id} animename={anime.title} url={anime.images.jpg.image_url} anumber={data.length} index={index} anime={anime}/>
      );
    })};
    </Content>
  
);
}
export default AnimeList;