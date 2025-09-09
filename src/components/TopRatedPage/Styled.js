import styled from "styled-components";
import HomeDataContext from "../context/HomeDataContext";

export const Container1=styled.div`
  display: flex;
  flex-direction:column;
  row-gap:0px;
  text-align:center;
  justify-content:center;
  align-items:center;
`
export const HeroSection=styled.h1`
  color:${(props)=>props.color};
  padding-top:0px;
  padding-bottom:0px;
  margin-top:0px;
  margin-bottom:0px;
  font-size: 3em;
  font-family: sans-serif;
`
export const HeroParagrafh=styled.p`
  color:#71717a;
  font-family: sans-serif;
  
`
export const Features=styled.div`
  display: flex;
  flex-direction:row;
  column-gap:20px;
  justify-content:center;
  align-items:center;
  margin-top:10px;
  color:#636268;
  font-family:sans-serif;
  font-size:12px;
`
export const RatingSpan=styled.span`
  display:flex;
  align-items:center;
  flex-direction:row;
  column-gap:5px;
`
export const CommuntiySpan=styled.span`
  display:flex;
  align-items:center;
  flex-direction:row;
  column-gap:5px;
`
export const AwardSpan=styled.span`
  display:flex;
  align-items:center;
  flex-direction:row;
  column-gap:5px;
`

export const Widget=styled.div`
  display:flex;
  flex-direction:column;
  column-gap:5px;
  margin-top:100px;
`
export const Star=styled.span`
  color:#FE9900;
  font-size:16px;
`
export const Award=styled.span`
  color:${(props)=>props.color};
  font-size:16px;
`
export const AwardIcon=styled.div`
  color:#fff;
  display:flex;
  margin-bottom:5px;
  background-color:${(props)=>props.bg};
  height:40px;
  width:40px;
  border-radius:20px;
  font-size:30px;
  justify-content:center;
  align-items:center;
`