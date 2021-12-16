import React from 'react'
import { PropTypes } from 'prop-types';

import './button.css'


const Button = ({ subClass = '', onClick, text, data = null }) =>
    <button className={`btn ${subClass}`} onClick={(e) => onClick(data || e)}>
        {text}
    </button>

Button.propTypes = {
    subClass: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
