import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function Home() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="https://static.vecteezy.com/system/resources/previews/000/630/443/original/vector-auction-icon-sign-illustration.jpg" type="image/x-icon" />
                <title>Home</title>
            </Helmet>
            <div id={style.Home}>
                Home
            </div>
        </>
    )
}

export default Home