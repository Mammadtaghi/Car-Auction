import axios from 'axios';
import React from 'react';
import style from "./index.module.scss";
import { useUser } from '../../../Context/userContext';

function Users() {

    const { user, setUser, Logout } = useUser()

    const [Users, setUsers] = React.useState([])

    const [isLoading, setIsLoading] = React.useState(true)

    async function GetUsers() {
        try {
            const response = await axios.get('http://localhost:4728/user')
            const users = []
            response.data.forEach((User) => {
                if (User.role === 'user') {
                    users.push(User)
                    console.log(users);
                    setUsers(users)
                }
            })
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        GetUsers()
    }, [])


    async function PromoteAsAdmin(id) {
        try {
            const response = await axios.put(`http://localhost:4728/user/promote/${id}`, {}, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
            console.log(response.data);
            GetUsers()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id={style.Users}>
            <div className={style.container}>
                {!isLoading ?
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Promote</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Users.map(User => (
                                <tr key={User._id}>
                                    <td>{User.username}</td>
                                    <td><button onClick={() => PromoteAsAdmin(User._id)} className={style.promote}>Promote as Admin</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    :
                    <span>Loading</span>}
            </div>
        </div >
    )
}

export default Users