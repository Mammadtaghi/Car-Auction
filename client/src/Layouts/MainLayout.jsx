import React from 'react'
import Header from './Common Layouts/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Common Layouts/Footer'
import Navbar from './Common Layouts/Navbar'
import ResNav from './Common Layouts/ResNav'
import { ResNavProvider } from '../Context/resNavContext'

function MainLayout() {
    return (
        <>
            <ResNavProvider>
                <div id={`HeaderHolder`}>
                    <Header />
                    <Navbar />
                    <ResNav />
                </div>
            </ResNavProvider>
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout