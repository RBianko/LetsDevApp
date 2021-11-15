import React from 'react'
import { connect } from 'react-redux'
import './profile-card.css'

import PropTypes from 'prop-types';
import CardHeader from './../../style-components/card-header';

const ProfileCard = ({ userId, users, role, creator }) => {
    const { firstName, lastName, profilePicture, roles } = users.find(user => user.userId === userId)
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
    userId: PropTypes.string.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    role: PropTypes.string,
}

export default connect(
    ({ users }) => ({ users: users.list }),
)(ProfileCard)
