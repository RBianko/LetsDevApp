import React from 'react'
// import { useHistory } from "react-router-dom";
import './profile-card.css'
import defaultIcon from '../../../img/users.svg'

const ProfileSearchCard = ({ user }) => {
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
        <div className="profile__card_search card">
            <div className="card__header card__header_small" onClick={() => { }}>
                user.info
            </div>
            <div className="card__content profile-content_search">
                <img className="profile__icon_search" src={profilePicture || defaultIcon} alt="profile" />
                <div className="profile__info profile__info_search">
                    <span className="profile__info_name_search">{firstName} {lastName}</span>
                    <span className="profile__info_role-small">{rolesList}</span>
                </div>
                <button className="btn btn_follow">Follow</button>
            </div>
        </div>
    )
}

export default ProfileSearchCard
