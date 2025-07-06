interface ArtistProps {
  name: string;
  cancommission?: boolean;
  merchtags?: Array<string>;
}

function Artist(props : ArtistProps) {

  return (
      <p>{props.name}</p>
  );
}

export default Artist;
