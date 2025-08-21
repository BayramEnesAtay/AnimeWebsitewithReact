import styled from "styled-components";

export const FooterInfo=styled.div`
  display:flex;
  flex-direction:column;
  row-gap:5px;
  background-color:oklab(0.186127 0.00412791 -0.0156816 / 0.3);
  align-items:center;
  justify-content:center;
  border-top-style:solid;
  border-width:1px;
  border-color:oklab(0.273926 0.00152414 -0.00525527 / 0.4);
`
export const FooterCompany=styled.div`
  display:flex;
  flex-direction:row;
  column-gap:10px;
  padding-top:42px;
  color:#FFFF;
  font-family:sans-serif;
  font-weight:bold;
  font-size:14px;
`
export const FooterMotto=styled.div`
  text-align:center;
  color:#71717a;
  font-family:sans-serif;
  padding-bottom:42px;
  font-size:12.25px;
`