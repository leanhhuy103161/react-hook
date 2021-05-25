import React from "react";
import Proptypes from "prop-types";
import "./ImageList.css";

ImageList.propTypes = {
  imageList: Proptypes.array,
  activeId: Proptypes.number,
  onChangeImageClick: Proptypes.func,
};

ImageList.defaultProps = {
  imageList: [],
  activeId: null,
  onChangeImageClick: null,
};

function ImageList(props) {
  const { imageList, onChangeImageClick } = props;

  const handleClick = (hobby) => {
    if (!onChangeImageClick) {
      return "";
    }
    onChangeImageClick(hobby);
  };

  const renderedImage = imageList.map((image, index) => (
    <div className="card">
      <div className="card-image-top">
          <img key={index} src={image.image} alt="random-img" width="100%"/>
      </div>
      <div className="card-body">
        <footer className="blockquote-footer">
          <small className="text-muted">
            Someone famous in <cite title="Source Title">Source Title</cite>
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
