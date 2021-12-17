import React from 'react'

const SearchInput = ({ onInputChange, onSelectChange, options }) => {
    const optionsList = options.map(option =>
        <option key={option} value={option.toLowerCase()}>{option}</option>
    )

    return <>
        <input className="search__input" type="text" placeholder="Type here" onChange={(e) => onInputChange(e.target.value)} />
        <select
            className="search__select"
            id="search"
            type="text"
            placeholder="Type here"
            onChange={(e) => onSelectChange(e.target.value)}>
            <option hidden>Search by...</option>
            {optionsList}
        </select>
    </>
}

export default SearchInput
