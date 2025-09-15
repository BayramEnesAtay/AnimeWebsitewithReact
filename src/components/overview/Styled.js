import React from "react";
import styled from "styled-components";

export const Genres=styled.div`
  display:flex;
  flex-direction:column;
  margin-left:150px;
  margin-right:150px;
  margin-top:30px;
`
export const Paragrafh1=styled.h3`
  color:#fff;
  font-family:sans-serif;
  font-size:18px;
  margin-bottom:10px;
`
export const GenreTag=styled.span`
  color:#6366F1;
  font-family:sans-serif;
  background-color: #131325;
  border-radius:10px;
  font-size:10px;
  padding:6px 7px 6px 7px;
  margin-right:5px;
`
export const GenreTagRow=styled.div`
  display:flex;
  flex-direction:row;
  column-gap:5px;

`
export const LeftSection=styled.div`
  display:flex;
  flex-direction:column;
`
export const TrailerSection=styled.div`
  display:flex;
  flex-direction:column;
  margin-left:150px;
  margin-right:150px;
  margin-top:50px;
`
export const Trailer=styled.iframe`
  width:700px;
  height:400px;
  border-radius:30px;
`
export const RightSection=styled.div`
  display:flex;
  flex-direction:column;
  margin-top:30px;
  width:100%;
`
export const Information=styled.div`
  display:flex;
  flex-direction:column;
  background-color:#131317;
  border-radius:10px;
  width:90%;
  margin-right:0px;
  padding:21px 21px 21px 21px;
`
export const Paragrafh2=styled.h3`
  color:#fff;
  font-family:sans-serif;
  font-size:14px;
  margin-bottom:15px;
`
export const Section=styled.div`
  display:flex;
  flex-direction:row;
  column-gap:20px;
  justify-content:space-between;
  margin-right:150px;
  padding-bottom:20px;
`
export const Row=styled.div`
  display:flex;
  flex-direction:row;
  margin-bottom:10px;
  border-bottom: ${props=>props.border ?"1px solid #27272A ":"none"};
  padding:5px 0px 5px 5px;
`
export const Type=styled.div`
  display:flex;
  flex-direction:row;
  font-family:sans-serif;
  color:#71717A;
  font-size:12px;
`
export const Value=styled.span`
  color:#fff;
  font-family:sans-serif;
  font-size:12px;
  text-wrap: nowrap;
  margin-left:auto;
  justify-content: flex-end;
`
export const ScoreSection=styled.div`
  background-color:#151327;
  border-radius:10px;
  width:90%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:21px;
  margin-top:30px;
`
export const Score=styled.span`
  color:#6366F1;
  font-family:sans-serif;
  font-size:27px;
  font-weight:bold;
`
export const Paragrafh3=styled.p`
  font-family:sans-serif;
  font-size:13px;
  color:#71717A;
`