import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App'

const Main=()=>{
  return(
    <App />
  );
}
export default Main;
const root=createRoot(document.getElementById('root'));
root.render(<App />);
