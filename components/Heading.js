import React from 'react'

const Heading = ({ Tag = 'h1', children, style }) => {

    return (

        <Tag style={{ padding: '40px', ...style, boxSizing: 'border-box' }}>
            {children}
        </Tag>

    )
}

export default Heading