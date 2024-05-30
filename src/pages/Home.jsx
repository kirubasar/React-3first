import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const [users, setUsers] = useState([]);
export const loader = async()=> {
  const users = await userServices.getUsers();
  return users;
}
useEffect(() => {
  userServices.getUsers()
    .then(users => setUsers(users));
}, []);

const Home =()=>{
const users = useLoaderData();
return (
  <div>
    <h1>Users</h1>
    <ul>
      {users.map(user => (
        <li key ={user.id}>
          <Link to={'/users/${user.id}'}>{user.name}</Link>
        </li>
      ))}
    </ul>
    </div>
)
}

export default Home;