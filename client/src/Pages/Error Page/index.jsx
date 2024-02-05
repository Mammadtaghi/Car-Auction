import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function ErrorPage() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>ErrorPage</title>
            </Helmet>
            <div id={style.ErrorPage}>
                ErrorPage
            </div>
        </>
    )
}

export default ErrorPage