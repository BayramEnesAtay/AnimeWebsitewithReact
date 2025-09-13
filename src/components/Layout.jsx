import React from "react"
import { HomeDataProvider } from "./context/HomeDataContext";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <HomeDataProvider>
        <Navbar/>
        <Outlet />
      </HomeDataProvider>
      
    </>
  )
}
export default Layout;