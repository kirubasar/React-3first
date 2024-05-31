import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
const NameContext = createContext();
const D = ()=>{
    const {name, setName} = useContext(NameContext)
    useEffect(()=>{
        setTimeout(() =>{
           setName('Kiruba');
        }, 5000);
    })
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
    <NameContext.Provider value={{name, setName}}>
        <B/>
    </NameContext.Provider>
  )
}

export default App