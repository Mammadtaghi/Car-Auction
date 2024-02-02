import React from 'react'

function useLocalstorage(storagename) {

    const [data, setData] = React.useState(localStorage.getItem(storagename) ? JSON.parse(localStorage.getItem(storagename)) : [])

    React.useEffect(() => {
        localStorage.setItem(storagename, JSON.stringify(data))
    }, [data])

    return [data, setData]
}

export default useLocalstorage