import React from 'react'
import Icon from './../icon';

const IconButton = ({ className, classNameIcon, htmlFor, alt, src, child = null, text = null }) => {

    const innerContent = child || <Icon className={classNameIcon} alt={alt} src={src} />

    return (
        <label className={className} htmlFor={htmlFor}>
            {text}
            {innerContent}
        </label>
    )
}

export default IconButton
