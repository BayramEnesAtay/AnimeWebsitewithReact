import React from "react";
import{Section,AnimeImg,CardContent,AnimeName,GenreDiv,Genres,Bottom,Episode,Year} from "./styled";


const MainPageSkeleton=()=>{
  return(
    <Section>
      <AnimeImg/>
      <CardContent>
        <AnimeName/>
        <GenreDiv>
          <Genres/>
          <Genres/>
        </GenreDiv>
        <Bottom>
          <Episode/>
          <Year/>
        </Bottom>
      </CardContent>
    </Section>
  )
}
export default MainPageSkeleton;