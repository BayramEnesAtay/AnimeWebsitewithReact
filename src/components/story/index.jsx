import React, { useContext } from "react";
import  DetailDataContext  from "../context/DetailDataContext";
import {Section,StoryDiv,Topic,TopicDiv,Icon, StoryText,StoryDetail,DetailRow,Type,Value, BackgroundSection, InnerSection,Themes,GenreDiv,Title1,Row, GenreSpan, Detail_Themes} from './Styled';
import { FaBookOpen } from "react-icons/fa6";
import { BsInfoCircle } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { BiCommentDots } from "react-icons/bi";

const Story=()=>{
  
  const {data,genres,themes,producers}=useContext(DetailDataContext);

  return(
    <Section>
      <StoryDiv>
        <TopicDiv>
          <Icon bg="#D547CC"><FaBookOpen /></Icon>
          <Topic color="#CB75EE">Story</Topic>
        </TopicDiv>
        <StoryText>
          {data?.synopsis&&
          data.synopsis}
        </StoryText>
      </StoryDiv>
      <Detail_Themes>
        <StoryDetail>
          <TopicDiv>
            <Icon bg="#0B92F9"><BsInfoCircle /></Icon>
            <Topic color="#00CFF5">Story Details</Topic>
          </TopicDiv>
          <DetailRow bg="#101B27" border="#0E2B38">
            {data?.episodes &&
            <>
              <Type>Episodes:</Type>
              <Value color="#01CAE9">{data.episodes}</Value>
            </>
            }
          </DetailRow>
          <DetailRow bg="#121928" border="#14233F">
            {data?.studios &&
            <>
              <Type>Studio:</Type>
              <Value color="#478EDF">{data.studios[0].name}</Value>
            </>
            }
          </DetailRow>
          <DetailRow bg="#101B27" border="#0E2B38">
            {data?.year &&
            <>
              <Type>Year:</Type>
              <Value color="#01CAE9">{data.year}</Value>
            </>
            }
          </DetailRow>
          <DetailRow bg="#121928" border="#14233F">
            {data?.source &&
            <>
              <Type>Source:</Type>
              <Value color="#478EDF">{data.source}</Value>
            </>
            }
          </DetailRow>
        </StoryDetail>
        <Themes>
          <TopicDiv>
            <Icon bg="#00BBA3"><BiCommentDots /></Icon>
            <Topic color="#01CE98">Genres & Themes</Topic>
          </TopicDiv>
          <GenreDiv>
            <Title1>Genres:</Title1>
            <Row>
              {genres?.map((Genre)=>
                <GenreSpan color="#917621" bg="#3F2E15" border="#77500F" key={Genre.mal_id}>{Genre}</GenreSpan>
              )}
            </Row>
            <Title1>Themes:</Title1>
            <Row>
              {themes?.map((Theme)=>
                <GenreSpan color="#55D0A3" bg="#11141A" border="#0C3B31" key={Theme.mal_id}>{Theme}</GenreSpan>
              )}
            </Row>
            <Title1>Producers:</Title1>
            <Row>
              {producers?.map((Producer)=>
                <GenreSpan color="#4BD1E2" bg="#10141B" border="#0B4251" key={Producer.mal_id}>{Producer}</GenreSpan>
              )}
            </Row>
          </GenreDiv>  
        </Themes>
      </Detail_Themes>
      <BackgroundSection>
        <TopicDiv>
          <Icon bg="#FF8500"><FiFileText /></Icon>
          <Topic color="#E8A602">Background</Topic>
        </TopicDiv>
        {data?.background &&
          <InnerSection>{data.background}</InnerSection>
        }
      </BackgroundSection>
    </Section>
  );
}
export default Story;