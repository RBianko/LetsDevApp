import React from 'react'
import { countries } from './countries-array'

const CountriesDatalist = () => {

    const countriesList = countries.map(name =>
        <option key={name} value={name}>{name}</option>
    )

    return (
        <datalist id="countries" >
            {countriesList}
        </datalist>
    )
}

export default CountriesDatalist
