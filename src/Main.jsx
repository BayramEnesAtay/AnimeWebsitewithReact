import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import {Html,Body,Root} from '../index';
import App from './App'

const Main=()=>{
  return(
    <Html>
      <Body>
        <Root>
          <App />
        </Root>
      </Body>
    </Html>
  );
}
export default Main;
const root=createRoot(document.getElementById('root'));
root.render(<Main />);
