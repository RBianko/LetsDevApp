import React from 'react'
import { connect } from 'react-redux';
import './follow-list.css'

import { PropTypes } from 'prop-types';

import searchIcon from '../../img/search.svg'
import SearchUsers from '../search';

const FollowList = ({ currentUser, users }) => {

    return (
        <div className='container'>
            <div className='card card_search'>
                <div className="card__header">
                    follow.list
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">Search</p>
                    <div className="search">
                        <input className="search__input" type="text" placeholder="Type here" />
                        <button className="searchButton" type="submit">
                            <img className="search-icon" src={searchIcon} alt="Search" />
                        </button>
                    </div>
                </div>
            </div>
            <SearchUsers currentUser={currentUser} users={users} />
        </div>
    )
}

FollowList.propTypes = {
    currentUser: PropTypes.object.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FollowList
