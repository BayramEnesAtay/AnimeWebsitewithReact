import { useNavigate,useParams} from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { DataContext } from "../Context";
import React from "react";
import MoreInfopageContent from "../MoreInfopageContent";
import {Title,TitleJapanese,MenuList,SectionButton,MenuItem,Navbar,DetailHeader} from "./Style";

const MoreInfopage=()=>{ 
  const navigation=useNavigate();
  let {id}=useParams();
  const [data,setdata]=useState({});

  return(
    <DetailHeader>
      <MoreInfopageContent id={id} setdata={setdata}/>
      <Title >{data.title}</Title>
      <TitleJapanese >{data.title_japanese}</TitleJapanese>
      <Navbar>
        <MenuList >
            <MenuItem >
              <SectionButton  onClick={()=>navigation(`/anime/${data.mal_id}`)} > OVERVIEW</SectionButton>
            </MenuItem>
          
            <MenuItem>
              <SectionButton onClick={()=>navigation("story")}> STORY</SectionButton>
            </MenuItem>

            <MenuItem >
              <SectionButton > COMMENTS</SectionButton>
            </MenuItem>
        </MenuList>
      </Navbar>
      <DataContext.Provider value={data}>
        <Outlet />
      </DataContext.Provider>
    </DetailHeader>
);
}
export default MoreInfopage;