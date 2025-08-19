import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { Search,SearchIconWrapper ,StyledInputBase} from './Styled';


const  Navbar=()=> {


  return (
    <Box sx={{ flexGrow: 1 ,position:"sticky",top:"0px",zIndex:2}}>
      <AppBar  sx={{ backgroundColor: "#0a0a0f"}} color="secondary" >
        <Toolbar  disableGutters sx={{paddingLeft:"0px",paddingRight:"0px",}}>
          <IconButton
            size="large"
            color="inherit"
            sx={{ ml: 0 }}
          >
            <TrendingUpIcon  sx={{ ml: 0 ,paddingRight:"0px",paddingLeft:"0px"}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0}}>
            MyAnimeList
          </Typography>
          <Button color="inherit" size="small" sx={{
            flexGrow: 0.5, textTransform: "none", color: "#71717a", transition: "color 0.1s", "&:hover": {
              color: "#ffff"
            }}} >Top Rated</Button>
          <Button color="inherit" size="small" sx={{
            flexGrow: 0.5, textTransform: "none", color: "#71717a", transition: "color 0.1s", "&:hover": {
              color: "#ffff"
            }
          }} >New Releases</Button>
          <Button color="inherit" size="small" sx={{
            flexGrow: 0.5, textTransform: "none", color: "#71717a", transition: "color 0.1s", "&:hover": {
              color: "#ffff"
            }
          }} >Genres</Button>
          <Search sx={{ flexGrow: 0, }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button color="inherit" size="small" sx={{ flexGrow: 0, textTransform: "none" }}><NotificationsNoneIcon /></Button>
          <Button color="inherit"><PersonIcon  /></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
