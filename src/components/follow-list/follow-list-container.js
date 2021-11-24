import React from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router';

import { PropTypes } from 'prop-types';
import FollowList from './follow-list';


const FollowListContainer = ({ user: currentUser, users }) => {
    const { follow } = currentUser

    const followers = follow.followers.map((followerId) =>
        users.find(user => followerId === user._id)
    )

    const following = follow.following.map((followerId) =>
        users.find(user => followerId === user._id)
    )

    return (
        <>
            <Route path='/followers'>
                <FollowList currentUser={currentUser} users={followers} />
            </Route>
            <Route path='/following'>
                <FollowList currentUser={currentUser} users={following} />
            </Route>
        </>
    )
}

FollowListContainer.propTypes = {
    user: PropTypes.object.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect(
    (({ user, users }) => ({ user, users: users.list }))
)(FollowListContainer)
