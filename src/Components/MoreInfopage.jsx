import { useNavigate,useParams} from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { DataContext } from "./Context";
import styled from "styled-components";
import MoreInfopageContent from "./MoreInfopageContent";

export default function MoreInfopage()
{ 
  const color="rgb(58, 58, 170)";

  const navigation=useNavigate();
  let {id}=useParams();
  const [data,setdata]=useState({});

  const H1=styled.h1`
    color:white;
    font-family:Bitcount Prop Single;
    margin-top: 20px;
    margin-left: 20px;
  `
  const H3=styled.h3`
    color:#676767;
    font-family:Bitcount Prop Single;
    margin-top: 20px;
    margin-left: 20px;
  `
  const UL=styled.ul`
    list-style: none;
    display:flex ;
    flex-direction: row;
    gap:100px;
    background-color: ${color};
  `
  const BUTTON=styled.button`
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

  return(
    <div>
      <MoreInfopageContent id={id} setdata={setdata}/>
      <H1 >{data.title}</H1>
      <H3 >{data.title_japanese}</H3>
      <nav>
        <UL >
            <li >
              <BUTTON  onClick={()=>navigation(`/anime/${data.mal_id}`)} > OVERVIEW</BUTTON>
            </li>
          
            <li>
              <BUTTON onClick={()=>navigation("story")}> STORY</BUTTON>
            </li>

            <li >
              <BUTTON > COMMENTS</BUTTON>
            </li>
        </UL>
      </nav>
      <DataContext.Provider value={data}>
        <Outlet />
      </DataContext.Provider>
    </div>
);
}