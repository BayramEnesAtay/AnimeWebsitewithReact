import React from "react";
import {Widget,Container1,HeroSection,HeroParagrafh,Features,RatingSpan, CommuntiySpan, AwardSpan,Star,Award,AwardIcon} from "./Styled";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import IconButton from '@mui/material/IconButton';

const TopRatedPage=()=>{
  return(
    <Widget>
      <Container1>
        <AwardIcon bg="#FB8100">&#127894;</AwardIcon>
        <HeroSection color="#F9B500">Top Rated Anime</HeroSection>
        <HeroParagrafh>Discover the highest-rated anime series and movies , as rated by our <br/> community of anime enthusiasts</HeroParagrafh>
      </Container1>
      <Features>
        <RatingSpan><Star color="#FE9900">&#9734;</Star> 8.0+ Rating</RatingSpan>
        <CommuntiySpan><IconButton size="small" color="#01BC7D" sx={{ ml: 0 ,padding:"0px"}}>
          <TrendingUpIcon  sx={{ ml: 0 ,padding:"0px",border:"none",color:"#01BC7D"}}/>
          </IconButton> Community Verified
        </CommuntiySpan>
        <AwardSpan>
          <Award color="#A242E4">&#127894;</Award> Award Winners
        </AwardSpan>
      </Features>
    </Widget>
  );
}
export default TopRatedPage;