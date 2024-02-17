import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function Search() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="https://static.vecteezy.com/system/resources/previews/000/630/443/original/vector-auction-icon-sign-illustration.png" type="image/png" />
                <title>Search</title>
            </Helmet>
            <div id={style.Search}>
                Search
            </div>
        </>
    )
}

export default Search