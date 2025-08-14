import React from "react";
import styled from "styled-components";

const color="rgb(58, 58, 170)";

export const Title=styled.h1`
    color:white;
    font-family:Bitcount Prop Single;
    margin-top: 20px;
    margin-left: 20px;
  `
export  const TitleJapanese=styled.h3`
    color:#676767;
    font-family:Bitcount Prop Single;
    margin-top: 20px;
    margin-left: 20px;
  `
export  const MenuList=styled.ul`
    list-style: none;
    display:flex ;
    flex-direction: row;
    gap:100px;
    background-color: ${color};
  `
export  const SectionButton=styled.button`
    color:white;
    font-size: 15px;
    padding: 10px;
    font-family: Roboto Mono;
    background-color:${color};
    border:none;
    &:hover{
      cursor: pointer;
    }
  `
export const MenuItem=styled.li``
export const Navbar=styled.nav``
export const DetailHeader=styled.div``