import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HobbyList from '../../components/Home/HobbyList'
import { addNewHobby, setActiveHobby } from '../../actions/hobby'
import './HomePage.css'

const randomNumber = () => {
  return 1000 + Math.trunc((Math.random() * 9000))
}


function HomePage(props) {
  const hobbyList = useSelector(state => {
    return state.hobby.list;
  }); 
  const activeId = useSelector(state => {
    return state.hobby.activeId;
  }); 
  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    console.log("handleAddHobbyClick");
    const newId = randomNumber()
    const newHobby = {
      id: newId,
      title: 'coding', 
    }
    // dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby)
    dispatch(action)
  }

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby)
    dispatch(action);
  }

  return (
    <div className="home-page">
      <h1>Redux - hook Home Page</h1>
      <button onClick={handleAddHobbyClick}>Random hobby</button>
      <HobbyList 
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
        ></HobbyList>
    </div>
  )
}

export default HomePage