import React, { useContext } from "react";
import { DataContext } from "../Context";
import {StorySection,AnimeImg,StoryText} from './Style';

const Story=()=>{
  let data={};
  data=useContext(DataContext);

  return(
    <StorySection>
      {data.images && data.images.jpg && (
        <AnimeImg src={data.images.jpg.image_url}/>
      )}
      <StoryText>{data.synopsis}</StoryText>
    </StorySection>
  );
}
export default Story;