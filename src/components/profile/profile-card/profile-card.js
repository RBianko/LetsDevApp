import React from 'react'
import './profile-card.css'
import defaultIcon from '../../../img/users.svg'

const ProfileCard = ({ title, firstName, role, profilePicture }) => {
    return (
        <div className="profile__card_small card">
            <div className="card__header card__header_small">dev.person</div>
            <div className="card__content profile-content_small">
                <img className="profile__icon_small" src={profilePicture || defaultIcon} alt="profile" />
                <div className="profile__info">
                    <span className="profile__info_name-small">{title}</span>
                    <span className="profile__info_role-small">{role}role</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
