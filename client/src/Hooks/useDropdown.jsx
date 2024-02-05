import React from 'react'

function useDropdown(state) {

    const [isOpen, setIsOpen] = React.useState(state)

    return [isOpen, setIsOpen]
}

export default useDropdown