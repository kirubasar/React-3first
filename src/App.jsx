import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import B from './components/B';
const NameContext = createContext();
const App =() => {
    const [name, setName] = useState('Sri')
  return (
    <NameContext.Provider value={{name, setName}}>
        <B/>
    </NameContext.Provider>
  )
}

export { App as default , NameContext};