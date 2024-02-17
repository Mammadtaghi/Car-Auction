import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function AboutUs() {
    return (
        <>
            <div id={style.AboutUs}>
                <div className={style.container}>
                    <img className={style.car} src="https://autobid.modeltheme.com/wp-content/uploads/2023/11/autobid-main_about-1.jpg" alt="" />
                    <div className={style.textBox}>
                        <h3 className={`${style.subTitle} selectionText`}>About Us</h3>
                        <h1 className={`${style.title} selectionText`}>Revving The Future: Your Ultimate Auction Car Destination</h1>
                        <p className={`${style.info} selectionText`}>At Autobid, we redefine the car-buying experience by merging cutting-edge technology with the excitement of live auctions. Our user-friendly interface allows you to browse an extensive inventory of carefully curated vehicles, from sleek sedans to powerful trucks and everything in between.</p>
                        <ul className={style.list}>
                            <li>
                                <span className={`${style.listTitle} style.listTitle`}>Diverse Inventory:</span>
                                <span className={`${style.listText} style.listText`}>Explore a wide range of vehicles, each meticulously.</span>
                            </li>
                            <li>
                                <span className={`${style.listTitle} style.listTitle`}>Live Auctions:</span>
                                <span className={`${style.listText} style.listText`}>Immerse yourself in the excitement of real-time bidding.</span>
                            </li>
                            <li>
                                <span className={`${style.listTitle} style.listTitle`}>Transparency:</span>
                                <span className={`${style.listText} style.listText`}>We believe in openness and provide detailed information.</span>
                            </li>
                            <li>
                                <span className={`${style.listTitle} style.listTitle`}>User-Friendly Platform:</span>
                                <span className={`${style.listText} style.listText`}>Navigate effortlessly through our website.</span>
                            </li>
                            <li>
                                <span className={`${style.listTitle} style.listTitle`}>Secure Transactions:</span>
                                <span className={`${style.listText} style.listText`}>Bid with confidence, knowing that your transactions are secure.</span>
                            </li>
                        </ul>
                        <div className={style.signature}>
                            <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/11/autobid-signature.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs