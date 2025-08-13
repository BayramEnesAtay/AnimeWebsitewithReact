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