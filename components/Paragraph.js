import React from 'react'

const Paragraph = ({ children, style }) => {
    return (
        <p style={{ padding: '40px', ...style, boxSizing: 'border-box' }}>
            {children}
        </p>
    )
}

export default Paragraph