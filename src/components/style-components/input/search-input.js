import React from 'react'
import locale from '../../../locale/en'

const SearchInput = ({ onInputChange, onSelectChange, options }) => {
    const { placeholder } = locale.translation
    const optionsList = options.map(option =>
        <option key={option} value={option.toLowerCase()}>{option}</option>
    )

    return <>
        <input className="search__input" type="text" placeholder={placeholder.typeHere} onChange={(e) => onInputChange(e.target.value)} />
        <select
            className="search__select"
            id="search"
            type="text"
            placeholder={placeholder.selectOne}
            onChange={(e) => onSelectChange(e.target.value)}>
            <option hidden>Search by...</option>
            {optionsList}
        </select>
    </>
}

export default SearchInput
