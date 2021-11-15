import React from 'react'
import './search.css'

import getFollowState from '../../helpers/get-follow-state';
import ProfileSearchCard from '../profile/profile-card/profile-search-card';

const SearchUsers = ({ currentUser, users }) => {
    const usersList = users.map((user) => {
        return <ProfileSearchCard key={user.userId} user={user} followState={getFollowState(currentUser, user)} />
    })

    return (
        <div className="devs__search-grid">
            {usersList}
        </div>
    )
}

export default SearchUsers
