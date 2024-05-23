  const App = () => {
    const friends = [
   {id: 1, name: 'John',age: 30},
   {id: 2, name: 'peter', age: 20}
    ]
    const listFriends = [];
    for (let i = 0; i < friends.length; i++) {
      listFriends.push(
        <li key={friends[i].id}>{friends[i].name} {friends[i].age}
        </li>
      )
    }
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