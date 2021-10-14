import React from 'react'
import './profile-card.css'

const ProfileCard = (props) => {
    let { firstName, role, profilePicture } = props.dev
    return (
        <div className="profile__card_small card">
            <div className="card__header card__header_small">dev.person</div>
            <div className="card__content profile-content_small">
                <img className="profile__icon_small" src={profilePicture} alt="profile" />
                <div className="profile__info_small">
                    <span className="profile__info_name-small">{firstName}</span>
                    <span className="profile__info_role-small">{role}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
