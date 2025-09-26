import React from "react";
import {Section,GeneralSection,Title,Logo,Text,Motto,LogIn,Email,Label,Input,Mail_Icon,Icon,LockIcon,Button,OrSection,Pargfh,Google,FaceBook,Buttons, InnerDiv, P2,P1,Footer,Img}from "./styled";
import { FaLock } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import SignInImage  from "../../images/SignInImage.jpg"

const SignIn=()=>{
  return(
    <>
  <Img src={SignInImage}/>
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
        <Email>
          <Label>Password</Label>
          <Mail_Icon>
            <LockIcon/>
            <Input type="password"  placeholder="Enter your password" />
          </Mail_Icon>
        </Email>
        <Button>
          Sign In
        </Button>
        <OrSection>
          <Pargfh>OR CONTINUE WITH</Pargfh>
        </OrSection>
        <Buttons>
          <Google><InnerDiv><FaGoogle />Google</InnerDiv></Google>
          <FaceBook><InnerDiv><FaFacebook />Facebook</InnerDiv></FaceBook>
        </Buttons>
        <Footer>
          <P1>Don&apos;t have an account?</P1>
          <P2>Sign up</P2>
        </Footer>
      </LogIn>
    </Section>
  </GeneralSection>
  </>
  );
  
}
export default SignIn;