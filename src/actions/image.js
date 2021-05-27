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

export const getImageFromApi = (query) => {
  return {
    type: 'GET_IMAGE_FROM_API',
    payload: query
  }
}

export const getImageFromApiSuccess = (payload) => {
  return {
    type: 'GET_IMAGE_FROM_API_SUCCESS',
    payload: payload
  }
}
