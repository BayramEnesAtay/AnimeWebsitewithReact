import React from "react";
import { SectionUpdate ,Topic,Motto, SectionTittle,Section} from "./styled";
import SearchIcon from '@mui/icons-material/Search';
import { Search,SearchIconWrapper ,StyledInputBase} from './styled';

const Search_Filterbar=()=>{
  
  return(
    <div>
    <div>
      <Search sx={{padding:0}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for anime,characters or genres..."
              inputProps={{ 'aria-label': 'search_filter' }}
            />
          </Search>
    </div>
    <Section>
      <SectionTittle>
        <Topic>Browse Collection</Topic>
        <Motto>Find your next favourite anime from our collection</Motto>
      </SectionTittle>
      <SectionUpdate>
        Updated daily
      </SectionUpdate>
    </Section>
    </div>
  );
}
export default Search_Filterbar;