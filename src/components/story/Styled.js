import React from "react";
import styled from "styled-components";

export const Section=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin-top:30px;
  width:50%;
  margin-left:auto;
  margin-right:auto;
  row-gap:20px;
  padding-bottom:20px;
`
export const StoryDiv=styled.div`
  display:flex;
  flex-direction:column;
  background-color:#13111B;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-width:1px;
  border-color:#321C4A;
  border-radius:20px;
  overflow:hidden;
  padding:28px;
  
`
export const TopicDiv=styled.div`
  display:flex;
  flex-direction:row;
  column-gap:5px;
  justify-content:start;
  align-items:center;
  column-gap:10px;
`
export const Topic=styled.h3`
  font-size:17px;
  font-family:sans-serif;
  color:${props=>props.color};

`
export const Icon=styled.span`
  width:30px;
  height:30px;
  border-radius:15px;
  background-color:${props=>props.bg};
  color:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
`
export const StoryText=styled.p`
  color:#898f93;
  font-family:sans-serif;
  font-size:14px;
  line-height:2;
`
export const StoryDetail=styled.div`
  display:flex;
  flex-direction:column;
  padding:21px;
  width:40%;
  background-color:#10131C;
  border:1px solid #0C3544;
  border-radius:20px;
`
export const DetailRow=styled.div`
  display:flex;
  flex-direction:row;
  background-color:${props=>props.bg};
  border-radius:20px;
  margin-bottom:7px;
  padding:7px;
  border:2px solid ${props=>props.border};
`
export const Type=styled.span`
  color:#71717A;
  font-family:sans-serif;
  font-size:12px;
`
export const  Value=styled.span`
  color:${props=>props.color};
  font-family:sans-serif;
  font-weight:bold;
  font-size:12px;
   margin-left:auto;
  justify-content: flex-end;
`
export const BackgroundSection=styled.div`
  display:flex;
  flex-direction:column;
  background-color:#151218;
  border:1px solid #432E13;
  padding:21px;
  justify-content:center;
  border-radius:20px;
`
export const InnerSection=styled.div`
  padding:14px;
  background-color:#211717;
  border:1px solid #432E13;
  color:#fff;
  border-radius:20px;
`
export const Themes=styled.div`
  display:flex;
  flex-direction:column;
  border-radius:20px;
  border:1px solid #0C362E;
  background-color:#10131A;
  width:40%;
  padding:21px;
`
export const GenreDiv=styled.div`
  display:flex;
  flex-direction:column;
  row-gap:10px;

`
export const Title1=styled.span`
  color:#71717A;
  font-famiily:sans-serif;
  font-size:13px;
  margiin-bottom:7px;
`
export const Row=styled.div`
  display:flex;
  flex-direction:row;
  column-gap:10px;
  margin-bottom:7px;
`
export const GenreSpan=styled.span`
  font-size:10px;
  font-family:sans-serif;
  color:${props=>props.color};
  background-color:${props=>props.bg};
  border:1px solid ${props=>props.border};
  padding:2px 7px 2px 7px;
  border-radius:10px;
  overflow:hidden;
  text-wrap:nowrap;
`
export const Detail_Themes=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`