import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import Hero from '../../Layouts/Home Layouts/Hero';
import Search from '../../Layouts/Home Layouts/Search';
import Auctions from '../../Layouts/Home Layouts/Auctions';
import AboutUs from '../../Layouts/Home Layouts/About Us';
import HowItWorks from '../../Layouts/Home Layouts/How it works';
import Numbers from '../../Layouts/Home Layouts/Numbers';
import NewOffers from '../../Layouts/Home Layouts/New Offers';
import SearchByBody from '../../Layouts/Home Layouts/Search By Body';
import OurServices from '../../Layouts/Home Layouts/Our Services';
import MailBox from '../../Layouts/Home Layouts/Mail Box';
import LatestNews from '../../Layouts/Home Layouts/Latest News';
import CreateAccount from '../../Layouts/Home Layouts/Create Account';

function Home() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="https://static.vecteezy.com/system/resources/previews/000/630/443/original/vector-auction-icon-sign-illustration.png" type="image/png" />
                <title>Home</title>
            </Helmet>
            <div id={style.Home}>
                <Hero />
                {/* <Search /> */}
                <Auctions />
                <AboutUs />
                {/* <HowItWorks /> */}
                {/* <Numbers /> */}
                {/* <NewOffers /> */}
                {/* <SearchByBody /> */}
                {/* <OurServices /> */}
                <MailBox />
                {/* <LatestNews /> */}
                <CreateAccount />
            </div>
        </>
    )
}

export default Home