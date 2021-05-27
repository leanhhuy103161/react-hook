import axios from 'axios';

export const getImageData = (action) => {
  const api = `https://api.giphy.com/v1/gifs/search?api_key=dfQgRJCnTbmZIr6Z6QJ94S7pRNJsdch9&q=${action.payload}`
  return axios.get(api);
}