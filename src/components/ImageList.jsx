import ImageItem from "./ImageItem";

function ImageList({ imagesPlaceholder }) {
  return (
    <div  className="imageList">
      {imagesPlaceholder.map((img) => {
       return <ImageItem img={img} key={img.id}/>;
      })}
    </div>
  );
}

export default ImageList;
