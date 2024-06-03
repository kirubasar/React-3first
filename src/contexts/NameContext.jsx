import {createContext, useContext, useState } from "react";

const NameContext = createContext();
export const NameProvider =({Children}) =>{
    const [name, setName] = useState('Sri')
    return (
        <NameContext.Provider value={{name, setName}}>
        {Children}
        </NameContext.Provider>
      )
}
export const useName = ()=> useContext(NameContext);