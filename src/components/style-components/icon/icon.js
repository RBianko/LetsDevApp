import React from 'react'
import { PropTypes } from 'prop-types';
import './icon.css'

const Icon = ({ className, alt, src, title }) => {
    return <img className={className} src={src} alt={alt} title={title} />
}

Icon.propTypes = {
    className: PropTypes.string,
    alt: PropTypes.string,
    src: PropTypes.string,
}

export default Icon