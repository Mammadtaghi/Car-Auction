import { createContext, useContext, useState } from "react";

const resNavContext = createContext()

export const ResNavProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const data = { isOpen, setIsOpen }

    return (
        <resNavContext.Provider value={data}>
            {children}
        </resNavContext.Provider>
    )
}

export const useResNav=()=>useContext(resNavContext)