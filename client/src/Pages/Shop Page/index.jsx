import React, { useEffect, useMemo } from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import ShopFilter from '../../Components/Shop Components/Shop Filter';
import { useProduct } from '../../Context/productContext';
import ShopProduct from '../../Components/Shop Components/Shop Product';
import usePagination from '../../Hooks/usePagination';

function ShopPage() {

    const [bodyTypes, setBodyTypes] = React.useState([])

    const [models, setModels] = React.useState([])

    const { Products, setProducts, isLoading } = useProduct()

    const [PageDatas, currentPage, setCurrentPage, setDataPerPage, pageNumbers, lastPageIndex] = usePagination(Products, 6)

    function GetInfo(data, key) {

        let result = []

        data.forEach(x => {
            !result.includes(x.info[key]) ? result.push(x.info[key]) : null
        })

        return result
    }



    function GetModels(data, key) {

        let result = []

        data.forEach(x => {
            // result.push({ model: x[key].split(' ')[0], count: 1 })
            const index = result.findIndex(k => k.model === x[key].split(' ')[0])
            if (index === -1) {
                result.push({ model: x[key].split(' ')[0], count: 1 })
                return
            }
            result[index].count++
        })

        return result
    }

    useEffect(() => {
        setBodyTypes(GetInfo(Products, 'body'))
        setModels(GetModels(Products, 'title'))
    }, [Products])




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
                                {!models ? <span className={style.loader}></span> :
                                    models.map((model, i) => (
                                        <div key={i} className={style.modelFilter}>
                                            <span className={style.text}>{model.model}</span>
                                            <span className={style.count}>({model.count})</span>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                        <ShopFilter title={"Body Type"} filterData={bodyTypes} />

                        {/* // Add your filters here */}
                    </div>
                    <div className={style.shopBox}>
                        <div className={style.sortBox}>
                            
                        </div>

                        <div className={style.products}>
                            {isLoading ? <span className={style.loader}></span> :
                                PageDatas.map((item, i) => (
                                    <div key={item._id} style={{ gridArea: `grid${i + 1}` }} ><ShopProduct item={item} /></div>
                                ))
                            }
                        </div>

                        <div className={style.paginationButtons}>
                            <button className={`PaginationButton`} onClick={() => setCurrentPage(currentPage > 1 ? (currentPage - 1) : currentPage)}><i className="fa-solid fa-arrow-left-long"></i></button>
                            {pageNumbers ? pageNumbers.map(x => (
                                <button key={x} className={`PaginationButton`} onClick={() => setCurrentPage(x)}>{x}</button>
                            )) : null}
                            <button className={`PaginationButton`} onClick={() => setCurrentPage(currentPage < lastPageIndex ? (currentPage + 1) : currentPage)}><i className="fa-solid fa-arrow-right-long"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopPage