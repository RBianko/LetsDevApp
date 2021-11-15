const getFollowState = (currentUser, user) => {
    let followState = ''
    const isFollowing = currentUser.follow.following.some(id => id === user.userId)
    const isFollower = currentUser.follow.followers.some(id => id === user.userId)

    const isFollow = isFollowing ? null : 'Follow'
    const isFollowBack = isFollower && !isFollowing ? 'Follow Back' : null

    followState = isFollowBack || isFollow || 'Unfollow'

    return followState
}

export default getFollowState