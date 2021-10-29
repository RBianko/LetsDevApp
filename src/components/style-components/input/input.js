import React, { forwardRef } from 'react'
import './input.css'

const Input = forwardRef(({ type, id, placeholder, value, onChange, list, disabled }, ref) => {
    return (
        <div className="input-block">
            <label className="text-label" htmlFor={id}>{placeholder}</label>
            <input className="text-input" type={type} id={id} disabled={disabled} list={list} placeholder={placeholder} value={value} ref={ref} onChange={onChange} />
        </div>
    )
}
)
export default Input
