import { useLoaderData, useParams } from "react-router-dom";

const Users = () => {
    
    const { id } = useParams();
    const users = useLoaderData();
  
    const user = users.find(user => user.id === parseInt(id));
  
    return (
       
    )
  }
  export default Users;

