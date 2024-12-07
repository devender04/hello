import React from 'react'

const Body = ({ children, center }) => {
    return (
        <body>
            <table style={{ width: '600px', maxWidth: '100%', margin: center ? 'auto' : '' }} cellPadding={0} cellSpacing={0}>
                <tbody>
                    {children}
                </tbody>
            </table>
        </body>
    )
}

export default Body