import styled from "styled-components";

export const Section=styled.div`
  height:50vw;
  width:100vw;
  position:relative;
`
export const Img=styled.img`
  width:100%;
  height:100%;
  position:absolute;
`
export const Content=styled.div`
  display:flex;
  flex-direction:column;
  background-color:#1F1C25;
  border-radius:150px;
  position:absolute;
  width:280px;
  height:300px;
  left:10%;
  top:50%;
  justify-content:center;
  align-items:center;
  transform: translateY(-50%);
`
export const Error=styled.p`
  color:#FF7528;
  font-size:50px;
  margin-bottom:10px;
  margin-top:0px;
  font-weight:bold;
`
export const ErrorMessage=styled.h5`
  color:#FF7528;
  font-size:20px;
  font-family:sans-serif;
  margin-bottom:10px;
  margin-top:0px;

`
export const Info=styled.p`
  color:#fff;
  font-size:15px;
  font-family:sans-serif;
  margin-top:5px;
`