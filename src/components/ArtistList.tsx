import ArtistItem from './ArtistItem';
import artistList from '../db/dbArtists.json';

function convertCanCommissionToBoolean (cancomm : string){
    if(cancomm == "TRUE"){
      return true;
    }
    else {
      return false;
    }
  }

function convertMerchTagsToArray (merchtags : string){
  // sample result: "pokemon, ace attorney"
  // output: ["pokemon", "ace attorney"]

  let separateMerchTags = merchtags.split(',');
  console.log(separateMerchTags);
  return separateMerchTags;

}

function ArtistList() {

  const displayList = artistList.map(artist => {
    return (
      <div key={artist.id}>
        <ArtistItem 
          artistname={artist.artistname} 
          cancommission={convertCanCommissionToBoolean(artist.cancommission)}
          merchtags={convertMerchTagsToArray(artist.merchtags)}
          numOfPages={artist.numOfPages}
          twitter={artist.twitter} 
          facebook={artist.facebook}
          vgen={artist.vgen} 
          blusky={artist.blusky}
          instagram={artist.instagram} 
          tumblr={artist.tumblr}
          />
      </div>
      )
    }
  );

  return (
    <>{displayList}</>
  )
}

export default ArtistList;