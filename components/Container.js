import React from 'react'

const Container = ({ children, style }) => {
    return (
        <tr>
            <td>
                <div style={style}>
                    {children}
                </div>
            </td>
        </tr>
    )
}

export default Container