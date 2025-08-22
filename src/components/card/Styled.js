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