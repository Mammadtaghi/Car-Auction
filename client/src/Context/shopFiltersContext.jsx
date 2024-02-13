import { createContext, useContext, useState } from "react";

const shopFilterContext = createContext()

export const ShopFilterProvider = ({ children }) => {

    const [Filters, setFilters] = useState('')

    function UpdateFilter(filter) {
        const index = Filters.findIndex(x => x === filter)
        if (index === -1) {
            setFilters([...Filters, filter])
            return
        }
        setFilters(Filters.filter(x => x !== filter))
    }

    const data = { Filters, setFilters, UpdateFilter }

    return (
        <shopFilterContext.Provider value={data}>
            {children}
        </shopFilterContext.Provider>
    )
}

export const useFilter = () => useContext(shopFilterContext)