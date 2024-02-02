import React from 'react'
import Header from './Common Layouts/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Common Layouts/Footer'

function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout