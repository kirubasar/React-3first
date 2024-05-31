import { useContext, useEffect } from "react";
import { NameContext } from "../App";

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
export default D;