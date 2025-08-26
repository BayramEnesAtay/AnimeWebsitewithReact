import React, { useContext } from "react";
import DetailDataContext from'../context/DetailDataContext'
import {OverviewContent,InfoItem,MainInfo,Title,AnimeImg,ActionButtons,AddlistButton,LikeButton,Trailer,MainInfoPanel,TrailerTopic} from './Styled';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Overview=()=>{
  let data={}
  data=useContext(DetailDataContext);

  return(
    <>
    <OverviewContent >
      <InfoItem>&#128250; {data?.type} { (data?.episodes)} (Episodes) </InfoItem>
      <InfoItem>Score: {data?.score}</InfoItem>
      <InfoItem>Rank: {data?.rank}</InfoItem>
      {data.season && data.year && (
        <InfoItem>&#128197; {data.season} {data.year}</InfoItem>
      )}
      {data.studios &&(
        <InfoItem> {data.studios[0]?.name} Studio</InfoItem>
      )}
    </OverviewContent>  
    <MainInfoPanel>
    <MainInfo> 
      <Title>{data?.title}</Title>
      {data.images && data.images.jpg && (
        <AnimeImg src={data.images.jpg.image_url}/>
      )}
      
    <ActionButtons>
      <AddlistButton>Add to List</AddlistButton>
      <LikeButton><FavoriteIcon fontSize="small"></FavoriteIcon></LikeButton> 
    </ActionButtons>
    </MainInfo>
    <Trailer>
      {data.trailer?.embed_url && (
        <TrailerTopic>Trailer</TrailerTopic>
      )}
      
      {data.trailer && data.trailer.embed_url &&(
      <iframe src={data.trailer.embed_url}frameBorder="0" width="300px" height="150px"></iframe>
      )}
    </Trailer>
    </MainInfoPanel>
    </>
  );
}
export default Overview;