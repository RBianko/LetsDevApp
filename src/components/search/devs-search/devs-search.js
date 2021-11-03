import React, { useState } from 'react'
import { connect } from 'react-redux';
import './devs-search.css'

import searchIcon from '../../../img/search.svg'
import ProfileSearchCard from '../../profile/profile-card/profile-search-card';
import { PropTypes } from 'prop-types';
import { UserPropTypes } from './../../../redux/modules/user/prop-types';
import { follow, unfollow } from './../../../redux/modules/user/actions';


const DevsSearch = ({ user, users }) => {

    const [] = useState();
    const isFollowed = false

    const onFollowClick = (id) => {
        follow(id)
    }

    const onUnfollowHandle = (id) => {

    }

    const usersList = users.map((user) =>
        <ProfileSearchCard key={user.userId} user={user} followState={isFollowed} onFollowClick={onFollowClick} />
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

DevsSearch.propTypes = {
    user: UserPropTypes,
    users: PropTypes.arrayOf(PropTypes.shape({ UserPropTypes })),
    follow: PropTypes.func,
    unfollow: PropTypes.func,
}

export default connect(
    (({ user, users }) => ({ user, users: users.list })),
    (follow, unfollow)
)(DevsSearch)