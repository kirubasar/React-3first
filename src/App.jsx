import { useRef, useState } from "react"


const App = () => {
  const [state, setState] = useState(0);
  const inputRef = useRef(null);
  const handleClick =()=>{
    //console.log(inputRef.current.value)
    inputRef.current.focus()
  }
  const handleChange = ()=>{
    inputRef.current.value = 'Hello World';
    setState(state+1);
  }
  console.log('rendering component');
  return (
    <>
      <input
      type='text'
      ref={inputRef}
      />
      <button onClick={handleClick}>Focus Input</button>
      <button onClick={handleChange}>Change Value</button>
    </>
  )
}

export default App;