import React, { useContext } from "react";
import {DataContext} from "./Context";
import styled from "styled-components";

export default function Story()
{
  let data={};
  data=useContext(DataContext);

  const IMG=styled.img`
    border-radius: 15px;
    margin-left: 50px;
    margin-top: 50px;
  `
  const P=styled.p`
    color:rgba(255, 255, 255, 0.773);
    line-height: 1.7;
    margin-top: 50px;
  `
  const DIV=styled.div`
    display: grid;
    grid-template-columns: 0.2fr 0.5fr;
    column-gap: 40px;
  `

  return(
    <DIV>
      {data.images && data.images.jpg && (
        <IMG src={data.images.jpg.image_url}/>
      )}
      <P>{data.synopsis}</P>
    </DIV>
  );
}