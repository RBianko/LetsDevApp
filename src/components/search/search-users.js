import React from 'react'

import getFollowState from '../../helpers/get-follow-state'
import ProfileSearchCard from '../profile/profile-card/profile-search-card'

import locale from '../../locale/en'

import './search.css'


const SearchUsers = ({ currentUser, users = [] }) => {
    const usersList = users.map(user =>
        <ProfileSearchCard key={user._id} user={user} currentUser={currentUser} followStates={getFollowState(currentUser, user)} getFollowState={getFollowState} />
    )

    const usersListContent = usersList?.length > 0 ? usersList : <h3>{locale.translation.text.noResultsFound}</h3>

    return (
        <div className="devs__search-grid">
            {usersListContent}
        </div>
    )
}

export default SearchUsers