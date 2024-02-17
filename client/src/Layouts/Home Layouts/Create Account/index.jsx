import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function CreateAccount() {
    return (
        <>
            <div id={style.CreateAccount}>
                <p className={`${style.text} selectionText`}>Are you new here?</p>
                <button className='Button2'>Register</button>
            </div>
        </>
    )
}

export default CreateAccount