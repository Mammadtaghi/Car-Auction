import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function CartPage() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>CartPage</title>
            </Helmet>
            <div id={style.CartPage}>
                CartPage
            </div>
        </>
    )
}

export default CartPage