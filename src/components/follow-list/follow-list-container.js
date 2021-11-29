import React from 'react'
import { Route } from 'react-router';
import FollowList from './follow-list';

const FollowListContainer = () => {
    return (
        <>
            <Route path='/followers'>
                <FollowList />
            </Route>
            <Route path='/following'>
                <FollowList />
            </Route>
        </>
    )
}

export default FollowListContainer
