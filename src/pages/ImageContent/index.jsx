import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewImage, changeImage } from "../../actions/hobby";
import ImageList from "../../components/Home/ImageList";
import './ImageContent.css'

function ImageContent() {
  const imageList = useSelector((state) => {
    return state.image.list;
  });

  const dispatch = useDispatch();

  const handleAddImageClick = () => {
    console.log("handleAddHobbyClick");
    const newImage = {
      image: "https://source.unsplash.com/random",
    };
    // dispatch action to add a new image to redux store, imageReducer
    const action = addNewImage(newImage);
    dispatch(action);
  };

  const handleChangeImageClick = (image) => {
    const action = changeImage(image);
    dispatch(action);
  };

  return (
    <div>
      <div className="container">
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
