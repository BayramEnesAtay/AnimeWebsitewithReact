import React from "react";
import styled from "styled-components";
import BackgroundImage  from "../../images/BackgroundImage.jpg"

export const Background=styled.div`
  width:100%;
  height:300px;
  background-image:url(${BackgroundImage});
  background-size: 100% 300%;
  opacity:1;
  position:relative;
`
export const Info=styled.div`
  position:absolute;
  left:17%;
  bottom:30px;
`
export const FlexSection=styled.div`
  display:flex;
  flex-direction:row;
  column-gap:20px;
  
`
export const AnimeImg=styled.img`
  width:150px;
  height:200px;
  border-radius:7.5px;
  border: 2px solid #A9BFD4;
`
export const FlexItems=styled.div`
  display:flex;
  flex-direction:column;
  
`
export const AnimeName=styled.h1`
  color:#fff;
  margin-bottom:7px;
  font-size:30px;
  font-family:sans-serif;
  margin-top:25px;
`
export const Studio=styled.p`
  color:oklch(.872 .01 258.338);
  font-size:15px;
  font-family:sans-serif;
  margin-bottom:14px;

`
export const RatingSection=styled.div`
  display:flex;
  flex-direction:row;
  column-gap:7px;
  margin-bottom:14px;
`
export const Buttons=styled.div`
  display:flex;
  flex-direction:row;
  column-gap:10px;
`
export const AddToList=styled.button`
  flex-grow:0.5;
  padding:2px 10px;
  color:#fff;
  font-family:sans-serif;
  border-radius:9px;
  background-color:#6366F1;
  align-items:center;
  display:flex;
  transition: background-color 0.2s;
  &:hover{
    background-color:rgba(67, 70, 213, 1);
    transition: background-color 0.2s;
  }
  border:none;
  cursor:pointer;
`

export const Watch=styled.button`
  flex-grow:0.5;
  background-color:#111115;
  color:#fff;
  font-family:sans-serif;
  padding:2px 10px;
  border-radius:9px;
  border:1px solid #1E1E2D;
  cursor:pointer;
`
export const Rating=styled.span`
  background-color:#201214;
  color:#fff;
  padding:7px 9px;
  border-radius:9px;

`
export const Rank=styled.span`
  background-color:#201214;
  color:#fff;
  padding:7px 9px;
  border-radius:9px;
  align-items:center;
`
export const Heart=styled.span`
  font-size:25px;
  margin-right:5px;
  align-items:vertical;
`
export const GradientDiv=styled.div`
  opacity:1;
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:100%;
  width:108%;
  background-image: linear-gradient(to top,rgba(0,0,0,0.9),transparent);
`