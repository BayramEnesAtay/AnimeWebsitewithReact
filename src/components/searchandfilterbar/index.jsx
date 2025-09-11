import React, { useContext } from "react";
import { useState } from "react";
import { SectionUpdate ,Topic,Motto, SectionTittle,Section, InnerGenreFilter, Filter,GenreButtons,Genres, GenreSection, GenreTagButton} from "./styled";
import SearchIcon from '@mui/icons-material/Search';
import { Search,SearchIconWrapper ,StyledInputBase,Search_Filter,FilterBtn,FilterButtonDiv,GeneralSection,Menu_Filter,GenreFilter,LineSection,Line,Paragrafh} from './styled';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import HomeDataContext from "../context/HomeDataContext";
import { GoTag } from "react-icons/go";

const Search_Filterbar=()=>{
  
  const [openFilters,setOpenFilters]=useState(false);
  const [status, setStatus] = useState('Title A-Z');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const{setbrowseSearch,input,setInput,setSortType,GenreData,NavbarClick,input2,setInput2,setreleaseSearch}=useContext(HomeDataContext);

  return(
    <GeneralSection>
      <Section>
        {NavbarClick==="Browse" &&
        <SectionTittle>
          <Topic>Browse Collection</Topic>
          <Motto>Find your next favourite anime from our collection</Motto>
        </SectionTittle>
        }

        {NavbarClick==="Top Rated" &&
        <SectionTittle>
          <Topic>Highest Rated Animes</Topic>
          <Motto>The best anime series and movies.</Motto>
        </SectionTittle>
        }

        {NavbarClick==="New Releases" &&
        <SectionTittle>
          <Topic>Latest Anime Releases</Topic>
          <Motto>The newest anime series and movies from 2020 onwards</Motto>
        </SectionTittle>
        }

        {NavbarClick==="Genres" &&
        <SectionTittle>
          <Topic>Popular Genres</Topic>
          <Motto>Click on a genre to explore anime in that category</Motto>
        </SectionTittle>
        }
        
        {NavbarClick !=="Genres"&&
        <SectionUpdate>
          Updated daily
        </SectionUpdate>
        }

      </Section>
      {NavbarClick ==="Genres" &&
        <GenreSection>
          {GenreData&& GenreData
            .filter(genre=>genre.count >400)
            .map((Genre)=>{
              return(
                <GenreTagButton key={Genre.mal_id}><GoTag color="#5499DC"/>  {Genre.name}</GenreTagButton>
              )
            })}
        </GenreSection>
      }
      {(NavbarClick==="Browse" || NavbarClick==="New Releases")&&
      <Search_Filter>

        <Search sx={{flex:0.8}}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            sx={{padding:0,borderRadius:"7px",borderColor:"#27272a80",border:"2px solid #27272a80"}}
            placeholder="Search for anime..."
            inputProps={{ 'aria-label': 'search_filter' }}
            value={NavbarClick==="Browse" ? input:input2}
            onChange={(e)=>{
              {NavbarClick==="Browse" &&
                setInput(e.target.value);
                if(e.target.value.trim()==="")
                  setbrowseSearch(false);
                else if(NavbarClick==="New Releases")
                  setbrowseSearch(false);
                else
                  setbrowseSearch(true);
              }
              {NavbarClick==="New Releases" &&
                setInput2(e.target.value);
                if(e.target.value.trim()==="")
                  setreleaseSearch(false);
                else if(NavbarClick==="Browse")
                  setreleaseSearch(false);
                else
                  setreleaseSearch(true);
              }
            
            }}
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
              
              <MenuItem onClick={()=>setSortType("Title")} value={"Title A-Z"}>Title A-Z</MenuItem>
              <MenuItem onClick={()=>setSortType("Rating")} value={"Rating(High to Low)"}>Rating(High to low)</MenuItem>
              <MenuItem onClick={()=>setSortType("Year")} value={"Year(New to old)"}>Year(New to old)</MenuItem>
              <MenuItem onClick={()=>setSortType("Episodes")} value={"Episodes(Most to least)"}>Episodes(Most to least)</MenuItem>
            </Select>
          </FormControl>
      </Box>
      {NavbarClick==="Browse" &&
        <FilterBtn onClick={()=>setOpenFilters(!openFilters)} >
          <FilterButtonDiv >
            <FilterAltIcon fontSize="small"/> Filters
          </FilterButtonDiv>
        </FilterBtn>
      }
      </Menu_Filter>
      </Search_Filter>
      } 
        {openFilters && NavbarClick==="Browse" &&
          <GenreFilter>
            <InnerGenreFilter >
              <Filter>
                 <FilterAltIcon fontSize="small"/> Genre Filters
              </Filter>
              <GenreButtons>
                {GenreData&& GenreData.map((Genre,index)=>{
                  return(
                    <Genres key={index}>{Genre.name}</Genres>
                  )
                })}
              </GenreButtons>
            </InnerGenreFilter>
          </GenreFilter>
        }
      {NavbarClick==="Top Rated" && 
        <LineSection>
          <Paragrafh><strong>25</strong> anime found</Paragrafh>
          <Line />
        </LineSection>
      }
    </GeneralSection>
  );
}
export default Search_Filterbar;