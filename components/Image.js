import React from 'react'

const Image = ({ src, alt = 'image', height = '100%', width = '100%', style }) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <img src={src} alt={alt} height={height} width={width} style={{ display: 'block', ...style, boxSizing: 'border-box' }} />
        </div>
    )
}

export default Image