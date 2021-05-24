import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

useMagicColor.propTypes = {

};

function randomColor() {
  const COLOR_LIST = ['red', 'green', 'yellow'];
  const ramdomIndex = Math.trunc(Math.random() * 3)
  return COLOR_LIST[ramdomIndex]
}

function randomColor2(curentColor) {
  const COLOR_LIST = ['red', 'green', 'yellow'];
  const currentIndex = COLOR_LIST.indexOf(curentColor);
  let newIndex = currentIndex
  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3)
  }
  // console.log(COLOR_LIST[newIndex]);
  return COLOR_LIST[newIndex]
}


function useMagicColor() {
  const [color, setColor] = useState('transparent');
  const colorRef = useRef('transparent');


  // change color every 1 second 
  useEffect(() => {
    const colorInterval = setTimeout(() => {
      // console.log('First Color: ', color); 
      // console.log('Change Color: ', colorRef.current);
      // const newColor = randomColor();
      const newColor = randomColor2(colorRef.current);
      setColor(newColor);
      // console.log('after random Color: ', color); 
      colorRef.current = newColor;
    }, 3000);

    return () => {
      clearInterval(colorInterval);
    }

  }, [color])

  // console.log("Out side Effect, color: ", color);
  return color;
}

export default useMagicColor