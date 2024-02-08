import React from 'react';
import style from './index.module.scss';
import { NavLink } from 'react-router-dom';
import { useUser } from '../../../Context/userContext';

function Footer() {

    const { user, setUser, Logout } = useUser()

    return (
        <>
            <div id={style.Footer}>
                <div className={style.container}>
                    <div className={style.topPart}>
                        <div style={{ gridArea: 'grid1' }} className={`${style.footerListCon}`}>
                            <div className={style.imgBox}>
                                <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/11/autobid-logo-white.svg" alt="" />
                            </div>
                            <h2 className={style.listTitle}>Customer support</h2>
                            <ul className={style.list}>
                                <li><a className={`${style.text}`} href="tel:+9940559902853">+994-055-990-28-53</a></li>
                                <li><a className={`${style.text}`} href="tel:+9940559902853">+994-055-990-28-54</a></li>
                                <li><a className={`${style.text}`} href="mailto:albinoni1423@gmail.com">albinoni1423@gmail.com</a></li>
                                <li><span className={`${style.text}`}>(Monday-Friday 08:00 - 18:00)</span></li>
                            </ul>
                        </div>

                        <div style={{ gridArea: 'grid2' }} className={`${style.footerListCon}`}>
                            <h2 className={style.listTitle}>Latest Cars</h2>
                            <ul className={style.list}>
                                <li><span className={`${style.arrow}`}>BMW M6</span></li>
                                <li><span className={`${style.arrow}`}>Mercedes-Benz GLC</span></li>
                                <li><span className={`${style.arrow}`}>Audi A5</span></li>
                                <li><span className={`${style.arrow}`}>Mazda R8</span></li>
                                <li><span className={`${style.arrow}`}>Audi R8</span></li>
                                <li><span className={`${style.arrow}`}>Mercedes-Benz GLE</span></li>
                            </ul>
                        </div>

                        <div style={{ gridArea: 'grid3' }} className={`${style.footerListCon}`}>
                            <h2 className={style.listTitle}>AutoBid</h2>
                            <ul className={style.list}>
                                <li><NavLink to={"/about"} className={`${style.arrow}`}>About</NavLink></li>
                                <li><NavLink to={"/"} className={`${style.arrow}`}>Blog</NavLink></li>
                                <li><NavLink to={"/shop"} className={`${style.arrow}`}>Shop</NavLink></li>
                                <li><NavLink to={`${user.role ? "/wishlist" : "/login"}`} className={`${style.arrow}`}>Wishlist</NavLink></li>
                                <li><NavLink to={"/faq"} className={`${style.arrow}`}>FAQ</NavLink></li>
                                <li><NavLink to={"/"} className={`${style.arrow}`}>Pricing</NavLink></li>
                            </ul>
                        </div>

                        <div style={{ gridArea: 'grid4' }} className={`${style.footerListCon}`}>
                            <h2 className={style.listTitle}>Useful Information</h2>
                            <ul className={style.list}>
                                <li><NavLink to={`${user.role ? "/wishlist" : "/login"}`} className={`${style.arrow}`}>My Account</NavLink></li>
                                <li><NavLink to={"/"} className={`${style.arrow}`}>Dashboard</NavLink></li>
                                <li><NavLink to={"/"} className={`${style.arrow}`}>Contact</NavLink></li>
                                <li>
                                    <div className={`${style.iconsBox}`}>
                                        <div className={`${style.footerIcon}`}>
                                            <i className={`fa-brands fa-facebook ${style.icon}`}></i>
                                        </div>
                                        <div className={`${style.footerIcon}`}>
                                            <i className={`fa-brands fa-twitter ${style.icon}`}></i>
                                        </div>
                                        <div className={`${style.footerIcon}`}>
                                            <i className={`fa-brands fa-linkedin ${style.icon}`}></i>
                                        </div>
                                        <div className={`${style.footerIcon}`}>
                                            <i className={`fa-brands fa-instagram ${style.icon}`}></i>
                                        </div>
                                        <div className={`${style.footerIcon}`}>
                                            <i className={`fa-brands fa-tiktok ${style.icon}`}></i>
                                        </div>
                                        <div className={`${style.footerIcon}`}>
                                            <i className={`fa-brands fa-deviantart ${style.icon}`}></i>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.bottomPart}>
                        <p className={style.copyrigth}>Copyright by ModelTheme. All Rights Reserved.</p>
                        <div className={style.apps}>
                            <div className={style.appBox}>
                                <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/11/autobid-google.svg" alt="" />
                            </div>
                            <div className={style.appBox}>
                                <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/11/autobid-appstore.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer