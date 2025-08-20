import React from "react";
import { Container1, HeroParagrafh, HeroSection,Features ,Widget} from "./Styled";
import Chip from '@mui/material/Chip';  
import DoneIcon from '@mui/icons-material/Done';
const Section=()=>{

  return(
    <Widget>
      <Container1>
        <HeroSection>Discover Amazing Anime</HeroSection>
        <HeroParagrafh>Explore thousands of anime series, from classic masterpieces to the latest releases.<br/> Find your next favorite story.</HeroParagrafh>
      </Container1>
      <Features>
        <Chip label="10,000+ Anime"variant="outlined" color="success" size="small"deleteIcon={<DoneIcon />}/>
        <Chip label="Daily Updates"variant="outlined" color="success" size="small" deleteIcon={<DoneIcon />} />
        <Chip label="HD Quality"variant="outlined" color="success" size="small" deleteIcon={<DoneIcon />} />
      </Features>
    </Widget>
  );
}
export default Section;