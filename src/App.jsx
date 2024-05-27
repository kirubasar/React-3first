/*class Hello extends Component {
  componentDidMount() {
    console.log('Hello component mounted');
  }

  componentWillUnmount(){
    console.log('Hello component unmounted')
  }
  render() {
    return(
      <h1>Hello World!</h1>
    )
  }
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHello:true
    }
  }

  handleToggle = () => {
    this.setState({
      showHello: !this.state.showHello
    })
  }
  render() {
    return (
      <div>
         <button onClick ={this.handleToggle}>Toggle Hello</button>
         {this.state.showHello && <Hello />}
         </div>
    )  
  }
  
}
export default App;*/


import { useState } from 'react'

const App= ()=> {
  let [count, setCount] =useState(0);
  const handleIncrement = () => {
    setCount(count+1)
  }
  const handleDecrement = () => {
    if(count!=0)
    setCount(count-1)
  }
  const reset = () => {
    setCount(0)
  }
  return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    )
  } 

export default App