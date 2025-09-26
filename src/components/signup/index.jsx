import React from "react"
import {Section,GeneralSection,Title,Logo,Text,Motto,LogIn,Email,Label,Input,Mail_Icon,Icon,LockIcon,Button,OrSection,Pargfh,Google,FaceBook,Buttons, InnerDiv, P2,P1,Footer,Img,UserIcon}from "../singIn/styled";
import SignInImage  from "../../images/SignInImage.jpg"
import { FaLock } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp=()=>{
  const navigate=useNavigate();
   return(
    <>
      <Img src={SignInImage}/>
      <GeneralSection>
        
        <Section>
          <Title>
            <Logo bg="#00BB95">A</Logo>
            <Text>Create Account</Text>
            <Motto>Join the OtakuNes community today</Motto>
          </Title>
          <LogIn>

            <Email>
              <Label>Username</Label>
              <Mail_Icon>
                <UserIcon />
                <Input placeholder="Choose a username" />
              </Mail_Icon>
            </Email>

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

            <Email>
              <Label>Confirm Password</Label>
              <Mail_Icon>
                <LockIcon/>
                <Input type="password"  placeholder="Confirm your password" />
              </Mail_Icon>
            </Email>

            <Button  bg="#00BB95" hover="rgba(5, 155, 125, 1)">
              Create Account
            </Button>
            <OrSection>
              <Pargfh>OR CONTINUE WITH</Pargfh>
            </OrSection>
            <Buttons>
              <Google><InnerDiv><FaGoogle />Google</InnerDiv></Google>
              <FaceBook><InnerDiv><FaFacebook />Facebook</InnerDiv></FaceBook>
            </Buttons>
            <Footer>
              <P1>Already have an account?</P1>
              <P2 onClick={()=>{navigate("/sign-in")}}>Sign in</P2>
            </Footer>
          </LogIn>
        </Section>
      </GeneralSection>
    </>
    );

}
export default SignUp;