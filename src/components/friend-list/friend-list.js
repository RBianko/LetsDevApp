import React from 'react'
import { connect } from 'react-redux';
import './friend-list.css'

import { PropTypes } from 'prop-types';

import searchIcon from '../../img/search.svg'
import ProfileCard from './../profile/profile-card';



const FriendList = ({ friends }) => {
    const friendsList = friends.map((user) =>
        <ProfileCard key={user.id} user={user} />
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
            {friendsList}
        </div>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default connect(
    (({ user }) => ({ friends: user.friends }))
)(FriendList)
