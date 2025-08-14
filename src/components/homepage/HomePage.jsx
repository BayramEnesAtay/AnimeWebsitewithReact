import React from "react";
import { useState } from "react";
import Footer from "../footer/Footer";
import AnimeList from "../animelist/AnimeList";
import {Header,Input,SearchButton} from "./Style";
import useMainFetch from "../hooks/useMainFetch";

const HomePage=()=>{
  const [pagecount,setpagecount]=useState(1);
  const pagearray=[];
  const {data}=useMainFetch(pagecount);

  for(let i=1;i<=10;i++)
  {
    pagearray.push(i);
  }
  return(
    <> 
    <Header >
      <Input  placeholder="Looking for something specific? " type="text" />
      <SearchButton >Search</SearchButton>
    </Header>
    <AnimeList data={data} />
    <Footer pagearray={pagearray} setpagecount={setpagecount} />
    </>
   
  );
}
export default HomePage;