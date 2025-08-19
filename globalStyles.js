import { createGlobalStyle } from "styled-components";

const GlobalStyle=createGlobalStyle`

  body{
    width: 100%;
    height: 100%;
    margin:0;
    padding:0;
    background-color: #11161d;
    overflow-x: hidden;
  }
  html{
    margin:0;
    padding:0;
    width: 100%;
    height: 100%;
    background-color: #11161d;
    overflow-x: hidden;
  }
  #root{
    width: 100%;
    height:100%;
  }
`
export default GlobalStyle;