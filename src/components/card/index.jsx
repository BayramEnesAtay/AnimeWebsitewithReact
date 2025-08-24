import React, { useEffect, useState } from "react";
import {AnimeCard,AnimeImg,AnimeName,Info,Tooltip,Genres,BonusGenres,Episode_Year,Episode,Year,Rating,PlayIcon,GradientDiv} from "./Styled";
import DetailPage from "../detailpage";
import { useNavigate } from "react-router-dom";
import { TooltipReducer } from "../reducer/TooltipReducer";
import Muicard  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Gradient } from "@mui/icons-material";
import Box from '@mui/material/Box';

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
  
    <Muicard sx={{transition:"transform 0.3s ease",maxWidth: 220,padding:0,cursor:"pointer",border:"2px solid #27272a",borderRadius:"15px",borderColor:" #27272a",overflow:"hidden",backgroundColor:"#12121a",'&:hover':{
      transform:"scale(1.05)" ,
      borderColor:"oklab(0.585342 0.0253079 -0.202452 / 0.5)"
    },
    '&:hover .gradient':{
      opacity:1,
      transition:"opacity 0.3s"
    },
    '&:hover .MuiCardMedia-root':{
      transform:"scale(1.08)",
      
    }
    } }>
      <CardActionArea  onClick={onCardClik} sx={{position:"relative",'&:hover .MuiCardContent-root':{
        backgroundColor:"rgba(103, 96, 191, 0.58)",
        boxShadow:"inset 5px 5px  40px rgba(0, 0, 0, 0.4)",
        transition:"backgroundColor 0.3s, boxshadow 0.3s"
      },
      '&:hover .anime-name':{
        color:"oklab(0.585342 0.0253079 -0.202452 / 0.9)",
        transition:"color 0.3s"
      },
      '&:hover .play-icon':{
        opacity:1,
        transition:"opacity 0.3s"
      }
      }}>
        <Box sx={{position:"relative",overflow:"hidden"}}>
        <CardMedia 
          sx={{transition:"transform 0.3s ease" }}
          component="img"
          height="260"
          image={url}
          alt="anime image"
          style={{ borderTopLeftRadius:"15px", borderTopRightRadius:"15px" }}
        />
        <Rating>
          &#11088;{anime.score}
        </Rating>
        <PlayIcon className="play-icon">
          &#9655;
        </PlayIcon>
        <GradientDiv className="gradient" />
        </Box>
        <CardContent sx={{transition:"backgroundColor 0.3s boxShadow 0.3s",backgroundColor:"#12121a", padding:"16px",borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px",'&:hover':{
          
        } } }  >
          <Typography className="anime-name" sx={{transition:"color 0.3s",padding:0,margin:0,marginBottom:"15px"}} gutterBottom variant="h6" component="div" overflow="hidden" textOverflow="ellipsis" fontSize="14px" maxHeight="45px" fontFamily="sans-serif" color="#FFF" >
            {animename}
            
          </Typography>
          {genres?.slice(0,2).map((g)=>{
            return(
              <Genres key={genres.mal_id} className="genres" >{g.name}</Genres>
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