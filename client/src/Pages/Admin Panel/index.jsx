import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function AdminPanel() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>AdminPanel</title>
            </Helmet>
            <div id={style.AdminPanel}>
                AdminPanel
            </div>
        </>
    )
}

export default AdminPanel