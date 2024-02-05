import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../../../Components/Common Components/Button';
import style from './index.module.scss';

function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            <nav id={style.Navbar}>
                <div className={style.container}>
                    <div className={style.lSide}>
                        <div className={style.imgBox}>
                            <NavLink className={style.logoLink} to={"/"}>
                                <img src="https://autobid.modeltheme.com/wp-content/themes/autobid/images/logo-autobid.svg" alt="" />
                            </NavLink>
                        </div>
                        <ul className={style.navList}>
                            <li>
                                <NavLink className={style.NavLink} to={"/"}>Home</NavLink>
                                <ul className={style.subNav}>
                                    <li>
                                        <Link className={style.NavLink} to={"/"}>Home 1</Link>
                                    </li>
                                    <li>
                                        <Link className={style.NavLink} to={"/"}>Home 2</Link>
                                    </li>
                                    <li>
                                        <Link className={style.NavLink} to={"/"}>Home 3</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink className={style.NavLink} to={"/"}>Platform</NavLink>
                                <div className={`${style.subNav} ${style.platform}`}>
                                    <div className={style.list}>
                                        <h3 className={style.subListHead}>Search Cars</h3>
                                        <div className={style.subListItem}>
                                            <div className={style.listImgBox}>
                                                <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/12/autobid-icon-v2-1.png" alt="" />
                                            </div>
                                            <span className={style.listText}>Body</span>
                                        </div>
                                        <div className={style.subListItem}>
                                            <div className={style.listImgBox}>
                                                <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/12/autobid-icon-v2-2.png" alt="" />
                                            </div>
                                            <span className={style.listText}>Color</span>
                                        </div>
                                        <div className={style.subListItem}>
                                            <div className={style.listImgBox}>
                                                <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/12/autobid-icon-v2-3.png" alt="" />
                                            </div>
                                            <span className={style.listText}>Gearbox</span>
                                        </div>
                                        <div className={style.subListItem}>
                                            <div className={style.listImgBox}>
                                                <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/12/autobid-icon-v2-4.png" alt="" />
                                            </div>
                                            <span className={style.listText}>Capacity</span>
                                        </div>
                                        <div className={style.subListItem}>
                                            <div className={style.listImgBox}>
                                                <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/12/autobid-icon-v2-5.png" alt="" />
                                            </div>
                                            <span className={style.listText}>Climatisation</span>
                                        </div>
                                    </div>
                                    <div className={style.subImgBox}>
                                        <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/12/autobid-mega-img-v2.jpg" alt="" />
                                        <div className={style.textBox}>
                                            <h2>Auction Lot #12</h2>
                                            <span className={style.checkit}>Check it Now!</span>
                                            <Button stl={{ border: "0px" }}>View Entry</Button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <NavLink className={style.NavLink} to={"/"}>News</NavLink>
                            </li>
                            <li>
                                <NavLink className={style.NavLink} to={"/shop"}>Shop</NavLink>
                                <ul className={style.subNav}>
                                    <li>
                                        <Link className={style.NavLink} to={"/"}>Shop page</Link>
                                    </li>
                                    <li>
                                        <Link className={style.NavLink} to={"/"}>Checkout</Link>
                                    </li>
                                    <li>
                                        <Link className={style.NavLink} to={"/"}>Cart</Link>
                                    </li>
                                    <li>
                                        <Link className={style.NavLink} to={"/"}>My Account</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink className={style.NavLink} to={"/"}>Pages</NavLink>
                                <ul className={style.subNav}>
                                    <li>
                                        <Link className={style.NavLink} to={"/about"}>About Us</Link>
                                    </li>
                                    <li>
                                        <Link className={style.NavLink} to={"/faq"}>FAQ</Link>
                                    </li>
                                    <li>
                                        <Link className={style.NavLink} to={"/"}>How It Works</Link>
                                    </li>
                                    <li>
                                        <Link className={style.NavLink} to={"/"}>Pricing Services</Link>
                                    </li>
                                    <li>
                                        <Link className={style.NavLink} to={"/bestendpointever"}>404 Not Found</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink className={style.NavLink} to={"/"}>Get in Touch</NavLink>
                            </li>
                            <li>
                                <NavLink className={style.NavLink} to={"/wishlist"}>
                                    <i className="fa-regular fa-heart"></i>
                                    <span className={style.text}>Favorites</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={style.rSide}>
                        <NavLink className={`${style.NavLink}`} to={"/account"}><i className={`fa-regular fa-user ${style.user}`}></i></NavLink>
                        <NavLink className={`${style.NavLink}`} to={"/wishlist"}><i className={`fa-regular fa-heart ${style.heart}`}></i></NavLink>
                        <NavLink className={`${style.NavLink}`} to={"/cart"}><i className={`fa-solid fa-basket-shopping ${style.cart}`}></i></NavLink>
                        <span className={`${style.NavLink}`}><i className={`fa-solid fa-magnifying-glass ${style.magnify}`}></i></span>
                        <div className={style.button}><Button>Sell Now</Button></div>
                        <i className={`fa-solid fa-bars ${style.toggle}`}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar