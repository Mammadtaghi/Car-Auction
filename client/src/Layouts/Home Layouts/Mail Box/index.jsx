import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";

function MailBox() {
    return (
        <>
            <div id={style.MailBox}>
                <div className={style.container}>
                    <div className={style.textBox}>
                        <h4 className={`${style.subTitle} ${style.text}`}>Right into Mailbox</h4>
                        <h1 className={`${style.title} ${style.text}`}>Get the news by subscribing to our newsletter. Tips directly!</h1>
                        <div className={`${style.inputBox}`}>
                            <input className={style.input} type="text" placeholder='Enter your email' />
                            <button className={`Button2 ${style.submit}`}>Submit</button>
                        </div>
                    </div>
                    <div className={style.imgBox}>
                        <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/11/autobid-newsletter_pic.png" alt="" />
                    </div>
                </div>
                <div className={style.imgBoxF}>
                    <img src="https://autobid.modeltheme.com/wp-content/uploads/2023/11/autobid-newsletter_pic.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default MailBox