import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function AboutPage() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>AboutPage</title>
            </Helmet>
            <div id={style.AboutPage}>
                AboutPage
            </div>
        </>
    )
}

export default AboutPage