import React, { useContext } from "react";
import '../Style/Overview.css';
import {DataContext} from'../Context'

export default function Overview()
{
  let data={}
  data=useContext(DataContext);

  return(
    <>
    <div className="overviewdiv">
      <div className="overviewdiv-item">&#128250; {data.type} { (data.episodes)} (Episodes) </div>
      <div className="overviewdiv-item">Score: {data.score}</div>
      <div className="overviewdiv-item">Rank: {data.rank}</div>
      {data.season && data.year && (
        <div className="overviewdiv-item">&#128197; {data.season} {data.year}</div>
      )}
      {data.studios &&(
        <div className="overviewdiv-item" id="lastchild" > {data.studios[0].name} Studio</div>
      )}
    </div>  
    <div className="overviewdiv2"> 
      <h4 className="title2">{data.title}</h4>
      {data.images && data.images.jpg && (
        <img src={data.images.jpg.image_url} className="childimg2"/>
      )}
    </div>
    </>
  );
}