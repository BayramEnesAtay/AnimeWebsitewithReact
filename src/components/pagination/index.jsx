import React from "react";
import { useContext } from "react";
import { Pagination1} from "./Styled";
import HomeDataContext from "../context/HomeDataContext";
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from "@mui/material";

const PaginationComp=()=>{
  const {setpagecount,pagecount}=useContext(HomeDataContext);
  const handleChange = (event,newPage) => {
    setpagecount(newPage);
  };

  return(
    <Pagination1>
      <Pagination   sx={{
    '& .MuiPaginationItem-root': {
      color: 'white',
      borderColor: 'white',
    }}}  color="secondary" count={1152} page={pagecount} siblingCount={1} showFirstButton  showLastButton  onChange={handleChange}/>
    </Pagination1>
  );
}
export default PaginationComp;