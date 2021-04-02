import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";
const ImageList = props => {
  const img2 = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{img2}</div>;
};

export default ImageList;
