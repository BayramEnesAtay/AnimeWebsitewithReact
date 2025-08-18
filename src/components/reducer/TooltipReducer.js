import React from "react";

export const TooltipReducer=(showtooltip,action)=>{
  
  switch(action.type)
  {
    case 'onhover':{
      const nextshowtooltip=showtooltip.slice();
      nextshowtooltip[action.payload]=true;
      return nextshowtooltip;
    }
    case 'ofhover':{
      const nextshowtooltip=showtooltip.slice();
      nextshowtooltip[action.payload]=false;
      return nextshowtooltip;
    }
  }
}