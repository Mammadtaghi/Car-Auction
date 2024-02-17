import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function CreateAccount() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="https://static.vecteezy.com/system/resources/previews/000/630/443/original/vector-auction-icon-sign-illustration.png" type="image/png" />
                <title>CreateAccount</title>
            </Helmet>
            <div id={style.CreateAccount}>
                <p className={style.text}>Are you new here?</p>
                <button className='Button2'>Register</button>
            </div>
        </>
    )
}

export default CreateAccount