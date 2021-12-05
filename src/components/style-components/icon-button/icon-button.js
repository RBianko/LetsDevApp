import React from 'react'
import Icon from './../icon';
import './icon-button.css'
import { PropTypes } from 'prop-types';

const IconButton = ({ className, classNameIcon, htmlFor, alt, src, child = null, text = null, onPress, data = null }) => {

    const innerContent = child || <Icon className={classNameIcon} alt={alt} src={src} />

    return (
        <label className={className} htmlFor={htmlFor} onClick={() => onPress(data)}>
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
    child: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    text: PropTypes.string,
}

export default IconButton
