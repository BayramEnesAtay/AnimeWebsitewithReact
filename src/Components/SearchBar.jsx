import React from "react";
import '../Style/SearchBar.css'
import API from "./API";

export default function SearchBar()
{
  return(
    <> 
    <div className="searchandbtn">
      <input className="input" placeholder="Looking for something specific? " type="text" />
      <button className="searchbtn">Search</button>
    </div>
    <API />
    </>
   
  );
}