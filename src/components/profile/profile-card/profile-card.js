import React from 'react'
import PropTypes from 'prop-types';

import CardHeader from './../../style-components/card-header';
import { UserPropTypes } from './../../../redux/modules/user/prop-types';

import locale from '../../../locale/en'
import './profile-card.css'

const ProfileCard = ({ user, role, creator }) => {
    const { header, tooltip } = locale.translation
    if (!user) {
        return null
    }

    const { _id, firstName, lastName, roles, profilePicture } = user
    const displayedRole = role || roles[0]
    const isCreator = creator ? <span title={tooltip.creator}>&#9733; {header.userInfo}</span> : header.userInfo

    return (
        <div className="profile__card_small card">
            <CardHeader id={_id} title={isCreator} path={'profile'} size={'small'} />
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
