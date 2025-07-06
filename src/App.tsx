import { useState } from 'react'
import './App.css'
import SocialHandle from './components/SocialHandle'
import artistList from './db/dbArtists.json'
import socialsList from './db/dbSocials.json'
import Artist from './components/Artist'
import Catalog from './components/Catalog'

function App() {

  const displayList = artistList.map(artist => {
    return (
      <div key={artist.id}>
        <Artist name={artist.artistname} />
        <SocialHandle socialType='twitter' handleName={artist.twitter} url={socialsList.twitter}/>
        <SocialHandle socialType='facebook' handleName={artist.facebook} url={socialsList.facebook}/>
        <SocialHandle socialType='blusky' handleName={artist.blusky} url={socialsList.blusky}/>
        <SocialHandle socialType='tumblr' handleName={artist.tumblr} url={socialsList.tumblr}/>
        <SocialHandle socialType='vgen' handleName={artist.vgen} url={socialsList.vgen}/>
        <SocialHandle socialType='instagram' handleName={artist.instagram} url={socialsList.instagram}/>
        <Catalog name={artist.artistname} numOfPages={1} />
      </div>
      )
    }
  );

  return (
    <>
      {displayList}
    </>
  )
}

export default App
