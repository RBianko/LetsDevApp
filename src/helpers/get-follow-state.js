const getFollowState = (currentUser, user) => {
    const isFollowing = currentUser.follow.following.some(id => id === user._id)
    const isFollower = currentUser.follow.followers.some(id => id === user._id)

    const isFollow = isFollowing ? false : 'Подписаться'
    const isFollowBack = isFollower && !isFollowing ? 'Подписаться' : false

    return isFollowBack || isFollow || 'Отписаться'
}

export default getFollowState