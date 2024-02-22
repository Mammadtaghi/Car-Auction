import React from 'react'
import style from "./index.module.scss";
import { useUser } from '../../../Context/userContext';
import axios from 'axios';

function Admins() {

    const { user, setUser, Logout } = useUser()

    const [Admins, setAdmins] = React.useState([])

    const [isLoading, setIsLoading] = React.useState(true)

    async function GetUsers() {
        try {
            const response = await axios.get('http://localhost:4728/user')
            const users = []
            response.data.forEach((Admin) => {
                if (Admin.role === 'admin') {
                    users.push(Admin)
                    console.log(users);
                    setAdmins(users)
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


    async function DemoteAsAdmin(id) {
        try {
            const response = await axios.put(`http://localhost:4728/user/demote/${id}`, {}, {
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
        <div id={style.Admins}>
            <div className={style.container}>
                {!isLoading ?
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Demote</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Admins.map(Admin => (
                                <tr key={Admin._id}>
                                    <td>{Admin.username}</td>
                                    <td><button onClick={() => DemoteAsAdmin(Admin._id)} className={style.promote}>Demote as Admin</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    :
                    <span>Loading</span>}
            </div>
        </div>
    )
}

export default Admins