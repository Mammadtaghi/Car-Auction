import React from 'react'

function useLocalstorage(storagename, defaulValue=null) {

    const [data, setData] = React.useState(localStorage.getItem(storagename) ? JSON.parse(localStorage.getItem(storagename)) : defaulValue)

    React.useEffect(() => {
        localStorage.setItem(storagename, JSON.stringify(data))
    }, [data])

    function ManualUpdate() {
        localStorage.setItem(storagename, JSON.stringify(data))
    }

    return [data, setData, ManualUpdate]
}

export default useLocalstorage