import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
const NameContext = createContext();
const D = ()=>{
    const {name} = useContext(NameContext)
    return(
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    )
}
   
const C =()=>{
    return (
        <D/>
    )
}
const B =() =>{
    return (
        <C/>
    )
}

const App =() => {
    const [name, setName] = useState('sri')
  return (
    <NameContext.Provider value={{name}}>
        <B/>
    </NameContext.Provider>
  )
}

export default App