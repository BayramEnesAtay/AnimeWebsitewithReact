import styled from "styled-components";
import { GenreButtons } from "../searchandfilterbar/styled";
import { FaEnvelope } from "react-icons/fa";

export  const Section=styled.div`
  display:flex;
  flex-direction:column;
  background-color:#100E16;
  padding:5px 5px 5px 5px;
  border-radius:10px;
  width:25%;
  height:auto;
`
export  const GeneralSection=styled.div`
  display:flex;
  width:100%;
  height:100%;
  background-color:#0A0A0F;
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Title=styled.div`
  display:flex;
  flex-direction:column;
  row-gap:5px;
  justify-content:center;
  align-items:center;
  padding:21px;
`
export const Logo=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:10px;
  background-color:rgb(75, 209, 226);
  color:#fff;
  padding:11px 15px ;
  font-family:sans-serif;
  font-weight:bold;
`
export const Text=styled.h4`
  font-family:sans-serif;
  font-size:14px;
  margin-bottom:14px;
  color:#fff;
`
export const Motto=styled.p`
  font-family:sans-serif;
  font-size:14px;
  color:#71717A;
`
export const LogIn=styled.div`
  display:flex;
  flex-direction:column;
  row-gap:5px;
  padding:0px 21px 21px 21px;

`
export const Email=styled.div`
  display:flex;
  flex-direction:column;

`
export const Label=styled.label`
  color:#fff;
  font-family:sans-serif;
  font-weight:bold;
  font-size:12px;
  margin-bottom:7px;
`
export const Input=styled.input`
  padding:5px 12px 5px 35px;
  background-color:#161724;
  border:1px solid #1D1F27;
  border-radius:7px;
  width:100%;
  &:hover{
    outline: 3px solid rgb(62, 62, 168);
  }
  &:focus{
    outline: 3px solid rgb(62, 62, 168);
  }
`
export const Mail_Icon=styled.div`
  display:flex;
  flex-direction:row;
  position:relative;
  width:100%;
  justify-content:center;
  align-items:center;
`
export const Icon=styled(FaEnvelope)`
  position:absolute;
  color:#fff;
  left:2%;
`