import React, { useRef, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const handleClick =()=>{
    setCount(count+1)
  }
  const handleRefClick=()=>{
    countRef.current +=1;
    console.log(countRef.current)
  }
  console.log('component rendered');

  return (
    <div>
      <h1>State Count: {count}</h1>
      <button onClick ={handleClick}>Increment State Count</button>
      <h1>Ref Count:{countRef.current}</h1>
      <button onClick={handleRefClick}>Increment Ref Count</button>
    </div>
  )
}

export default App