import React from 'react'
import { PropTypes } from 'prop-types';

const Button = ({ subClass, onClick, text }) =>
    <button className={`btn ${subClass}`} onClick={onClick}>
        {text}
    </button>

Button.propTypes = {
    subClass: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
