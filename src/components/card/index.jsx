import React, { useEffect, useState } from "react";
import {AnimeCard,AnimeImg,AnimeName,Info,Tooltip,Genres,BonusGenres,Episode_Year,Episode,Year,Rating} from "./Styled";
import DetailPage from "../detailpage";
import { useNavigate } from "react-router-dom";
import { TooltipReducer } from "../reducer/TooltipReducer";
import Muicard  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


const  Card=({animename,url,anumber,index,anime}) =>{

  
  const [genres,setGenres]=useState([]);

  useEffect(()=>
  {
    if(anime?.genres)
    {
      setGenres(anime.genres);
    }
  })

  //const [showtooltip,dispatch]=useReducer(TooltipReducer,Array(anumber).fill(false));
  const navigate=useNavigate();

  /*const handlehover=(i)=>{
    dispatch({
      type:"onhover",
      payload:i
    })
  }

  const handleoffhover=(i)=>{
    dispatch({
      type:"ofhover",
      payload:i
    })
  }*/

  const onCardClik=()=>navigate(`/anime/${anime.mal_id}`);
  
  
  return(
  
    <Muicard sx={{ maxWidth: 220,padding:0,cursor:"pointer",borderRadius:"15px",borderColor:" #27272a",overflow:"hidden"} }>
      <CardActionArea onClick={onCardClik} sx={{position:"relative"}}>
        <CardMedia 
          component="img"
          height="260"
          image={url}
          alt="anime image"
        />
        <Rating>
          &#11088;{anime.score}
        </Rating>
        <CardContent sx={{backgroundColor:"#12121a", padding:"16px"} }  >
          <Typography sx={{padding:0,margin:0,marginBottom:"15px"}} gutterBottom variant="h6" component="div" overflow="hidden" textOverflow="ellipsis" fontSize="14px" maxHeight="45px" fontFamily="sans-serif" color="#FFF" >
            {animename}
            
          </Typography>
          {genres?.slice(0,2).map((g)=>{
            return(
              <Genres key={genres.mal_id} >{g.name}</Genres>
            )
          })}
          <BonusGenres>+1</BonusGenres>
          <Episode_Year>
            <Episode>
              {anime?.episodes} episodes
            </Episode>
              {anime && anime.year&&(
                <Year>&#x2022;{anime?.year}</Year>
              )}
          </Episode_Year>
          
        </CardContent>
        </CardActionArea>
    </Muicard>
    
  );
}
export default Card;