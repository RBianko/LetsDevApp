import React from 'react'
import { UserPropTypes } from './../../../redux/modules/user/prop-types';
// import { useHistory } from "react-router-dom";
import './profile-card.css'

const ProfileCard = ({ user }) => {
    const { firstName, lastName, roles, profilePicture } = user
    let rolesList = roles.join(', ')

    // const history = useHistory()

    // const goToUserPage = () => {
    //     history.push({
    //         pathname: `/user/${userId}`,
    //         state: { user: user }
    //     });
    // }

    return (
        <div className="profile__card_small card">
            <div className="card__header card__header_small" onClick={() => { }}>
                user.info
            </div>
            <div className="card__content profile-content_small">
                <img className="profile__icon_small" src={profilePicture} alt="profile" />
                <div className="profile__info">
                    <span className="profile__info_name-small">{firstName} {lastName}</span>
                    <span className="profile__info_role-small">{rolesList}</span>
                </div>
            </div>
        </div>
    )
}

ProfileCard.propTypes = {
    user: UserPropTypes
}

export default ProfileCard
