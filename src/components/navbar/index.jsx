import * as React from 'react';
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

const  Navbar=()=> {
  const {setNavbarClick}=React.useContext(HomeDataContext);

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
              <img src="../../public/favicon.ico" height="30px"/>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ fontWeight:"bold" }}>
                OtakuNes
              </Typography>
            </Icon_Typography>
            <Button onClick={()=>setNavbarClick("Browse")} color="inherit" size="small" sx={{
             textTransform: "none", color: "#71717a",padding:0, transition: "color 0.1s", "&:hover": {
              color: "#ffff"
            }
          }}>Browse</Button>
          <Button onClick={()=>setNavbarClick("Top Rated")} color="inherit" size="small" sx={{
             textTransform: "none", color: "#71717a",padding:0, transition: "color 0.1s", "&:hover": {
              color: "#ffff"
            }}} >Top Rated</Button>
          <Button onClick={()=>setNavbarClick("New Releases")} color="inherit" size="small" sx={{
             textTransform: "none", color: "#71717a",padding:0, transition: "color 0.1s", "&:hover": {
              color: "#ffff"
            }
          }} >New Releases</Button>
          <Button onClick={()=>setNavbarClick("Genres")} color="inherit" size="small" sx={{
             textTransform: "none", color: "#71717a",padding:0, transition: "color 0.1s", "&:hover": {
              color: "#ffff"
            }
          }} >Genres</Button>
          </LeftSection>
          <RightSection>
          <Button color="inherit" size="small" sx={{  padding:0,textTransform: "none" }}><NotificationsNoneIcon /></Button>
          <Button color="inherit" sx={{  padding:0,textTransform: "none" }}><PersonIcon  /></Button>
          </RightSection>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
