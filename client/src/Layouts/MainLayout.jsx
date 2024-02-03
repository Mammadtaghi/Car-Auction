import React from 'react'
import Header from './Common Layouts/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Common Layouts/Footer'
import Navbar from './Common Layouts/Navbar'

function MainLayout() {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout