import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const productContext = createContext()

export const ProductProvider = ({ children }) => {

    const [Products, setProducts] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    async function GetProducts() {
        try {
            const response = await axios.get('http://localhost:4728/product/');
            console.log(response.data);
            const productData = response.data.map(item => ({
                ...item,
                remainingTimeToEnd: formatTime((Date.now() - new Date(item.endTime).getTime())),
                remainingTimeToStart: formatTime((Date.now() - new Date(item.startTime).getTime())),
            }));
            setProducts(productData);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetProducts();

        const intervalId = setInterval(() => {
            setProducts(prevData => {
                return prevData.map(item => ({
                    ...item,
                    remainingTimeToEnd: formatTime(Math.abs(Date.now() - new Date(item.endTime).getTime())),
                    remainingTimeToStart: formatTime(Math.abs(Date.now() - new Date(item.startTime).getTime())),
                }));
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function formatTime(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds
        };
    }




    const data = { Products, setProducts, isLoading, GetProducts }

    return (
        <productContext.Provider value={data}>
            {children}
        </productContext.Provider>
    )
}

export const useProduct = () => useContext(productContext)