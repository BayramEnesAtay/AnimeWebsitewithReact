import React from "react";
import {Widget,Container1,HeroSection,HeroParagrafh,Features,RatingSpan as CountSpan, CommuntiySpan as FilterSpan, AwardSpan as TagSpan,Star as Grid,Award as Tag,AwardIcon as TagIcon} from "../TopRatedPage/Styled";
import { MdOutlineGridOn } from "react-icons/md";
import { MdOutlineFilterAlt } from "react-icons/md";
import {Filter} from "./Styled";
import { GoTag } from "react-icons/go";

const GenrePage=()=>{

  return(
      <Widget>
        <Container1>
          <TagIcon bg="#CE38B5"><GoTag /></TagIcon>
          <HeroSection color="#F8328F">Explore by Genres</HeroSection>
          <HeroParagrafh>Discover anime by your favorite genres.From action-packed adventures to <br/>heartwarming slice-of-life stories</HeroParagrafh>
        </Container1>
        <Features>
          <CountSpan><Grid color="#AD46FF"><MdOutlineGridOn /></Grid> 35+ Genres</CountSpan>
          <FilterSpan><Filter color="#F6339A"><MdOutlineFilterAlt /></Filter> Smart Filtering
          </FilterSpan>
          <TagSpan>
            <Tag color="#FA2057"><GoTag /></Tag> Curated Collections
          </TagSpan>
        </Features>
      </Widget>
    );

}
export default GenrePage;