import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import ShopFilter from '../../Components/Shop Components/Shop Filter';

function ShopPage() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>ShopPage</title>
            </Helmet>
            <div id={style.ShopPage}>
                <div className={style.pageTitle}>
                    <span className={style.path}>Shop /</span>
                    <h1 className={style.filterText}>Shop: All</h1>
                </div>
                <div className={style.container}>
                    <div className={style.filterBox}>
                        <h2 className={style.filterBoxTitle}>Filters:</h2>

                        <div className={style.filter}>
                            <h3 className={style.filterTitle}>Car Models</h3>
                            
                            <div className={`${style.filters}`}>
                                <div className={style.modelFilter}>
                                    <span className={style.text}>Audi</span>
                                    <span className={style.count}>(6)</span>
                                </div>
                                <div className={style.modelFilter}>
                                    <span className={style.text}>BWM</span>
                                    <span className={style.count}>(2)</span>
                                </div>
                                <div className={style.modelFilter}>
                                    <span className={style.text}>Dacia</span>
                                    <span className={style.count}>(0)</span>
                                </div>
                                <div className={style.modelFilter}>
                                    <span className={style.text}>Pagani</span>
                                    <span className={style.count}>(2)</span>
                                </div>
                                <div className={style.modelFilter}>
                                    <span className={style.text}>Ford</span>
                                    <span className={style.count}>(4)</span>
                                </div>
                                <div className={style.modelFilter}>
                                    <span className={style.text}>Lotus</span>
                                    <span className={style.count}>(1)</span>
                                </div>
                                <div className={style.modelFilter}>
                                    <span className={style.text}>Mercedes-Benz</span>
                                    <span className={style.count}>(3)</span>
                                </div>
                                <div className={style.modelFilter}>
                                    <span className={style.text}>Chevrolet</span>
                                    <span className={style.count}>(1)</span>
                                </div>
                                <div className={style.modelFilter}>
                                    <span className={style.text}>Mazda</span>
                                    <span className={style.count}>(0)</span>
                                </div>
                                <div className={style.modelFilter}>
                                    <span className={style.text}>Tesla</span>
                                    <span className={style.count}>(2)</span>
                                </div>
                            </div>

                        </div>

                        <ShopFilter title={"Body Type"} />
                    </div>
                    <div className={style.shopBox}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopPage