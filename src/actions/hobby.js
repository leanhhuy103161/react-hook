export const addNewHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    payload: hobby,
  }
}

export const setActiveHobby = (hobby) => {
  return {
    type: 'SET_ACTIVE_HOBBY',
    payload: hobby,
  }
}

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
