  import Hello from "./components/Hello";
   
   
  const App = () => {
    const a = 20;
    const b = 40;
    const now = new Date();
    const  name = 'sri';
  return (
    <div>
      Date: {now.toString()}
   <h1>Greetings</h1>
    <Hello 
    name={name}
    />
    <p>{a} plus {b} is {a+b}</p>
  </div>
  )
}
  
export default App;