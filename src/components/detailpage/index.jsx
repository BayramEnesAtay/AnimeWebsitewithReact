import { useNavigate} from "react-router-dom";
import { Outlet } from "react-router-dom";
import DetailDataContext from "../context/DetailDataContext";
import React, { useContext } from "react";
import {Background,AnimeImg,AnimeName,AddToList,Watch,Studio,FlexItems,FlexSection,RatingSection,Rank,Rating,Info,Buttons,Heart,GradientDiv,NavBox, StoryBtn, OverviewBtn, CommentBtn} from "./Styled";
import Navbar from "../navbar";


const DetailPage=()=>{ 
  //const navigation=useNavigate();
  const data=useContext(DetailDataContext);
  const navigate=useNavigate();

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
              <Watch>&#9654; &nbsp; Watch Trailer</Watch>
            </Buttons>
          </FlexItems>
        </FlexSection>
      </Info>
      <GradientDiv />
    </Background>
    <NavBox>
      <OverviewBtn onClick={()=>navigate(`/anime/${data.mal_id}`)}>Overview</OverviewBtn>
      <StoryBtn onClick={()=>navigate("story")}>Story</StoryBtn>
      <CommentBtn >Comments</CommentBtn> 
    </NavBox>
    </>
  )
}
export default DetailPage;