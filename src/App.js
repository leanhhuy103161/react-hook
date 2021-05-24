import React, {useState, useEffect} from 'react'
import OldSection from './OldSection'
import Hero from './components/Hero'

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <OldSection />
      <h1>React-hook</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Hero name="Le Anh Huy" />
    </div>
  );
}

export default App;
