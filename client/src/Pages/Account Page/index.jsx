import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import { useUser } from '../../Context/userContext';
import Profile from '../../Layouts/Account Layouts/Profile';
import ChangePassword from '../../Layouts/Account Layouts/Change Password';
import useLocalstorage from '../../Hooks/useLocalstorage';

function AccountPage() {

    const [page, setPage] = useLocalstorage('accountPage', 'profile')

    const { user, setUser, Logout } = useUser()

    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>AccountPage</title>
            </Helmet>
            <div id={style.AccountPage}>
                <div className={`${style.menu}`}>
                    <h3 className={style.menuTitle}>Account</h3>
                    <ul className={style.menuList}>
                        <li onClick={() => setPage('profile')}>Profile</li>
                        <li onClick={() => setPage('changePassword')}>Change Password</li>
                    </ul>
                </div>

                <div className={`${style.display}`}>{
                    page && page === 'profile' ? <Profile /> : page==='changePassword' ? <ChangePassword /> : ''
                }</div>
            </div>
        </>
    )
}

export default AccountPage