import { useRef } from "react"


const App = () => {
  const inputRef = useRef(null);
  const handleClick =()=>{
    //console.log(inputRef.current.value)
    inputRef.current.focus()
  }
  return (
    <>
      <input
      type='text'
      ref={inputRef}
      />
      <button onClick={handleClick}>Focus Input</button>
    </>
  )
}

export default App;