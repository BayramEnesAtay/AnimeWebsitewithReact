import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import '../Style/MoreInfopage.css'
import { Outlet } from "react-router-dom";
import { DataContext } from "../Context";


export default function MoreInfopage()
{ 
  let {id}=useParams();
  const [data,setdata]=useState({});
  
  const navigation=useNavigate();

  useEffect(()=>{
    const url="https://api.jikan.moe/v4/anime/"+id;
       fetch(url)
        .then(Response=>Response.json())
        .then(json =>{
          setdata(json.data);
            
        });
  },[id]);
  
  return(
    <div>
      <h1 id="title">{data.title}</h1>
      <h3 id="alttitle">{data.title_japanese}</h3>
      <nav>
        <ul className="subNav">
            <li >
              <button className="selected" onClick={()=>navigation(`/anime/${data.mal_id}`)} > OVERVIEW</button>
            </li>
          
            <li>
              <button className="selected" onClick={()=>navigation("story")}> STORY</button>
            </li>

            <li >
              <button className="selected"> COMMENTS</button>
            </li>
        </ul>
      </nav>
      <DataContext.Provider value={data}>
        <Outlet />
      </DataContext.Provider>
    </div>
);
}