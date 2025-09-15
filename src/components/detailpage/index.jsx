import { useNavigate} from "react-router-dom";
import { Outlet } from "react-router-dom";
import DetailDataContext from "../context/DetailDataContext";
import React, { useContext, useState } from "react";
import {Background,AnimeImg,AnimeName,AddToList,Watch,Studio,FlexItems,FlexSection,RatingSection,Rank,Rating,Info,Buttons,Heart,GradientDiv,NavBox, StoryBtn, OverviewBtn, CommentBtn,GeneralSection} from "./Styled";
import Navbar from "../navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const DetailPage=()=>{ 
  //const navigation=useNavigate();
  const {data,trailerRef}=useContext(DetailDataContext);
  const navigate=useNavigate();
  const location=useLocation();
  const [isSelected,setisSelected]=useState("overview");
  
  useEffect(()=>{
    if(location.pathname.endsWith("story"))
    {
      setisSelected("story");
    }
    else
    {
      setisSelected("overview");
    }
    
  },[location.pathname])

  return(
    <>
    <Navbar/>
    <Background>
      <Info>
        <FlexSection>
          <AnimeImg src={data?.images?.webp?.large_image_url} />
          <FlexItems>
            {data && data.title&&
              <AnimeName>{data.title}</AnimeName>
            }
            {(data && data.year || data.studio) &&
              <Studio>{data.year} &#x2022; {data?.studios[0].name}</Studio>
            }
            
            <RatingSection>
              {data && data.score&&
              <Rating>&#11088; {data.score}</Rating>
              }
              {data && data.rank && 
              <Rank>&#127942;Rank #{data.rank}</Rank>
              }
            </RatingSection>

            <Buttons>
              <AddToList><Heart>&#9825;</Heart>Add to List</AddToList>
              <Watch onClick={()=>{navigate(`/anime/${data.mal_id}`);setTimeout(()=>{trailerRef.current?.scrollIntoView({behavior:"smooth",block:"end"});},50)}}>&#9654; &nbsp; Watch Trailer</Watch>
            </Buttons>
          </FlexItems>
        </FlexSection>
      </Info>
      <GradientDiv />
    </Background>
    <GeneralSection>
      <NavBox>
        <OverviewBtn selected={isSelected==="overview"} onClick={()=>{navigate(`/anime/${data.mal_id}`);setisSelected("overview")}}>Overview</OverviewBtn>
        <StoryBtn selected={isSelected==="story"} onClick={()=>{navigate("story");setisSelected("story")}}>Story</StoryBtn>
        <CommentBtn >Comments</CommentBtn> 
      </NavBox>
    </GeneralSection>
    <Outlet />
    </>
  )
}
export default DetailPage;