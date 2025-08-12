import React, { useContext } from "react";
import {DataContext} from "./Context";

import '../Style/Story.css';

export default function Story()
{
  let data={};
  data=useContext(DataContext);

  return(
    <div className="storydiv">
      {data.images && data.images.jpg && (
        <img src={data.images.jpg.image_url} className="childimg"/>
      )}
      <p className="childparagrafh">{data.synopsis}</p>
    </div>
  );
}