
const userServices = {
    getUsers: async ()=> {
        const response = await fetch('/users.json');
        const users = await response.json();
        return users;
    }
}
export default userServices