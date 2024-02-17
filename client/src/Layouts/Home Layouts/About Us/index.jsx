import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function AboutUs() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="https://static.vecteezy.com/system/resources/previews/000/630/443/original/vector-auction-icon-sign-illustration.png" type="image/png" />
                <title>AboutUs</title>
            </Helmet>
            <div id={style.AboutUs}>
                AboutUs
            </div>
        </>
    )
}

export default AboutUs