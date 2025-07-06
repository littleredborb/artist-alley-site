interface SocialHandleProps{
  socialType: string;
  handleName: string;
  url: string;
}

// enum URLType {
//   facebook = "https://facebook.com/",
//   instagram = "https://instagram.com/",
//   blusky = "https://bsky.app/profile/", // NOTE: make sure to include .bsky.social
//   twitter = "https://twitter.com/",
//   vgen = "https://vgen.co/",
//   tumblr = "https://www.tumblr.com/"
// }

function SocialHandle({socialType = "instagram", handleName = "cocodraws", url = "https://instagram.com/"} : SocialHandleProps) {

  //dont display if handlename is blank
  if(handleName == ""){
    return null;
  }

  return (
    <li>{socialType} : <a href={url}>{handleName}</a></li>
  );
}

export default SocialHandle;
