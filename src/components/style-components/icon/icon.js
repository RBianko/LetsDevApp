import React from 'react'
import { PropTypes } from 'prop-types';

const Icon = ({ className, alt, src }) => {
    return <img className={className} src={src} alt={alt} />
}

Icon.propTypes = {
    className: PropTypes.string,
    alt: PropTypes.string,
    src: PropTypes.string,
}

export default Icon