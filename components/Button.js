import React from 'react'

const Button = ({ href = '', target = '_blank', children, style }) => {


    return (
        <a
            href={href}
            target={target}
            style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: '10px 20px',
                backgroundColor: '#146Cf5',
                borderRadius: '6px',
                ...style
            }}
        >
            <span>
                {children}
            </span>
        </a>
    )
}

export default Button