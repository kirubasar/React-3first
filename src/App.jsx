  const App = () => {
    const friends = [
   {id: 1, name: 'John',age: 30},
   {id: 2, name: 'peter', age: 20}
    ]
  return (
    <div>
     <h1>Friends</h1> 
     <ul>
      {
        friends.map((friend, index) =>
          <li key={index}>{friend.name} {friend.age}</li>
        )
      }
     </ul>
  </div>
  )
}
  
export default App;