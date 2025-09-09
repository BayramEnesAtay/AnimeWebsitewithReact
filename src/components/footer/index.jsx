import React, { useContext } from "react";
import { FooterCompany, FooterInfo, FooterMotto } from "./Styled";
import Box from '@mui/material/Box';
import HomeDataContext from "../context/HomeDataContext";
const Footer=()=>{
  const {NavbarClick}=useContext(HomeDataContext);
  let bgcolor;

  if(NavbarClick==="Browse")
  {
    bgcolor="oklch(0.558 0.288 302.321)";
  }
  else if(NavbarClick==="Top Rated")
  {
    bgcolor="#FA7800";
  }
  else if(NavbarClick ==="New Releases")
  {
    bgcolor="#00A685";
  }
  return(
    <FooterInfo>
      
      <FooterCompany>
        <Box
        sx={{
          width: 21,
          height: 21,
          borderRadius: 2,
          bgcolor:bgcolor,
        }}
      />
      MyAnimeList
      </FooterCompany>
      <FooterMotto><p>Your gateway to the world of anime. Discover, explore, and enjoy.</p></FooterMotto>
    </FooterInfo>
  );
}
export default Footer;