import React from 'react'
import { connect } from 'react-redux'
import './profile-card.css'

import PropTypes from 'prop-types';
// import { useHistory } from "react-router-dom";

const ProfileCard = ({ userId, users, role }) => {
    const { firstName, lastName, profilePicture, roles } = users.find(user => user.userId === userId)
    const displayedRole = role || roles[0]

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
                    <span className="profile__info_role-small">{displayedRole}</span>
                </div>
            </div>
        </div>
    )
}

ProfileCard.propTypes = {
    userId: PropTypes.string.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    role: PropTypes.string,
}

export default connect(
    ({ users }) => ({ users: users.list }),
)(ProfileCard)
