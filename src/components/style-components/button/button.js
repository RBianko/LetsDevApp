import React from 'react'
import './button.css'

import { PropTypes } from 'prop-types';

const Button = ({ subClass, onClick, text, data = null }) =>
    <button className={`btn ${subClass}`} onClick={() => onClick(data)}>
        {text}
    </button>

Button.propTypes = {
    subClass: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
