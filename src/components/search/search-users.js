import React from 'react'
import './search.css'

import getFollowState from '../../helpers/get-follow-state';
import ProfileSearchCard from '../profile/profile-card/profile-search-card';

const SearchUsers = ({ currentUser, users = [] }) => {
    const usersList = users.map((user) => {
        return <ProfileSearchCard key={user._id} user={user} currentUser={currentUser} followState={getFollowState(currentUser, user)} />
    })

    const usersListContent = usersList?.length > 0 ? usersList : <h3>No results found.</h3>

    return (
        <div className="devs__search-grid">
            {usersListContent}
        </div>
    )
}

export default SearchUsers
