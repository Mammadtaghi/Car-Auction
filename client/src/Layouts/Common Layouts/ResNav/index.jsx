import React from 'react'
import style from './index.module.scss'
import { Link, NavLink } from 'react-router-dom'
import useDropdown from '../../../Hooks/useDropdown'
import Button from '../../../Components/Common Components/Button'
import { useResNav } from '../../../Context/resNavContext'

function ResNav() {

    const [home, setHome] = useDropdown(false)
    const [platform, setPlatform] = useDropdown(false)
    const [shop, setShop] = useDropdown(false)
    const [pages, setPages] = useDropdown(false)

    const { isOpen, setIsOpen } = useResNav()

    return (
        <nav id={`${style.ResNav}`} style={isOpen ? {} : { display: 'none' }}>
            <div className={style.container}>
                <div className={style.linkCon}>
                    <NavLink className={style.NavLink} to={"/"}>Home</NavLink>
                    <div className={style.dropdown} onClick={() => setHome(!home)}>
                        <i className={`fa-solid fa-angle-${home ? "up" : "down"} ${style.dropIcon}`}></i>
                    </div>
                </div>
                <div className={`${style.subLinkCon} ${!home ? style.Hidden : ''}`}>
                    <Link className={style.NavLink}>Home 1</Link>
                    <Link className={style.NavLink}>Home 2</Link>
                    <Link className={style.NavLink}>Home 3</Link>
                </div>
                <div className={style.linkCon}>
                    <Link className={style.NavLink} to={"/"}>Platform</Link>
                    <div className={style.dropdown} onClick={() => setPlatform(!platform)}>
                        <i className={`fa-solid fa-angle-${platform ? "up" : "down"} ${style.dropIcon}`}></i>
                    </div>
                </div>
                <div className={`${style.subLinkCon} ${!platform ? style.Hidden : ''}`}>
                    <div className={style.topSide}>
                        <h3 className={style.subLinkTitle}>Search Cars</h3>
                        <div className={style.text}>
                            <div className={style.subLinkImgBox}>
                                <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/12/autobid-icon-v2-1.png" alt="" />
                            </div>
                            <Link className={style.NavLink}>Body</Link>
                        </div>
                        <div className={style.text}>
                            <div className={style.subLinkImgBox}>
                                <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/12/autobid-icon-v2-2.png" alt="" />
                            </div>
                            <Link className={style.NavLink}>Color</Link>
                        </div>
                        <div className={style.text}>
                            <div className={style.subLinkImgBox}>
                                <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/12/autobid-icon-v2-3.png" alt="" />
                            </div>
                            <Link className={style.NavLink}>Gearbox</Link>
                        </div>
                        <div className={style.text}>
                            <div className={style.subLinkImgBox}>
                                <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/12/autobid-icon-v2-4.png" alt="" />
                            </div>
                            <Link className={style.NavLink}>Capacity</Link>
                        </div>
                        <div className={style.text}>
                            <div className={style.subLinkImgBox}>
                                <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/12/autobid-icon-v2-5.png" alt="" />
                            </div>
                            <Link className={style.NavLink}>Climatisation</Link>
                        </div>
                    </div>
                    <div className={style.bottomSide}>
                        <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/12/autobid-mega-img-v2.jpg" alt="" />
                        <div className={style.textBox}>
                            <h2>Auction Lot #12</h2>
                            <span className={style.checkit}>Check it Now!</span>
                            <Button stl={{ border: "0px" }}>View Entry</Button>
                        </div>
                    </div>
                </div>
                <div className={style.linkCon}>
                    <Link className={style.NavLink} to={"/"}>News</Link>
                </div>
                <div className={style.linkCon}>
                    <NavLink className={style.NavLink} to={"/shop"}>Shop</NavLink>
                    <div className={style.dropdown} onClick={() => setShop(!shop)}>
                        <i className={`fa-solid fa-angle-${shop ? "up" : "down"} ${style.dropIcon}`}></i>
                    </div>
                </div>
                <div className={`${style.subLinkCon} ${!shop ? style.Hidden : ''}`}>
                    <Link to={"/shop"} className={style.NavLink}>Shop Page</Link>
                    <Link to={"/checkout"} className={style.NavLink}>Checkout</Link>
                    <Link to={"/cart"} className={style.NavLink}>Cart</Link>
                    <Link className={style.NavLink}>My Account</Link>
                </div>
                <div className={style.linkCon}>
                    <Link className={style.NavLink} to={"/"}>Pages</Link>
                    <div className={style.dropdown} onClick={() => setPages(!pages)}>
                        <i className={`fa-solid fa-angle-${pages ? "up" : "down"} ${style.dropIcon}`}></i>
                    </div>
                </div>
                <div className={`${style.subLinkCon} ${!pages ? style.Hidden : ''}`}>
                    <Link to={"/shop"} className={style.NavLink}>About Us</Link>
                    <Link to={"/checkout"} className={style.NavLink}>FAQ</Link>
                    <Link to={"/cart"} className={style.NavLink}>How It Works</Link>
                    <Link className={style.NavLink}>Pricing Service</Link>
                    <Link to={"/thebestendpoint"} className={style.NavLink}>404 Not Found</Link>
                </div>
                <div className={style.linkCon}>
                    <Link className={style.NavLink} to={"/"}>Get in Touch</Link>
                </div>
                <div className={style.linkCon}>
                    <NavLink className={style.NavLink} to={"/wishlist"}>
                        <i className={`fa-regular fa-heart ${style.text}`}></i>
                        <span className={style.text}>Favorites</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default ResNav