import React from 'react'
import { PropTypes } from 'prop-types';


const FormInput = ({ type, name, placeholder, onChange }) =>
    <input className="form-input" type={type} name={name} placeholder={placeholder} required onChange={onChange} />


FormInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
}

export default FormInput