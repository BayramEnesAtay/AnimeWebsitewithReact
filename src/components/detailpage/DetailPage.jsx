import { useNavigate,useParams} from "react-router-dom";
import useDetailFetch from '../../hooks/useDetailFetch';
import { Outlet } from "react-router-dom";
import { DataContext } from "../Context";
import React from "react";
import {Title,TitleJapanese,MenuList,SectionButton,MenuItem,Navbar,DetailHeader} from "./Styled";

const DetailPage=()=>{ 
  const navigation=useNavigate();
  let {id}=useParams();
  
  const {data}=useDetailFetch(id);

  return(
    <DetailHeader>
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
export default DetailPage;