import { createContext, useContext } from "react";
import useLocalstorage from "../Hooks/useLocalstorage";

const userContext = createContext()

export const UserProvider = ({ children }) => {

    const [user, setUser, ManualUpdate] = useLocalstorage('user', { id: '', username: '', role: '', basket: [], wishlist: [], vending: [], token: '' })

    function Logout() {
        setUser({ id: '', username: '', role: '', basket: [], wishlist: [], vending: [], token: '' })
    }

    const data = { user, setUser, Logout }

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () => useContext(userContext)