import React from 'react'
import style from "./index.module.scss";

function ShopFilter({ title, filterData }) {

    const [isOpen, setIsOpen] = React.useState(false)

    const [filter, setFilter] = React.useState(null)

    return (
        <div id={style.Filter}>

            <div onClick={() => setIsOpen(!isOpen)} className={style.filterTitleBox}>
                <h3 className={style.filterTitle}>{title}</h3>
                <span className={`${style.dropdownIcon}`}>{isOpen ? '-' : '+'}</span>
            </div>

            <div className={`${style.filters}`} style={isOpen ? { maxHeight: '800px' } : { maxHeight: '0px' }}>

                <div onClick={() => setFilter(filter === 'Audi' ? '' : 'Audi')} className={`${style.filter} ${filter === 'Audi' ? style.selected : ''}`}>
                    <span className={style.text}>Audi</span>
                </div>

                <div onClick={() => setFilter(filter === 'BMW' ? '' : 'BMW')} className={`${style.filter} ${filter === 'BMW' ? style.selected : ''}`}>
                    <span className={style.text}>BMW</span>
                </div>

            </div>

        </div>
    )
}

export default ShopFilter