import React from 'react'
import './profile-card.css'

const ProfileCard = ({ firstName, role, profilePicture }) => {
    return (
        <div className="profile__card_small card">
            <div className="card__header card__header_small">dev.person</div>
            <div className="card__content profile-content_small">
                <img className="project__icon" src={profilePicture} alt="profile" />
                <div className="project__info">
                    <span className="profile__info_name-small">{firstName}Name</span>
                    <span className="profile__info_role-small">{role}role</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
