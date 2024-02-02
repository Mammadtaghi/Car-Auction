import React from 'react'
import style from './index.module.scss'
import Navbar from '../Navbar'

function Header() {
    return (
        <>
            <div id={style.Header}>
                Header
                <Navbar />
            </div>
        </>
    )
}

export default Header