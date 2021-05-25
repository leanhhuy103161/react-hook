import hobbyReducer from "./hobby";
import {combineReducers} from 'redux'
import userReducer from "./user";
import imageReducer from './image'

const rootReducer = combineReducers({
  hobby: hobbyReducer,
  user: userReducer,
  image: imageReducer,
})

export default rootReducer