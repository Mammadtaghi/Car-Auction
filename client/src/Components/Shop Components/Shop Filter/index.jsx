import React from 'react';
import { useFilter } from '../../../Context/shopFiltersContext';
import style from "./index.module.scss";

function ShopFilter({ title, filterData }) {

    const { Filters, setFilters, UpdateFilter } = useFilter()

    const [isOpen, setIsOpen] = React.useState(false)

    const [filter, setFilter] = React.useState('')

    return (
        <div id={style.Filter}>

            <div onClick={() => setIsOpen(!isOpen)} className={style.filterTitleBox}>
                <h3 className={style.filterTitle}>{title}</h3>
                <span className={`${style.dropdownIcon}`}>{isOpen ? '-' : '+'}</span>
            </div>

            <div className={`${style.filters}`} style={isOpen ? { maxHeight: '800px' } : { maxHeight: '0px' }}>

                {filterData ? filterData.map((x, i) => (
                    <div key={i} onClick={() => setFilter(filter === x ? '' : x)} className={`${style.filter} ${filter === x ? style.selected : ''}`}>
                        <span className={style.text}>{x}</span>
                    </div>
                )) : null}

            </div>

        </div>
    )
}

export default ShopFilter