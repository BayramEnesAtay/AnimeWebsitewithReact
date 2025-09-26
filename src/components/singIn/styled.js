import styled from "styled-components";
import { GenreButtons } from "../searchandfilterbar/styled";
import { FaEnvelope,FaLock } from "react-icons/fa";


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
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
`
export const Img=styled.img`
  display:flex;
  width:100%;
  height:100%;
  filter:blur(8px);
  position:absolute;
  
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
  margin-bottom:14px;
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
  color:#fff;
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
export const LockIcon=styled(FaLock)`
  position:absolute;
  color:#fff;
  left:2%;
`
export const Button=styled.button`
  padding:7px 14px 7px 14px;
  font-family:sans-serif;
  font-size:13px;
  color:#fff;
  font-weight:bold;
  background-color:rgb(75, 209, 226);
  border-radius:10px;
  border:none;
  &:hover{
    background-color:rgba(43, 162, 177, 1);
  }
  transition:background-color 0.3s;
`
export const Pargfh=styled.p`
  color:#71717A;
  font-family:sans-serif;
  font-size:12px;
`
export const OrSection=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Buttons=styled.div`
  display:flex;
  flex-direction:row;
  column-gap:5px;
`

export const Google=styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:10px;
  flex-grow:0.5;
  background-color:#15131C;
  color:#71717A;
  font-family:sans-serif;
  border:none;
  margin-bottom:21px;
  padding:10px 15px 10px 15px;
`
export const FaceBook=styled(Google)``
export const InnerDiv=styled.div`
  display:flex;
  flex-direction:row;
  column-gap:10px;
  align-items:center;
`
export const Footer=styled.div`
  display:flex;
  flex-direction:row;
  font-family:sans-serif;
  justify-content:center;
  align-items:center;
`
export const P1=styled.p`
  color:#71717A;
  font-size:13px;

`
export const P2=styled.p`
  color:#CA4ADB;
  font-size:13px;
  cursor:pointer;
`