import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function AccountPage() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>AccountPage</title>
            </Helmet>
            <div id={style.AccountPage}>
                AccountPage
            </div>
        </>
    )
}

export default AccountPage