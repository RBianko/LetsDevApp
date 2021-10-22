import React from 'react'
import { connect } from 'react-redux';

import './devs-search.css'
import searchIcon from '../../../img/search.svg'
import ProfileSearchCard from '../../profile/profile-card/profile-search-card';


const DevsSearch = ({ users }) => {

    const usersList = users.map((user) =>
        <ProfileSearchCard key={user.id} user={user} />
    )

    return (
        <div className='container'>
            <div className='card card_search'>
                <div className="card__header">
                    search.engine
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">Devs Search</p>
                    <div className="search">
                        <input className="search__input" type="text" placeholder="Type here" />
                        <button className="searchButton" type="submit">
                            <img className="search-icon" src={searchIcon} alt="Search" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="devs__search-grid">
                {usersList}
            </div>

        </div>
    )
}

export default connect(
    (({ users }) => ({ users: users.list }))
)(DevsSearch)