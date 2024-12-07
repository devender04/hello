import React from 'react'

const Link = ({ children, style, href, target = '_blank' }) => {
	return (
		<a href={href} target={target} style={{ color: '#067df7', textDecoration: 'none', ...style }}>{children}</a>
	)
}

export default Link