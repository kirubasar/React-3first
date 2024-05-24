 //Functional Component
 /*const App = () => {
return (
  <div>
    <h1> My React App</h1>
  </div>
)
 }

 export default App;*/

 // Functional Component with function 
 /*function App () {
  return(
    <div>
    <h1> My React App</h1>
  </div>
)
 }

 export default App;*/
import { Component } from "react";
import Hello from "./components/Hello";

 //Class Component
 class App  extends Component{
  // override the render method
  render(){
    //return JSX
    return (
      <div>
        <Hello 
        name="John"/>
      </div>
    
   )
  }
 }
 export default App;
