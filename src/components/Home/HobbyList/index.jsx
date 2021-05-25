import React from 'react'
import Proptypes from 'prop-types'
import './HobbyList.css'

HobbyList.propTypes = {
  hobbyList: Proptypes.array,
  activeId: Proptypes.number,
  onHobbyClick: Proptypes.func,
};

HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
}

function HobbyList(props) {
  const { hobbyList, activeId, onHobbyClick } = props;
  const handleClick = (hobby) => {
    // console.log("handling a li click", hobby);
    if(!onHobbyClick) {
      return '';
    }

    onHobbyClick(hobby)
  }

  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby, index) => (
        <li 
          key={index}
          className={hobby.id === activeId ? 'active' : ''}
          onClick={hobby => ( handleClick(hobby) )}
          >{hobby.id} {hobby.title}</li>
      ))}
    </ul>
  )
}

export default HobbyList;