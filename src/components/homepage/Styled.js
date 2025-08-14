import React from "react";
import styled from "styled-components";

const main_color="#de5499";

export  const SearchButton=styled.button`
    width: 70px;
    border-radius: 10px;
    border-color: ${main_color};
    color:#de5499;
    transition: color 0.4s , background-color 0.4s;
    &:focus{
      border:2px solid ${main_color};
      outline: none;
    }
    &:hover{
      background-color: ${main_color};
      color:white;
      cursor: pointer;
    }
  `
export  const Header=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top:5%;
    column-gap: 10px;
  `
export  const Input=styled.input`
    width: 210px;
    border-radius:9px ;
    border-color: ${main_color};
  `