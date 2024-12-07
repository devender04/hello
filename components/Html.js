import React from 'react'

const Html = ({ children, dir = 'ltr', lang = 'en' }) => {
    return (
        <html dir={dir} lang={lang}>
            {children}
        </html>
    )
}

export default Html