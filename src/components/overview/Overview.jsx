import React, { useContext } from "react";
import {DataContext} from'../Context'
import {OverviewContent,InfoItem,MainInfoPanel,Title,AnimeImg,ActionButtons,AddlistButton,LikeButton} from './Style';

const Overview=()=>{
  let data={}
  data=useContext(DataContext);

  return(
    <>
    <OverviewContent >
      <InfoItem>&#128250; {data.type} { (data.episodes)} (Episodes) </InfoItem>
      <InfoItem>Score: {data.score}</InfoItem>
      <InfoItem>Rank: {data.rank}</InfoItem>
      {data.season && data.year && (
        <InfoItem>&#128197; {data.season} {data.year}</InfoItem>
      )}
      {data.studios &&(
        <InfoItem> {data.studios[0].name} Studio</InfoItem>
      )}
    </OverviewContent>  
    <MainInfoPanel> 
      <Title>{data.title}</Title>
      {data.images && data.images.jpg && (
        <AnimeImg src={data.images.jpg.image_url}/>
      )}
      
    <ActionButtons>
      <AddlistButton>Add to List</AddlistButton>
      <LikeButton>&#x1F90D;</LikeButton> 
    </ActionButtons>
    <iframe src={data.trailer?.embed_url}frameBorder="0" width="200px" height="200px"></iframe>
    </MainInfoPanel>
    
    </>
  );
}
export default Overview;