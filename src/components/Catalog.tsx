interface CatalogProps {
  name: string;
  numOfPages: number;
}

function Catalog(props : CatalogProps) {
  const srcRoot = "/images/catalogs/";
  const i = 1;

  console.log(srcRoot + props.name + "-" + i + ".png");

  return (
      <img src={srcRoot + props.name + "-" + i + ".png"} alt={props.name + " catalog page " + props.numOfPages}/>
  );
}

export default Catalog;
