import React from "react";
import { FooterCompany, FooterInfo, FooterMotto } from "./Styled";

const Footer=()=>{

  return(
    <FooterInfo>
      <FooterCompany>MyAnimeList</FooterCompany>
      <FooterMotto><p>Your gateway to the world of anime. Discover, explore, and enjoy.</p></FooterMotto>
    </FooterInfo>
  );
}
export default Footer;