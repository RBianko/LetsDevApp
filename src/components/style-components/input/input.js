import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types';

import './input.css'


const Input = forwardRef(({ type, id, placeholder, value, onChange, list, disabled }, ref) => {
    return (
        <div className="input-block">
            <label className="text-label" htmlFor={id}>{placeholder}</label>
            <input className="text-input" type={type} id={id} disabled={disabled} list={list} placeholder={placeholder} value={value} ref={ref} onChange={onChange} />
        </div>
    )
})

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    list: PropTypes.string,
    child: PropTypes.string,
    disabled: PropTypes.bool,
}

export default Input
