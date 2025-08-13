import React from "react"
import styled from "styled-components"

export const OverviewContent=styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `
export const InfoItem=styled.div`
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
export  const MainInfoPanel=styled.div`
    display: flex;
    flex-direction: column;
    width:fit-content;
    margin-top: 20px;
  `
export  const Title=styled.h4`
    color:aquamarine;
    text-align: center;
  `
export  const AnimeImg=styled.img`
    border-radius: 15px;
    text-align: center;
    margin-top: 50px;
    width: 150px;
    margin-top: 0px;
  `
export  const ActionButtons=styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 8px;
    margin-top: 15px;
  `
export  const AddlistButton=styled.button`
    background-color: #3db4f2;
    border:none;
    flex-grow: 3;
    border-radius: 5px;
    cursor: pointer;
    font-size: 17px;
    color:white;
    padding: 5px;
  `
export  const LikeButton=styled.button`
    background-color: #EC294b;
    border:none;
    flex-grow: 0.5;
    border-radius: 5px;
    cursor: pointer;
  `