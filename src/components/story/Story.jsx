import React, { useContext } from "react";
import  DetailDataContext  from "../context/DetailDataContext";
import {StorySection,AnimeImg,StoryText} from './Styled';

const Story=()=>{
  let data={};
  data=useContext(DetailDataContext);

  return(
    <StorySection>
      {data.images && data.images.jpg && (
        <AnimeImg src={data.images.jpg.image_url}/>
      )}
      <StoryText>{data?.synopsis}</StoryText>
    </StorySection>
  );
}
export default Story;