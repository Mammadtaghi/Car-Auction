import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function SearchByBody() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="https://static.vecteezy.com/system/resources/previews/000/630/443/original/vector-auction-icon-sign-illustration.png" type="image/png" />
                <title>SearchByBody</title>
            </Helmet>
            <div id={style.SearchByBody}>
                SearchByBody
            </div>
        </>
    )
}

export default SearchByBody