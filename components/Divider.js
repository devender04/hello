import React from 'react'

const Divider = ({dividerStyle = 'solid', color = 'black', thickness = '1px'}) => {
    return (
        <div style={{height:'1px', borderBottomWidth: thickness, borderBottomColor: color, borderBottomStyle: dividerStyle }} />
    )
}

export default Divider