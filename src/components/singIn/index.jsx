import React from "react";
import {Section,GeneralSection,Title,Logo,Text,Motto,LogIn,Email,Label,Input,Mail_Icon,Icon}from "./styled";
import { CiMail } from "react-icons/ci";

const SignIn=()=>{
  return(
  <GeneralSection>
    <Section>
      <Title>
        <Logo>A</Logo>
        <Text>Welcome Back</Text>
        <Motto>Sign in to your OtakuNes account</Motto>
      </Title>
      <LogIn>
        <Email>
          <Label>Email</Label>
          <Mail_Icon>
            <Icon />
            <Input placeholder="Enter your email" />
          </Mail_Icon>
          
        </Email>
      </LogIn>
    </Section>
  </GeneralSection>
  );
  
}
export default SignIn;