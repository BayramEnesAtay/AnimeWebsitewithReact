import React from "react";
import { SectionUpdate ,Topic,Motto, SectionTittle,Section} from "./styled";
import SearchIcon from '@mui/icons-material/Search';
import { Search,SearchIconWrapper ,StyledInputBase,Search_Filter,FilterBtn,FilterButtonDiv,GeneralSection,Menu_Filter} from './styled';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Search_Filterbar=()=>{
  

  

  const [status, setStatus] = React.useState('Title A-Z');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return(
    <GeneralSection>
      <Section>
        <SectionTittle>
          <Topic>Browse Collection</Topic>
          <Motto>Find your next favourite anime from our collection</Motto>
        </SectionTittle>
        <SectionUpdate>
          Updated daily
        </SectionUpdate>
      </Section>

      <Search_Filter>
        <Search sx={{flex:0.8}}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            sx={{padding:0,borderRadius:"7px",borderColor:"#27272a80",border:"2px solid #27272a80"}}
            placeholder="Search for anime,characters or genres..."
            inputProps={{ 'aria-label': 'search_filter' }}
          />
        </Search>
        <Menu_Filter>
        <Box sx={{ flexGrow:1}}>
          <FormControl fullWidth >
            <Select
              
              value={status}
              onChange={handleChange}
              size="small"
              sx={{ flexGrow:1,backgroundColor:"oklab(0.242856 0.00730701 -0.0294515 / 0.6)",color:"#FFFF",fontFamily:"sans-serif",fontSize:13,borderRadius:"7px",borderColor:"#27272a80",border:"2px solid #27272a80"}}
            >
              
              <MenuItem value={"Title A-Z"}>Title A-Z</MenuItem>
              <MenuItem value={"Rating(High to Low)"}>Rating(High to low)</MenuItem>
              <MenuItem value={"Year(New to old)"}>Year(New to old)</MenuItem>
              <MenuItem value={"Episodes(Most to least)"}>Episodes(Most to least)</MenuItem>
            </Select>
          </FormControl>
      </Box>
      <FilterBtn >
        <FilterButtonDiv >
          <FilterAltIcon fontSize="small"/> Filters
        </FilterButtonDiv>
      </FilterBtn>
      </Menu_Filter>
      </Search_Filter>

    </GeneralSection>
  );
}
export default Search_Filterbar;