import { useNavigate} from "react-router-dom";
import { Outlet } from "react-router-dom";
import DetailDataContext from "../context/DetailDataContext";
import React, { useContext } from "react";
import {Title,TitleJapanese,MenuList,SectionButton,MenuItem,Navbar,DetailHeader} from "./Styled";

const DetailPage=()=>{ 
  const navigation=useNavigate();
  const data=useContext(DetailDataContext);

  return(
    <DetailHeader>
      
      <Title >{data?.title}</Title>
      <TitleJapanese >{data?.title_japanese}</TitleJapanese>
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
      <Outlet />
    </DetailHeader>
);
}
export default DetailPage;