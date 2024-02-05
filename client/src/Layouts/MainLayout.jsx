import React from 'react'
import Header from './Common Layouts/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Common Layouts/Footer'
import Navbar from './Common Layouts/Navbar'
import ResNav from './Common Layouts/ResNav'

function MainLayout() {
    return (
        <>
            <Header />
            <Navbar />
            <ResNav />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout