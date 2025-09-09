import React from "react";
import {Widget,Container1,HeroParagrafh,HeroSection,Features,RatingSpan as DateSpan, CommuntiySpan as TimeSpan, AwardSpan as ChargeSpan,Star as Date,Award as Charge} from "../TopRatedPage/Styled";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {ChargeIcon,ClockSpan,Clock} from"./Styled";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";

const NewReleasesPage=()=>{

  return(
    <Widget>
      <Container1>
        <ChargeIcon>
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="20" height="20" 
            fill="none" stroke="white" strokeWidth="2" 
            viewBox="0 0 24 24">
            <path d="M13 2 L3 14 H12 L11 22 L21 10 H12 L13 2 Z"/>
          </svg>
        </ChargeIcon>
        <HeroSection color="#00BDA4">New Releases</HeroSection>
        <HeroParagrafh>Stay up to date with the latest anime releases. Fresh content updated<br />regularly from recent years</HeroParagrafh>
      </Container1>
      <Features>
        <DateSpan><Date ><CiCalendar color="#00BC7D" /></Date>2020+ Releases</DateSpan>
        <TimeSpan>
          <ClockSpan><Clock color="#038076"><GoClock /></Clock>Fresh Content</ClockSpan>
        </TimeSpan>
        <ChargeSpan>
          <Charge color="#00B9DA">
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="15" height="15" 
              fill="none" stroke="#00B9DA" strokeWidth="2" 
              viewBox="0 0 24 24">
              <path d="M13 2 L3 14 H12 L11 22 L21 10 H12 L13 2 Z"/>
            </svg>
          </Charge>Latest Episodes
        </ChargeSpan>
      </Features>
    </Widget>
  );
}
export default NewReleasesPage;