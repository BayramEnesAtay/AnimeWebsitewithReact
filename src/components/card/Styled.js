import styled from "styled-components";

export const AnimeCard=styled.div`
    margin-left: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    flex-wrap: wrap;
    position: relative;
  `
export  const AnimeImg=styled.img`
    width: 80%;
    height: 80%;
    border-radius: 7px;
    z-index: 1;
  `
export  const AnimeName=styled.div`
    text-decoration: none;
    color:blue;
  `
export  const Info=styled.p`
    margin-left: 20px;
    margin-top: 5px;
    padding: 0px;
  `
export  const Tooltip=styled.div`
    display:flex;
    flex-direction: column;
    position: absolute;
    width: 120px;
    background-color: #384b5e;
    color: #fff;
    border-radius: 6px;
    top:5px;
    left:  90%;
    width:250px; 
    height:150px;
    pointer-events: none;
    margin: 0px;
    visibility: ${props=>props.st ? "visible" : "hidden"};
    z-index: ${ props=>props.st? 2 : 0};
  `
export const Genres=styled.span`
  font-size:10.5px;
  color:rgb(161, 161, 170);
  background-color:rgb(39, 39, 42);
  margin-right:5px;
  padding-left:3px;
  padding-right:3px;
  padding-top:3.5px;
  border-radius:7.5px;
  overflow:hidden;
  white-space:nowrap;
  transition:color 0.2s, background-color 0.2s;
  &:hover{
    color:#fff;
    background-color:#6366f1; 
    transition:color 0.2s background-color 0.2s;
  }
`
export const BonusGenres=styled.span`
  font-size:10.5px;
  padding:1.75px 7px;
  color:rgb(255, 255, 255);
  background-color:#0A0A0F;
  border-radius:7.5px;
`
export const Episode_Year=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-top:15px;
  margin-bottom:10px;
`
export const Episode=styled.span`
  color:#71717A;
`
export const Year=styled.span`
  color:#71717A;
`
export const Rating=styled.span`
  position:absolute;
  top:8px;
  right:8px;
  background-color:rgba(39, 39, 42, 0.69);
  color:rgb(255, 255, 255);
  border-radius:15px;
  font-size:12px;
  padding-top:3px;
  padding-bottom:3px;
  padding-right:6px;
  padding-left:6px;
`
export const PlayIcon=styled.span`
  opacity:0;
  position:absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -10%);
  font-size:25px; 
  padding-top:8px;
  padding-bottom:8px;
  padding-left:13px;
  padding-right:13px;
  border-radius:25px;
  color:rgb(255, 255, 255);
  font-family:sans-serif;
  background-color:oklab(0.585342 0.0253079 -0.202452 / 1);
  transition: opacity 0.3s;
`
export const GradientDiv=styled.div`
  opacity:0;
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:100%;
  width:108%;
  background-image: linear-gradient(to top,rgba(0,0,0,0.6),transparent);
`