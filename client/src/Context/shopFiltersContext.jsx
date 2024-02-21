import { createContext, useContext, useEffect, useState } from "react";
import { useProduct } from "./productContext";

const shopFilterContext = createContext()

export const ShopFilterProvider = ({ children }) => {

    const { Products, setProducts, isLoading } = useProduct()

    const [Filters, setFilters] = useState('')

    const [filterByBody, setFilterByBody] = useState([])

    const [filterByColor, setFilterByColor] = useState([])

    const [bodyTypes, setBodyTypes] = useState([])

    const [colors, setColors] = useState([])

    const [models, setModels] = useState([])

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


    function GetInfo(data, key) {

        let result = []

        data.forEach(x => {
            !result.includes(x.info[key]) ? result.push(x.info[key]) : null
        })

        return result
    }

    function GetColor(data, key) {

        let result = []

        data.forEach(x => {
            !result.includes(x.info[key]) ? result.push(x.info[key]) : null
        })

        return result
    }


    function UpdateFilter(filter) {
        const index = Filters.findIndex(x => x === filter)
        if (index === -1) {
            setFilters([...Filters, filter])
            return
        }
        setFilters(Filters.filter(x => x !== filter))
    }


    function AddToFilter(filter, storage, setStorage) {
        const index = storage.findIndex(x => x === filter)
        if (index === -1) {
            setStorage([...storage, filter])
            return
        }
        setStorage(storage.filter(x => x !== filter))
    }


    useEffect(() => {
        setBodyTypes(GetInfo(Products, 'body'))
        setModels(GetModels(Products, 'title'))
        setColors(GetColor(Products, 'color'))
    }, [Products])

    const data = { Filters, setFilters, UpdateFilter, colors, setColors, filterByColor, setFilterByColor, bodyTypes, setBodyTypes, filterByBody, setFilterByBody, AddToFilter, models, setModels, GetModels, GetInfo }

    return (
        <shopFilterContext.Provider value={data}>
            {children}
        </shopFilterContext.Provider>
    )
}

export const useFilter = () => useContext(shopFilterContext)