import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { followToggle } from './../../../redux/modules/user/actions'
import { UserPropTypes } from './../../../redux/modules/user/prop-types'
import Button from './../../style-components/button'
import CardHeader from './../../style-components/card-header'

import locale from '../../../locale/en'

import defaultIcon from '../../../img/users.svg'
import './profile-card.css'

const ProfileSearchCard = ({ user, followStates, followToggle, getFollowState }) => {
    const [followState, setFollowState] = useState(followStates)
    const currentUser = useSelector(state => state.user)
    const { header } = locale.translation

    useEffect(() => { setFollowState(getFollowState(currentUser, user)) }, [currentUser, getFollowState, user])

    const { _id, firstName, lastName, city, country, roles, profilePicture } = user
    const rolesString = roles.join(', ')

    const onFollowToggle = () => {
        followToggle({ followerId: currentUser._id, followingId: user._id })
    }

    return (
        <div className="profile__card_search card">
            <CardHeader id={_id} title={header.userInfo} path={'profile'} size="medium" />
            <div className="card__content profile-content_search">
                <img className="profile__icon_search" src={profilePicture || defaultIcon} alt="profile" />
                <div className="profile__info profile__info_search">
                    <span className="profile__info_name_search">{firstName} {lastName}</span>
                    <div className="profile__other-info">
                        <div className="other-info__items">
                            <p className="profile__info_sity">{city}, {country}</p>
                            <span className="profile__info_role-small">{rolesString}</span>
                        </div>
                        <Button subClass={'btn_follow'} onClick={onFollowToggle} text={followState} />
                    </div>
                </div>

            </div>
        </div>
    )
}

ProfileSearchCard.propTypes = {
    user: UserPropTypes,
    followToggle: PropTypes.func,
}

export default connect(
    null,
    { followToggle }
)(ProfileSearchCard)
