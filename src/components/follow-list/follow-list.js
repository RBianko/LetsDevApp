import React from 'react'
import { connect } from 'react-redux';
import './follow-list.css'

import { PropTypes } from 'prop-types';

import searchIcon from '../../img/search.svg'
import SearchUsers from '../search';

const FollowList = ({ user: currentUser, users }) => {
    const { follow } = currentUser

    const followers = follow.followers.map((followerId) =>
        users.find(user => followerId === user.userId)
    )

    const following = follow.following.map((followerId) =>
        users.find(user => followerId === user.userId)
    )

    return (
        <div className='container'>
            <div className='card card_search'>
                <div className="card__header">
                    friend.list
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
            <SearchUsers currentUser={currentUser} users={following} />
            <SearchUsers currentUser={currentUser} users={followers} />
        </div>
    )
}

FollowList.propTypes = {
    user: PropTypes.object.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect(
    (({ user, users }) => ({ user, users: users.list }))
)(FollowList)
