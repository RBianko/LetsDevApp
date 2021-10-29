import React from 'react'

const Button = ({ subClass, onClick, text }) =>
    <button className={`btn ${subClass}`} onClick={onClick}>
        {text}
    </button>

export default Button
