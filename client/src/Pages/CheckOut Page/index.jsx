import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function CheckOutPage() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>CheckOutPage</title>
            </Helmet>
            <div id={style.CheckOutPage}>
                CheckOutPage
            </div>
        </>
    )
}

export default CheckOutPage