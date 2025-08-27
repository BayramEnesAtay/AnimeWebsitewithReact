import styled from "styled-components";
import {keyframes} from "styled-components";


export const SkeletonSlide=keyframes`
  from {
    left: -0px;;
  }
  to {
    left: calc(100%);
  }

`

export const Section=styled.div`
  display:flex;
  flex-direction:column;
  border-radius:15px;
  background-color:#d2c6c6ef;
  position:relative;
  &::before{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 100%;
    box-shadow: 0 0 15px 2.5px rgba(255, 255, 255, 0.2);
    animation: ${SkeletonSlide} 2s infinite ease-in-out;
  }
`
export const AnimeImg=styled.img`
  background-color:#8f9395ff;
  border-top-left-radius:15px;
  border-top-right-radius:15px;
  width:100%;
  height:260px;
  
`
export const CardContent=styled.div`
  display:flex;
  flex-direction:column;
  border-bottom-left-radius:15px;
  border-bottom-right-radius:15px;
  width:100%;
  height:120px;
  background-color:#d2c6c6ef;
  
  &::before{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 100%;
   box-shadow: 0 0 15px 2.5px rgba(255, 255, 255, 0.2);
    animation: ${SkeletonSlide} 2s infinite ease-in-out;
  }
`
export const AnimeName=styled.h6`
  background-color:#8f9395ff;
  width:188px;
  height:22px;
  margin-left:15px;
  padding:0px;
  margin-top:10px;
  margin-bottom:0px;
`
export const GenreDiv=styled.div`
  display:flex;
  flex-direction:row;
  column-gap:5px;
  width:188px;
  height:17px;
  margin-left:15px;
  margin-top:15px;
  &::before{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 100%;
    box-shadow: 0 0 15px 2.5px rgba(255, 255, 255, 0.2);
    animation: ${SkeletonSlide} 2s infinite ease-in-out;
  }
`
export const Genres=styled.span`
  background-color:#8f9395ff;
  border-radius:7.5px;
  width:45px;
  height:17px;
  
`
export const Bottom=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width:188px;
  height:16px;
  margin-top:15px;
  margin-bottom:15px;
  margin-left:15px;
  &::before{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 100%;
    box-shadow: 0 0 15px 2.5px rgba(255, 255, 255, 0.2);
    animation: ${SkeletonSlide} 2s infinite ease-in-out;
    }
`
export const Episode=styled.span`
  background-color:#8f9395ff;
  width:70px;
  height:16px;
  
`
export const Year=styled.span`
  width:34px;
  height:16px;
  background-color:#8f9395ff;
  
`