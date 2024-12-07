import React from 'react'

const Row = ({ children, responsive = false }) => {

    return (
        <table style={{ width: '100%' }} className={responsive ? 'table-container' : ''} cellPadding={0} cellSpacing={0}>
            <tbody>
                <tr>
                    {children}
                </tr>
            </tbody>
        </table >
    )
}

export default Row