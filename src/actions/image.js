export const addNewImage = (image) => {
  return {
    type: 'ADD_IMAGE',
    payload: image,
  }
}

export const changeImage = (image) => {
  return {
    type: 'CHANGE_IMAGE',
    payload: image,
  }
}