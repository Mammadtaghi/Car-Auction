import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function Auctions() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="https://static.vecteezy.com/system/resources/previews/000/630/443/original/vector-auction-icon-sign-illustration.png" type="image/png" />
                <title>Auctions</title>
            </Helmet>
            <div id={style.Auctions}>
                Auctions
            </div>
        </>
    )
}

export default Auctions