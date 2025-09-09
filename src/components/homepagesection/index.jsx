import React from "react";
import { Container1, HeroParagrafh, HeroSection,Features ,Widget,Box} from "./Styled";
import { TbPointFilled } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { AwardIcon as SearchIcon } from "../TopRatedPage/Styled";

const Section=()=>{

  return(
    <Widget>
      <Container1>
        <SearchIcon bg="#9810FA"><FiSearch /></SearchIcon>
        <HeroSection>Discover Amazing Anime</HeroSection>
        <HeroParagrafh>Explore thousands of anime series, from classic masterpieces to the latest releases.<br/> Find your next favorite story.</HeroParagrafh>
      </Container1>
      <Features>
        <Box><TbPointFilled color="#039B69" fontSize="15px"/>10,000+ Anime</Box>
        <Box><TbPointFilled color="#2466CB" fontSize="15px"/>All Years</Box>
        <Box><TbPointFilled color="#993EE0" fontSize="15px"/>All Ratings</Box>
      </Features>
    </Widget>
  );
}
export default Section;