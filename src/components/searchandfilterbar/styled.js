import styled from "styled-components";
import { styled as muistyled } from '@mui/material/styles';
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
  padding-top:30px;
  padding-bottom:30px;
  justify-content: space-around;
  position:relative;
`
export const Search = muistyled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
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
    backgroundColor:"oklab(0.242856 0.00730701 -0.0294515 / 0.6)",
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '50ch',
        
      },
    },  
  }));

  export const Search_Filter=styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    column-gap:10px;
    
  `
  export const FilterBtn=styled.button`
    background-color:oklab(0.242856 0.00730701 -0.0294515 / 0.6);
    color:#FFFF;
    border:none;
    border-radius:5px;
    padding-top:5px;
    padding-bottom:5px;
    padding-left:10px;
    padding-right:10px;
    font-family:sans-serif;
    
  `
  export const FilterButtonDiv=styled.div`
    display:flex;
    flext-direction:row;
    column-gap:7px;
    justify-content:center;
    align-items:center;
    cursor:pointer;
  `
  
export const GeneralSection=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
`