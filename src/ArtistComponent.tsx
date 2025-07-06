import { useState } from 'react';
import SocialHandle from './components/SocialHandle';

function ArtistComponent() {
  const [searchResult, setSearchResult] = useState('None');

  function onSearchButtonClick() {
    setSearchResult('2');
  }

  return (
    <div>
      
      <p>Catalogue:</p>
      <img src=""/>
    </div>
  );
}

export default ArtistComponent;
