import { useEffect, useState } from 'react'



function formatDate(date) {
  if(!date) return 'date is undefined';

  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

function useClock(props) {
  const [timeString, setTimeString] = useState('');
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString =  formatDate(now)

      setTimeString(newTimeString);
    }, 1000);

    return () => {
      // clean up
      console.log('Clock is cleaned up');
      clearInterval(clockInterval); 
    }
  }, [])

  return {timeString}
}



export default useClock;