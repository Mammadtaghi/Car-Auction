import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.scss'

function Header() {
    return (
        <>
            <div id={style.Header}>
                <div className={style.container}>
                    <div className={style.lSide}>
                        <div className={style.phone}>
                            <a href="tel:+9940559902853">
                                <i className={`fa-solid fa-phone ${style.phoneIcon}`}></i>
                                +994-055-990-28-53
                            </a>
                        </div>

                        <div className={style.email}>
                            <a href="mailto:albinoni1423@gmail.com">
                                <i className={`fa-regular fa-envelope`}></i>
                                albinoni1423@gmail.com
                            </a>
                        </div>

                        <div className={style.openTime}>
                            <i className="fa-regular fa-clock"></i>
                            Mon - Fri: 10:00 - 18:00
                        </div>
                    </div>

                    <div className={style.rSide}>
                        <div className={style.search}>
                            <input type="text" placeholder='Search More Cars...' />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>

                        <div className={style.language}>
                            <i className="fa-regular fa-flag"></i>
                            <span>EN</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>

                        <div className={style.signIn}>
                            <Link>Sing In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header