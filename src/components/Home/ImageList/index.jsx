import React from "react";
import Proptypes from "prop-types";

import "./ImageList.css";

ImageList.propTypes = {
  imageList: Proptypes.array,
  onChangeImageClick: Proptypes.func,
};

ImageList.defaultProps = {
  imageList: [],
  onChangeImageClick: null,
};

function ImageList(props) {
  const { imageList, onChangeImageClick } = props;
  console.log("render:");
  console.log(imageList);
  const handleClick = (hobby) => {
    if (!onChangeImageClick) {
      return "";
    }
    onChangeImageClick(hobby);
  };

  const renderedImage = imageList.map((image, index) => (
    <div key={image.id} className="card">
      <div className="card-image-top">
          <img  src={image.images.original.url} alt="random-img" width="100%"/>
      </div>
      <div className="card-body">
        <footer className="blockquote-footer">
          <small className="text-muted">
            author {image.author} in <cite title="Source Title">Unplash image</cite>
          </small>
        </footer>
      </div>
    </div>
    ))

  return (
    <div className="card-columns">
      {renderedImage}
    </div>
  );
}

export default ImageList;
