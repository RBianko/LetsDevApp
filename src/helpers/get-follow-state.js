const getFollowState = (currentUser, user) => {
    const isFollowing = currentUser.follow.following.some(id => id === user._id)
    const isFollower = currentUser.follow.followers.some(id => id === user._id)

    const isFollow = isFollowing ? false : 'Follow'
    const isFollowBack = isFollower && !isFollowing ? 'Follow Back' : false

    return isFollowBack || isFollow || 'Unfollow'
}

export default getFollowState