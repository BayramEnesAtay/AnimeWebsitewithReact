import * as React from 'react';
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { LeftSection,RightSection,Icon_Typography } from './Styled';
import HomeDataContext from '../context/HomeDataContext';
import { useNavigate } from 'react-router-dom';

const  Navbar=()=> {
  const {setNavbarClick}=useContext(HomeDataContext);
  const navigate=useNavigate();

  return (
    <Box sx={{ flexGrow: 1 ,position:"sticky",top:"0px",zIndex:2}}>
      <AppBar  sx={{ backgroundColor: "#0a0a0f"}} color="secondary" >
        <Toolbar  disableGutters sx={{paddingLeft:"0px",paddingRight:"0px",justifyContent:'space-around'}}>
          <LeftSection>
            <Icon_Typography>
              <IconButton
                size="large"
                color="inherit"
                sx={{ ml: 0 ,padding:"0px"}}
              >
              <img src="/favicon.ico" height="30px"/>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ fontWeight:"bold" }}>
                OtakuNes
              </Typography>
            </Icon_Typography>
            <Button onClick={()=>{setNavbarClick("Browse");navigate("/")}} color="inherit" size="small" sx={{
             textTransform: "none", color: "#71717a",padding:0, transition: "color 0.1s", "&:hover": {
              color: "#ffff"
            }
          }}>Browse</Button>
          <Button onClick={()=>{setNavbarClick("Top Rated");navigate("/top-rated")}} color="inherit" size="small" sx={{
             textTransform: "none", color: "#71717a",padding:0, transition: "color 0.1s", "&:hover": {
              color: "#ffff"
            }}} >Top Rated</Button>
          <Button onClick={()=>{setNavbarClick("New Releases");navigate("/new-releases")}} color="inherit" size="small" sx={{
             textTransform: "none", color: "#71717a",padding:0, transition: "color 0.1s", "&:hover": {
              color: "#ffff"
            }
          }} >New Releases</Button>
          <Button onClick={()=>{setNavbarClick("Genres");navigate("/genres")}} color="inherit" size="small" sx={{
             textTransform: "none", color: "#71717a",padding:0, transition: "color 0.1s", "&:hover": {
              color: "#ffff"
            }
          }} >Genres</Button>
          </LeftSection>
          <RightSection>
          <Button  size="small" onClick={()=>{navigate("/sign-in")}} sx={{ color:"#71717A",fontFamily:"sans-serif",fontSize:"13px",padding:0,textTransform: "none",borderRadius:"10px",'&:hover':{
            backgroundColor:"rgb(38, 38, 45)",
            color:"#fff",
            fontWeight:"bold",
          },transition:"background-color 0.3s ,color 0.3s, font-weight 0.3s" }}>Sign In</Button>
          <Button color="inherit"  onClick={()=>{navigate("/sign-up")}} sx={{ fontFamily:"sans-serif",fontSize:"13px",fontWeight:"bold",backgroundColor:"rgb(101, 105, 211)", padding:"7px 14px 7px 14px",textTransform: "none", borderRadius:"10px"}}>Sign Up</Button>
          </RightSection>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
