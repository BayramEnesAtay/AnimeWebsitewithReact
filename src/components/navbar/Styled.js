import React from 'react';
import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import {ThemeProvider} from "@mui/material/styles";
import { Typography } from '@mui/material';

const pacing= 1;


export const LeftSection=styled.div`
  display:flex;
  flex-direction:row;
  column-gap: ${pacing * 3}rem;
  padding-left:20px;
  margin-left:130px;
`
export const RightSection=styled.div`
  display:flex;
  flex-direction:row; 
  column-gap: ${pacing * 0.5}rem;
  padding-right:20px;
  margin-right:130px;
  margin-left:auto;
`
export const Icon_Typography=styled.div`
  display:flex;
  flex-direction:row; 
  column-gap: ${pacing * 0.5}rem;
  align-items: center;
  justify-content:center;
`