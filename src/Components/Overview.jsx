import React, { useContext } from "react";
import styled from "styled-components";
import {DataContext} from'./Context'

export default function Overview()
{
  const OVERVIEWDIV=styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `
  const OVERVIEWDIV_ITEM=styled.div`
    display: flex;
    border-right: 1px solid #c18054;
    width: 200px;
    height:40px;
    color:white;
    text-align: center; 
    justify-content: center;
    flex-wrap: wrap;
    font-size: 17px;
    align-items: center;
    &:last-child{
      border-right: none;
      width: 200px;
      height:40px;
      color:white;
      text-align: center;
      flex-wrap: wrap;
      font-size: 17px;
      display: flex;
      justify-content: center;
    }
  `
  const OVERVIEWDIV2=styled.div`
    display: flex;
    flex-direction: column;
    width:fit-content;
    margin-top: 20px;
  `
  const H4=styled.h4`
    color:aquamarine;
    text-align: center;
  `
  const IMG=styled.img`
    border-radius: 15px;
    text-align: center;
    margin-top: 50px;
    width: 150px;
    margin-top: 0px;
  `
  const ADDTOLISTANDFAVOURITEBTN=styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 8px;
    margin-top: 15px;
  `
  const ADDLISTBTN=styled.button`
    background-color: #3db4f2;
    border:none;
    flex-grow: 3;
    border-radius: 5px;
    cursor: pointer;
    font-size: 17px;
    color:white;
    padding: 5px;
  `
  const FAVOURITEBTN=styled.button`
    background-color: #EC294b;
    border:none;
    flex-grow: 0.5;
    border-radius: 5px;
    cursor: pointer;
  `

  let data={}
  data=useContext(DataContext);

  return(
    <>
    <OVERVIEWDIV >
      <OVERVIEWDIV_ITEM>&#128250; {data.type} { (data.episodes)} (Episodes) </OVERVIEWDIV_ITEM>
      <OVERVIEWDIV_ITEM>Score: {data.score}</OVERVIEWDIV_ITEM>
      <OVERVIEWDIV_ITEM>Rank: {data.rank}</OVERVIEWDIV_ITEM>
      {data.season && data.year && (
        <OVERVIEWDIV_ITEM>&#128197; {data.season} {data.year}</OVERVIEWDIV_ITEM>
      )}
      {data.studios &&(
        <OVERVIEWDIV_ITEM> {data.studios[0].name} Studio</OVERVIEWDIV_ITEM>
      )}
    </OVERVIEWDIV>  
    <OVERVIEWDIV2> 
      <H4>{data.title}</H4>
      {data.images && data.images.jpg && (
        <IMG src={data.images.jpg.image_url}/>
      )}
    <ADDTOLISTANDFAVOURITEBTN>
      <ADDLISTBTN>Add to List</ADDLISTBTN>
      <FAVOURITEBTN>&#x1F90D;</FAVOURITEBTN> 
    </ADDTOLISTANDFAVOURITEBTN>
    </OVERVIEWDIV2>
    
    </>
  );
}