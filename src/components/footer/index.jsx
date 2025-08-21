import React from "react";
import { FooterCompany, FooterInfo, FooterMotto } from "./Styled";
import Box from '@mui/material/Box';
const Footer=()=>{

  return(
    <FooterInfo>
      
      <FooterCompany>
        <Box
        sx={{
          width: 21,
          height: 21,
          borderRadius: 2,
          bgcolor:"oklch(0.558 0.288 302.321) ",
        }}
      />
      MyAnimeList
      </FooterCompany>
      <FooterMotto><p>Your gateway to the world of anime. Discover, explore, and enjoy.</p></FooterMotto>
    </FooterInfo>
  );
}
export default Footer;