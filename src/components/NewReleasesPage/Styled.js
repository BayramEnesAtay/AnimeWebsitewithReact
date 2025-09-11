import styled from "styled-components";

export const ChargeIcon=styled.div`
  color:#fff;
  display:flex;
  margin-bottom:5px;
  background-color:#00A786;
  height:50px;
  width:50px;
  border-radius:25px;
  font-size:30px;
  justify-content:center;
  align-items:center;
`
export const ClockSpan=styled.span`
  display:flex;
  align-items:center;
  flex-direction:row;
  column-gap:5px;
`
export const Clock=styled.span`
  color:${(props)=>props.color};
  font-size:16px;
`