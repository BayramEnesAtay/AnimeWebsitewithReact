import React, { useContext } from "react";
import DetailDataContext from'../context/DetailDataContext'
import {GenreTag,Genres,Paragrafh1,GenreTagRow, TrailerSection,LeftSection,Trailer,RightSection,Information,Paragrafh2,Section,Row,Type,Value, ScoreSection, Paragrafh3,Score} from './Styled';


const Overview=()=>{
  const {data,genres}=useContext(DetailDataContext)
  
  return(
    <>
    <Section>
      <LeftSection>
        <Genres>
          <Paragrafh1>Genres</Paragrafh1>
          <GenreTagRow>
            {genres?.map((Genre)=>
              <GenreTag key={Genre.mal_id}>{Genre}</GenreTag>
            )}
          </GenreTagRow>
        </Genres>
        <TrailerSection>
            <Paragrafh1>Trailer</Paragrafh1>
            
              <Trailer src={data.trailer?.embed_url} frameBorder="0"></Trailer>
            
        </TrailerSection>
      </LeftSection>
      <RightSection>
        <Information>
            <Paragrafh2>Information</Paragrafh2>
            <Row border={true}>
              <Type>Type</Type>
              {data?.type &&
                <Value>{data.type} ({data.episodes} Episodes)</Value>
              }
            </Row>
            <Row border={true}>
              <Type>Aired</Type>
              {data?.season && data.year&&
                <Value>{data.season} {data.year}</Value>
              }
            </Row>
            <Row border={true}>
              <Type>Studio</Type>
              {data?.studios&&
                <Value>{data.studios[0].name}</Value>
              }
            </Row>
            <Row border={true}>
              <Type>Duration</Type>
              {data?.duration&&
                <Value>{data.duration}</Value>
              }
            </Row>
            <Row border={false}>
              <Type>Popularity</Type>
              {data?.popularity&&
                <Value>#{data.popularity}</Value>
              }
            </Row>
        </Information>
        <ScoreSection>
          {data?.score &&
            <Score>{data.score}</Score>
          }
          <Paragrafh3>Based on user Ratings</Paragrafh3>
        </ScoreSection>
      </RightSection>
    </Section>
    </>
  );
}
export default Overview;