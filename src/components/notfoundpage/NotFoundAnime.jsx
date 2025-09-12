import React from "react";
import {Section,Img,Content,Error,ErrorMessage,Info} from "./styled";
import NotFoundImg from "../../images/NotFound.jpg";

const NotFound=({message})=>{
  return(
    <Section>
      <Img src={NotFoundImg}/>
    <Content>
      <Error>404</Error>
      <ErrorMessage >{message}</ErrorMessage>
      <Info>Oops!</Info>
    </Content>
    </Section>
  )

}
export default NotFound;