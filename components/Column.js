import React from 'react'

const Column = ({ children }) => {
    return (
        <td className='column'>
            {children}
        </td>
    )
}

export default Column;