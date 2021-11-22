import React from 'react'
import './profile-card.css'

import PropTypes from 'prop-types';
import CardHeader from './../../style-components/card-header';
import { UserPropTypes } from './../../../redux/modules/user/prop-types';

const ProfileCard = ({ user, role, creator }) => {
    const { userId, firstName, lastName, roles, profilePicture } = user
    const displayedRole = role || roles[0]
    const isCreator = creator ? <span title="Creator">&#9733;user.info</span> : "user.info"

    return (
        <div className="profile__card_small card">
            <CardHeader id={userId} title={isCreator} path={'profile'} size={'small'} />
            <div className="card__content profile-content_small" >
                <img className="profile__icon_small" src={profilePicture} alt="profile" />
                <div className="profile__info profile__info_small">
                    <span className="profile__info_name-small">{firstName} {lastName}</span>
                    <span className="profile__info_role-small">{displayedRole}</span>
                </div>
            </div>
        </div>
    )
}

ProfileCard.propTypes = {
    user: UserPropTypes,
    role: PropTypes.string,
    creator: PropTypes.bool
}

export default ProfileCard
