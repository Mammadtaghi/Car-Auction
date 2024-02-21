import React from 'react';
import { useFilter } from '../../../Context/shopFiltersContext';
import style from "./index.module.scss";

function ShopFilter({ title, filterData, filterBy, setFilterBy }) {

    const [isOpen, setIsOpen] = React.useState(false)

    const [filter, setFilter] = React.useState('')

    const { Filters, setFilters, colors, setColors, filterByColor, setFilterByColor, filterByBody, setFilterByBody, AddToFilter, UpdateFilter, bodyTypes, setBodyTypes, models, setModels, GetModels, GetInfo } = useFilter()

    function handleFilters(filter, filterBy, setFilterBy) {
        AddToFilter(filter, filterBy, setFilterBy)
    }

    return (
        <div id={style.Filter}>

            <div onClick={() => setIsOpen(!isOpen)} className={style.filterTitleBox}>
                <h3 className={style.filterTitle}>{title}</h3>
                <span className={`${style.dropdownIcon}`}>{isOpen ? '-' : '+'}</span>
            </div>

            <div className={`${style.filters}`} style={isOpen ? { maxHeight: '800px' } : { maxHeight: '0px' }}>

                {filterData ? filterData.map((x, i) => (
                    <div key={i} onClick={() => handleFilters(x, filterBy, setFilterBy)} className={`${style.filter} ${filterBy.includes(x) ? style.selected : ''}`}>
                        <span className={style.text}>{x}</span>
                    </div>
                )) : null}

            </div>

        </div>
    )
}

export default ShopFilter