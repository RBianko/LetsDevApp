import React from 'react'
import './search.css'
import ProfileSearchCard from '../profile/profile-card/profile-search-card';

const SearchUsers = ({ currentUser, users }) => {

    const usersList = users.map((user) => {

        const isFollowing = currentUser.follow.following.some(id => id === user.userId)
        const isFollower = currentUser.follow.followers.some(id => id === user.userId)

        const isFollow = isFollowing ? null : 'Follow'
        const isFollowBack = isFollower && !isFollowing ? 'Follow Back' : null

        const followState = isFollowBack || isFollow || 'Unfollow'

        return <ProfileSearchCard key={user.userId} user={user} followState={followState} />
    })

    return (
        <div className="devs__search-grid">
            {usersList}
        </div>
    )
}

export default SearchUsers
