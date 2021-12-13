import React from 'react'
import { PropTypes } from 'prop-types';

import Icon from './../icon';
import './icon-button.css'


const IconButton = ({ className, classNameIcon, htmlFor, alt, src, child = null, text = null, onClick = () => { }, data = null }) => {

    const innerContent = child || <Icon className={classNameIcon} alt={alt} src={src} />

    return (
        <label className={className} htmlFor={htmlFor} onClick={() => onClick(data)}>
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
