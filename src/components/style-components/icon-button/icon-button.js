import React from 'react'

const IconButton = ({ className, alt, src }) => {
    return (
        <img className={className} src={src} alt={alt} />
    )
}

export default IconButton
