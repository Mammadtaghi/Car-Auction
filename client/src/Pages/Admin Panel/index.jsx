import React, { useState } from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import { useUser } from '../../Context/userContext';

function AdminPanel() {

    const [page, setPage] = useState('users')

    const { user, setUser, Logout } = useUser()


    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>AdminPanel</title>
            </Helmet>
            <div id={style.AdminPanel}>
                <div className={`${style.menu}`}>
                    <h2 className={style.menuTitle}>Admin Panel</h2>
                    <ul className={style.menuList}>
                        <li onClick={() => setPage('users')}>Users</li>
                        {user.role.includes('superadmin') ? <li onClick={() => setPage('admins')}>Admins</li> : null}
                    </ul>
                </div>

                <div className={`${style.display}`}>
                    {/* {
                        page && page === 'profile' ? <Profile />
                            :
                            page === 'changePassword' ? <ChangePassword />
                                :
                                page === 'newProduct' ? <CreateNewProduct />
                                    :
                                    page === 'myProducts' ? <MyProducts />
                                        : ''
                    } */}
                </div>
            </div >
        </>
    )
}

export default AdminPanel