function ImageItem({ img }) {
  console.log(img);

  return (
    <div className="imgDiv">
      <img className="imgItem" src={img.urls.small} alt={img.alt_description} />
      <div className="imageDetail">
        <span>Owner: {img.user.name}</span>
        <span>{img.likes} ❤️</span>
      </div>
    </div>
  );
}

export default ImageItem;
