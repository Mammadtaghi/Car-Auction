import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


function Hero() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="https://static.vecteezy.com/system/resources/previews/000/630/443/original/vector-auction-icon-sign-illustration.png" type="image/png" />
                <title>Hero</title>
            </Helmet>
            <div id={style.Hero}>
                <div className={style.container}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        navigation
                        autoplay={true}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className={style.imgBox}>
                                <img src="https://www.hdcarwallpapers.com/walls/mercedes_benz_amg_gtr_4k-HD.jpg" alt="" />
                                <div className={style.textBox}>
                                    <span className={style.year}>2021</span>
                                    <h1 className={style.title}>Mercedes-Benz <br />AMG GT-R</h1>
                                    <p className={style.bidBox}>
                                        <span className={style.text}>Starting Bid From:</span>
                                        <span className={style.bid}>$ 240000</span>
                                    </p>
                                    <div className={style.buttons}>
                                        <button className={`Button ${style.placeBid}`}>Place Bid</button>
                                        <button className={`BorderButton ${style.check}`}>Check Car</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={style.imgBox}>
                                <img src="https://www.motortrend.com/uploads/sites/11/2020/05/2020-Ferrari-F8-Tributo-LEAD.jpg" alt="" />
                                <div className={style.textBox}>
                                    <span className={style.year}>2019</span>
                                    <h1 className={style.title}>Ferrari F8<br />Tributo</h1>
                                    <p className={style.bidBox}>
                                        <span className={style.text}>Starting Bid From:</span>
                                        <span className={style.bid}>$ 240000</span>
                                    </p>
                                    <div className={style.buttons}>
                                        <button className={`${style.placeBid}`}>Place Bid</button>
                                        <button className={`${style.check}`}>Check Car</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Hero