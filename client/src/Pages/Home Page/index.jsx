import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function Home() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>Home</title>
            </Helmet>
            <div id={style.Home}>
                Home
            </div>
        </>
    )
}

export default Home