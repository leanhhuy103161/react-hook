import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewImage, changeImage } from "../../actions/hobby";
import ImageList from "../../components/Home/ImageList";
import './ImageContent.css'

function ImageContent({imageList, changeImage, addNewImage}) {
  // const imageList = useSelector((state) => {
  //   return state.image.list;
  // });

  // const dispatch = useDispatch();
  const handleAddImageClick = () => {
    console.log("handleAddHobbyClick");
    const newImage = {
      image: "https://images.pexels.com/photos/1645822/pexels-photo-1645822.jpeg?cs=srgb&dl=pexels-min-an-1645822.jpg&fm=jpg",
    };
    // dispatch action to add a new image to redux store, imageReducer
    addNewImage(newImage);
    // dispatch(action);
  };

  const handleChangeImageClick = (image) => {
    const action = changeImage(image);
    // dispatch(action);
  };

  return (
    <div>
      <div className="container">
        <button 
          className="btn btn-dark btn-lg btn-block"
          onClick={handleAddImageClick}>Add Image</button>
        <div className="row">
          <ImageList
            imageList={imageList}
            onImageChangeClick={handleChangeImageClick}
          ></ImageList>
        </div>
      </div>
    </div>
  );
}

export default ImageContent;
