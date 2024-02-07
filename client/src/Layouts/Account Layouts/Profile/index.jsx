import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import { useUser } from '../../../Context/userContext';
import { useNavigate } from 'react-router-dom';

function Profile() {

    const navigate = useNavigate()

    const { user, setUser, Logout } = useUser()

    function handleLogOut() {
        Logout()
        navigate('/login')
    }

    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>Profile</title>
            </Helmet>
            <div id={style.Profile}>
                <div className={style.container}>
                    <h2 className={`${style.username}`}>Username: {user.username}</h2>
                    <h3 className={`${style.role}`}>Role: {user.role}</h3>
                    <button className={`Button2`} onClick={handleLogOut}>Log Out</button>
                </div>
            </div>
        </>
    )
}

export default Profile