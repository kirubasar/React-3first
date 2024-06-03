
import { useName } from "../contexts/NameContext";

const D = ()=>{
    const {name, setName} = useName();
    /*useEffect(()=>{
        setTimeout(() =>{
           setName('Kiruba');
        }, 5000);*/
    
    return(
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    )
}
export default D;