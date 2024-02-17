import React, { useMemo } from 'react';
import { Helmet } from "react-helmet-async";
import ShopFilter from '../../Components/Shop Components/Shop Filter';
import ShopProduct from '../../Components/Shop Components/Shop Product';
import { useProduct } from '../../Context/productContext';
import { useFilter } from '../../Context/shopFiltersContext';
import usePagination from '../../Hooks/usePagination';
import style from './index.module.scss';

function ShopPage() {

    const [sort, setSort] = React.useState(null)

    const [gridStyle, setGridStyle] = React.useState(1)

    const { Filters, setFilters, UpdateFilter, bodyTypes, setBodyTypes, models, setModels, GetModels, GetInfo } = useFilter()

    const { Products, setProducts, isLoading } = useProduct()

    const FilteredData = useMemo(() => Products.filter(x => x.title.includes(Filters)).sort((a, b) => {
        // console.log(sort);
        if (sort && sort.asc) {
            return (a[sort.property] > b[sort.property]) ? 1 : ((b[sort.property] > a[sort.property]) ? -1 : 0)
        }
        else if (sort && sort.asc === false) {
            return (a[sort.property] < b[sort.property]) ? 1 : ((b[sort.property] < a[sort.property]) ? -1 : 0)
        } else {
            return null
        }
    }), [Filters, Products, sort])

    const [PageDatas, currentPage, setCurrentPage, setDataPerPage, pageNumbers, lastPageIndex, firstElementIndex, lastElementIndex] = usePagination(FilteredData, 6)



    function CheckStr(str) {
        if (typeof str === 'string') {
            return str.toLowerCase()
        }
        return str
    }

    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>ShopPage</title>
            </Helmet>
            <div id={style.ShopPage}>
                <div className={style.pageTitle}>
                    <span className={style.path}>Shop /</span>
                    <h1 className={style.filterText}>Shop: {Filters ? Filters : 'All'}</h1>
                </div>
                <div className={style.container}>
                    <div className={style.filterBox}>
                        <h2 className={style.filterBoxTitle}>Filters:</h2>

                        <div className={style.filter}>
                            <h3 className={style.filterTitle}>Car Models</h3>

                            <div className={`${style.filters}`}>
                                {!models ? <span className={style.loader}></span> :
                                    models.map((model, i) => (
                                        <div key={i} onClick={() => setFilters(Filters !== model.model ? model.model : '')} className={style.modelFilter}>
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
                            <div className={style.rSide}>
                                <div className={style.gridStyleBox}>
                                    <span onClick={() => setGridStyle(1)} className={`${style.gridStyle} ${style.gridStyleBlock} ${gridStyle === 1 ? style.gridActive : null}`}></span>
                                    <span onClick={() => setGridStyle(2)} className={`${style.gridStyle} ${style.gridStyleLine} ${gridStyle === 2 ? style.gridActive : null}`}></span>
                                </div>
                                <span className={style.productCount}>Showing {firstElementIndex + 1} - {lastElementIndex} of {FilteredData ? FilteredData.length : 0} results</span>
                            </div>
                            <div className={style.lSide}>
                                <span className={style.selectedSort}>{!sort ? 'Default' : sort.value}</span>
                                <div id={style.sort}>
                                    <span className={style.option} onClick={() => setSort(null)} value="title">Default</span>
                                    <span className={style.option} onClick={() => setSort({ property: 'title', asc: true, value: 'A-Z' })} value="title">A-Z</span>
                                    <span className={style.option} onClick={() => setSort({ property: 'title', asc: false, value: 'Z-A' })} value="title">Z-A</span>
                                </div>
                            </div>
                        </div>

                        <div className={style.products}>
                            {isLoading ? <span className={style.loader}></span> :
                                PageDatas
                                    .map((item, i) => (
                                        <div key={item._id} className={style.proCon} style={{ gridArea: `grid${i + 1}` }} ><ShopProduct item={item} /></div>
                                    ))
                            }
                        </div>

                        {pageNumbers.length > 1 ? <div className={style.paginationButtons}>
                            <button className={`PaginationButton`} onClick={() => setCurrentPage(currentPage > 1 ? (currentPage - 1) : currentPage)}><i className="fa-solid fa-arrow-left-long"></i></button>
                            {pageNumbers ? pageNumbers.map(x => (
                                <button key={x} className={`PaginationButton`} onClick={() => setCurrentPage(x)}>{x}</button>
                            )) : null}
                            <button className={`PaginationButton`} onClick={() => setCurrentPage(currentPage < lastPageIndex ? (currentPage + 1) : currentPage)}><i className="fa-solid fa-arrow-right-long"></i></button>
                        </div> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopPage