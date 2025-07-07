import socialsList from '../db/dbSocials.json';

interface ArtistItemProps {
  artistname: string;
  cancommission: boolean;
  merchtags: Array<string>;
  numOfPages: number;
  twitter: string;
  facebook: string;
  vgen: string;
  blusky: string;
  instagram: string;
  tumblr: string;
}

//dont display if handlename is blank
function getSocialHandle(socialType : string, url : string, handleName : string){
  if(handleName == ""){
      return null;
    }
  else {
    return <li>{socialType} : <a href={url}>{handleName}</a></li>
  }
}


function ArtistItem(props: ArtistItemProps) {
  const srcRoot = '/images/catalogs/';
  const i = 1;
  
  return (
    <div>
      <p>{props.artistname}</p>
      {getSocialHandle('twitter', socialsList.twitter, props.twitter)}
      {getSocialHandle('facebook', socialsList.facebook, props.facebook)}
      {getSocialHandle('blusky', socialsList.blusky, props.blusky)}
      {getSocialHandle('tumblr', socialsList.tumblr, props.tumblr)}
      {getSocialHandle('vgen', socialsList.vgen, props.vgen)}
      {getSocialHandle('instagram', socialsList.instagram, props.instagram)}
      <img src={srcRoot + props.artistname + "-" + i + ".png"} alt={props.artistname + " catalog page " + props.numOfPages}/>
    </div>
  )
}

export default ArtistItem;