import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function FAQPage() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>FAQPage</title>
            </Helmet>
            <div id={style.FAQPage}>
                FAQPage
            </div>
        </>
    )
}

export default FAQPage