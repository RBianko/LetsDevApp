import React from 'react'
import Icon from './../icon';
import { PropTypes } from 'prop-types';

const IconButton = ({ className, classNameIcon, htmlFor, alt, src, child = null, text = null }) => {

    const innerContent = child || <Icon className={classNameIcon} alt={alt} src={src} />

    return (
        <label className={className} htmlFor={htmlFor}>
            {text}
            {innerContent}
        </label>
    )
}

IconButton.propTypes = {
    className: PropTypes.string,
    classNameIcon: PropTypes.string,
    htmlFor: PropTypes.string,
    alt: PropTypes.string,
    src: PropTypes.string,
    child: PropTypes.string,
    text: PropTypes.string,
}

export default IconButton
