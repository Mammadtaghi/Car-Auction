import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function WishlistPage() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>WishlistPage</title>
            </Helmet>
            <div id={style.WishlistPage}>
                WishlistPage
            </div>
        </>
    )
}

export default WishlistPage