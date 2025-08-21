import styled from "styled-components";
import { styled as muistyled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {ThemeProvider} from "@mui/material/styles";

export const Topic=styled.h2`
  font-family:sans-serif;
  font-weight:bold;
  color:#FFFF;
  margin:0px;
`
export const Motto=styled.p`
  font-family:sans-serif;
  color:#71717A;
  font-size:14px;
  margin:0;
  margin-top:3.5px;
`
export const SectionTittle=styled.div`
  display:flex;
  flex-direction:column;
  margin-right:28px;
  
`
export const SectionUpdate=styled.div`
  font-size:12.25px;
  font-family:sans-serif;
  color:#71717A;
  text-align:center;
  
`
export const Section=styled.div`
  display:flex;
  flex-direction:row;
  column-gap:50px;
  align-items:center;
  justify-content:center;
  padding-top:30px;
  padding-bottom:30px;
  justify-content: space-around;
`
export const Search = muistyled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha("#71717a", 0.15),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

export  const SearchIconWrapper = muistyled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    color: "#71717a",
    justifyContent: 'center',
  }));

export const StyledInputBase = muistyled(InputBase)(({ theme }) => ({
    color: 'rgb(255, 255, 255)',
    fontFamily:"sans-serif",
    fontSize:"12.25px",
    paddingTop:"5px",
    paddingBottom:"5px",
    width: '100%',
    backgroundColor:"oklab(0.242856 0.00730701 -0.0294515 / 0.3)",
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '50ch',
        
      },
    },  
  }));
  
