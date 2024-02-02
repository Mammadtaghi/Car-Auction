import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function ShopPage() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>ShopPage</title>
            </Helmet>
            <div id={style.ShopPage}>
                ShopPage
            </div>
        </>
    )
}

export default ShopPage